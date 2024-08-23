import { PartialType } from '@nestjs/mapped-types';
import { CreateProductionExecutionDto } from './create-production_execution.dto';

export class UpdateProductionExecutionDto extends PartialType(CreateProductionExecutionDto) {}
