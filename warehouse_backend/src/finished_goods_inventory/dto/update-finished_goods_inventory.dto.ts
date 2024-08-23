import { PartialType } from '@nestjs/mapped-types';
import { CreateFinishedGoodsInventoryDto } from './create-finished_goods_inventory.dto';

export class UpdateFinishedGoodsInventoryDto extends PartialType(CreateFinishedGoodsInventoryDto) {}
