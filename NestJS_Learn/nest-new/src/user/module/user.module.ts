import { Logger, Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller.js';
import { UserService } from '../service/user.service.js';
import { UserLoggerService } from '../logger/user.logger.service.js';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService,UserLoggerService],
})
export class UserModule {}
