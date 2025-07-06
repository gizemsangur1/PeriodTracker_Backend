import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {}

async register(dto: { email: string; password: string; name?: string; age?: number }) {
  const { email, password, name, age } = dto;
  const hashed = await bcrypt.hash(password, 10);

  const user = new this.userModel({
    email,
    password: hashed,
    name,
    age,
  });

  const savedUser = await user.save();

  const payload = { sub: savedUser._id, email: savedUser.email };
  const token = this.jwtService.sign(payload);

  return {
    access_token: token,
  };
}


  async login(dto: { email: string; password: string }) {
    const user = await this.userModel.findOne({ email :dto.email });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const payload = { sub: user._id, email: user.email };
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
    };
  }
}
