import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletion } from 'openai/resources';
import { systemPrompt } from 'src/common/utils';

@Injectable()
export class OpenaiService {
    readonly openai: OpenAI
    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        })
    }

    async chatGptRequest(prompt: string) {
        try {
            const completions: ChatCompletion = await this.openai.chat.completions.create({
                model: 'chatgpt-4o-latest',
                messages: [
                    {
                        role: "system",
                        content: `${systemPrompt} ${prompt}`
                    }
                ],
                temperature: 0,
                max_tokens: 500
            });

            const [content] = completions.choices.map((choice) => choice.message.content);

            return content;
        } catch (error) {
            //log and propagate
            console.log(error);
            throw new ServiceUnavailableException("Failed request to OpenAI");
        }
    }
}
