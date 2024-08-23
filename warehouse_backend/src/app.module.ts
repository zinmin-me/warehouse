import { Module } from '@nestjs/common';
import { OrderManagementModule } from './order_management/order_management.module';
import { ProductionManagementModule } from './production_management/production_management.module';
import { InventoryManagementModule } from './inventory_management/inventory_management.module';
import { ProcurementModule } from './procurement/procurement.module';
import { ReceivingModule } from './receiving/receiving.module';
import { ProductionExecutionModule } from './production_execution/production_execution.module';
import { QualityAssuranceModule } from './quality_assurance/quality_assurance.module';
import { FinishedGoodsInventoryModule } from './finished_goods_inventory/finished_goods_inventory.module';
import { SalesAndDistributionModule } from './sales_and_distribution/sales_and_distribution.module';


@Module({
  imports: [OrderManagementModule, ProductionManagementModule, InventoryManagementModule, ProcurementModule, ReceivingModule, ProductionExecutionModule, QualityAssuranceModule, FinishedGoodsInventoryModule, SalesAndDistributionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
