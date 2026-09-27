import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Response } from 'express';

@Injectable()
export default class TransformInterceptor<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getResponse<Response>();
    const statusCode = request.statusCode;
    const message = statusCode === 200 ? 'Success' : 'Error';
    return next.handle().pipe(
      map((data : T)=> ({
        statusCode,
        message,
        data,
      })),
    );
  }
}
