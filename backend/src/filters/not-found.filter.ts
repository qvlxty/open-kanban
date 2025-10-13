
import { NotFoundError } from '@mikro-orm/core';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(NotFoundError)
export class NotFoundFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (exception instanceof NotFoundError) {
         response
            .status(404)
            .json({
                statusCode: 404,
                path: request.url,
                cause: exception.cause,
                message: exception.message,
            });
    }

  }
}
