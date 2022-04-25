import { Injectable } from '@nestjs/common';
import { PorducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: PorducerService) {}

  async getHello() {
    await this.producerService.produce({
      topic: 'test',
      messages: [
        {
          value: 'Hello World',
        },
      ],
    });
    return 'Hello World!';
  }
}
