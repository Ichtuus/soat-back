import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
