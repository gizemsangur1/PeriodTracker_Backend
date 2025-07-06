import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CycleService } from './cycle.service';

@UseGuards(AuthGuard('jwt'))
@Controller('cycle')
export class CycleController {
  constructor(private readonly cycleService: CycleService) {}

  @Post()
  async create(@Body() body, @Req() req) {
    const userId = req.user.userId;
    return await this.cycleService.createCycle(userId, body);
  }

  @Get()
  async getCycles(@Req() req) {
    const userId = req.user.userId;
    return await this.cycleService.getUserCycles(userId);
  }
}
