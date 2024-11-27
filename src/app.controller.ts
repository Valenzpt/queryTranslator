import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PayloadDto } from './dto/payload.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async translate(@Body() payload: PayloadDto): Promise<string> {
    return await this.appService.translateFromGpt(payload.prompt);
  }
}
