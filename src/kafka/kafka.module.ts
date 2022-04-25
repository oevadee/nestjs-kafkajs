import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { PorducerService } from './producer.service';

@Module({
  providers: [PorducerService, ConsumerService],
  exports: [PorducerService, ConsumerService],
})
export class KafkaModule {}
