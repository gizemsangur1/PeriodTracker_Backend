import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cycle, CycleSchema } from './cycle.schema';
import { CycleService } from './cycle.service';
import { CycleController } from './cycle.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cycle', schema: CycleSchema }]),
  ],
  controllers: [CycleController],
  providers: [CycleService],
})
export class CycleModule {}
