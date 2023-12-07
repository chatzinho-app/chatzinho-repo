import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'

import { AuditService } from '@application/services/audit.service'
import { Audit } from '@domain/schemas/audit.schema'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

import { Request } from '../interfaces/request.interface'

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(
    private readonly auditService: AuditService,
    private readonly reflector: Reflector,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map((value) => {
          const req = context.switchToHttp().getRequest()
          const omitAudit = this.reflector.get(
            'omitAudit',
            context.getHandler(),
          )
          if (!omitAudit) {
            this.getAudit(req as Request, value).then((audit) => {
              this.auditService.createOne(audit)
            })
          }
          return value
        }),
      )
      .pipe(
        catchError((err) => {
          const req = context.switchToHttp().getRequest()
          const omitAudit = this.reflector.get(
            'omitAudit',
            context.getHandler(),
          )
          if (!omitAudit) {
            this.getAudit(req as Request, err).then((audit) => {
              this.auditService.createOne(audit)
            })
          }
          return throwError(err)
        }),
      )
  }

  private async getAudit(req: Request, value: any): Promise<Audit> {
    return {
      actionName: req.path,
      actionMethod: req.method,
      requestBody: req.body,
      requestHeaders: req.headers,
      requestParams: req.params,
      requestQueryString: req.query,
      response: value,
      userId: req.user?.id ? String(req.user?.id) : undefined,
      userName: req.user?.id ? String(req.user?.name) : undefined,
      browser: req.headers['user-agent'],
      ipAddress:
        req.socket.remoteAddress ||
        (req.headers?.['x-forwarded-for'] as string),
    }
  }

  private getActionFromPath(path: string) {
    const parts = path.split('/')
    return parts[parts.length - 1]
  }
}
