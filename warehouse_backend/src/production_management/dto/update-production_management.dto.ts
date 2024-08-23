import { PartialType } from '@nestjs/mapped-types';
import { CreateProductionManagementDto } from './create-production_management.dto';

export class UpdateProductionManagementDto extends PartialType(CreateProductionManagementDto) {}
