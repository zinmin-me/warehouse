import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesAndDistributionDto } from './create-sales_and_distribution.dto';

export class UpdateSalesAndDistributionDto extends PartialType(CreateSalesAndDistributionDto) {}
