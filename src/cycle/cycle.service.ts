import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cycle, CycleDocument } from './cycle.schema';
import { Model } from 'mongoose';

@Injectable()
export class CycleService {
  constructor(
    @InjectModel('Cycle') private cycleModel: Model<CycleDocument>,
  ) {}

  async createCycle(userId: string, dto: { startDate: string; endDate: string; mood?: string; painLevel?: number }) {
    const newCycle = new this.cycleModel({ ...dto, user: userId });
    return await newCycle.save();
  }

  async getUserCycles(userId: string) {
    return await this.cycleModel.find({ user: userId }).sort({ startDate: -1 });
  }
}
