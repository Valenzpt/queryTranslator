import { Injectable, Logger } from '@nestjs/common';
import { OpenaiService } from './openai/openai.service';

@Injectable()
export class AppService {
  constructor(private readonly openAiService: OpenaiService){

  }
  async translateFromGpt(prompt: string): Promise<string> {
    Logger.log('Translating')
    return await this.openAiService.chatGptRequest(prompt);
  }
}
