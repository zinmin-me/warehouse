import { Module } from '@nestjs/common';
import { ReceivingService } from './receiving.service';
import { ReceivingController } from './receiving.controller';

@Module({
  controllers: [ReceivingController],
  providers: [ReceivingService],
})
export class ReceivingModule {}
