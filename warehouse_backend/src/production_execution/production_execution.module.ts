import { Module } from '@nestjs/common';
import { ProductionExecutionService } from './production_execution.service';
import { ProductionExecutionController } from './production_execution.controller';

@Module({
  controllers: [ProductionExecutionController],
  providers: [ProductionExecutionService],
})
export class ProductionExecutionModule {}
