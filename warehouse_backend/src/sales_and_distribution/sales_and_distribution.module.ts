import { Module } from '@nestjs/common';
import { SalesAndDistributionService } from './sales_and_distribution.service';
import { SalesAndDistributionController } from './sales_and_distribution.controller';

@Module({
  controllers: [SalesAndDistributionController],
  providers: [SalesAndDistributionService],
})
export class SalesAndDistributionModule {}
