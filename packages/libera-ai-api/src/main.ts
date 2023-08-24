import { VersioningType } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { JwtAuthGuard } from '@infra/http/auth/jwt-auth.guard'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableVersioning({
    type: VersioningType.URI,
  })

  app.useGlobalGuards(new JwtAuthGuard(new Reflector()))

  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Api da aplicação test-licitar')
    .setVersion('1.0')
    .addTag('licitar-test-api')
    .addBearerAuth({ in: 'header', type: 'http' })
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  await app.listen(Number(process.env.API_PORT ?? 4000))
}
bootstrap()
