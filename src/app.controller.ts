import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PayloadDto } from './dto/payload.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() payload: PayloadDto): string {
    return payload.prompt;
  }
}
