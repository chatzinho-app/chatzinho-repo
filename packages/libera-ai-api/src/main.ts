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

  app.enableCors()
  app.useGlobalGuards(new JwtAuthGuard(new Reflector()))

  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Api da aplicação LiberaAi')
    .setVersion('1.0')
    .addTag('libera-ai-api')
    .addBearerAuth({ in: 'header', type: 'http' })
    .setBasePath('http://localhost:4000/api-json')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  await app.listen(Number(process.env.API_PORT ?? 4000))
}
bootstrap()
