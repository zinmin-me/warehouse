import { PartialType } from '@nestjs/mapped-types';
import { CreateQualityAssuranceDto } from './create-quality_assurance.dto';

export class UpdateQualityAssuranceDto extends PartialType(CreateQualityAssuranceDto) {}
