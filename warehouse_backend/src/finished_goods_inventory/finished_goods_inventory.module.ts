import { Module } from '@nestjs/common';
import { FinishedGoodsInventoryService } from './finished_goods_inventory.service';
import { FinishedGoodsInventoryController } from './finished_goods_inventory.controller';

@Module({
  controllers: [FinishedGoodsInventoryController],
  providers: [FinishedGoodsInventoryService],
})
export class FinishedGoodsInventoryModule {}
