import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CycleModule } from './cycle/cycle.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/period-tracker'),
    UserModule,
    CycleModule,
    AuthModule,
  ],
})
export class AppModule {}
