import { Module } from '@nestjs/common';
import { QualityAssuranceService } from './quality_assurance.service';
import { QualityAssuranceController } from './quality_assurance.controller';

@Module({
  controllers: [QualityAssuranceController],
  providers: [QualityAssuranceService],
})
export class QualityAssuranceModule {}
