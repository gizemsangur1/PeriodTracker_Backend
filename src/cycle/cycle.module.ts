import { Module } from '@nestjs/common';
import { CycleService } from './cycle.service';
import { CycleController } from './cycle.controller';

@Module({
  providers: [CycleService],
  controllers: [CycleController]
})
export class CycleModule {}
