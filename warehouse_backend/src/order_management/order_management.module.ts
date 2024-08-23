import { Module } from '@nestjs/common';
import { OrderManagementService } from './order_management.service';
import { OrderManagementController } from './order_management.controller';

@Module({
  controllers: [OrderManagementController],
  providers: [OrderManagementService],
})
export class OrderManagementModule {}
