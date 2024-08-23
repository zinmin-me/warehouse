import { Module } from '@nestjs/common';
import { ProductionManagementService } from './production_management.service';
import { ProductionManagementController } from './production_management.controller';

@Module({
  controllers: [ProductionManagementController],
  providers: [ProductionManagementService],
})
export class ProductionManagementModule {}
