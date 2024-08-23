import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderManagementDto } from './create-order_management.dto';

export class UpdateOrderManagementDto extends PartialType(CreateOrderManagementDto) {}
