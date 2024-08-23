import { Module } from '@nestjs/common';
import { InventoryManagementService } from './inventory_management.service';
import { InventoryManagementController } from './inventory_management.controller';

@Module({
  controllers: [InventoryManagementController],
  providers: [InventoryManagementService],
})
export class InventoryManagementModule {}
