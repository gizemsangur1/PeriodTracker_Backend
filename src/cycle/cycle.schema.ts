import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';
import { User } from '../user/user.schema';

export type CycleDocument = Cycle & Document;

@Schema()
export class Cycle {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop()
  mood?: string;

  @Prop()
  painLevel?: number;
}

export const CycleSchema = SchemaFactory.createForClass(Cycle);
