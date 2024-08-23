import { Injectable } from '@nestjs/common';
import { CreateProductionExecutionDto } from './dto/create-production_execution.dto';
import { UpdateProductionExecutionDto } from './dto/update-production_execution.dto';

@Injectable()
export class ProductionExecutionService {
  create(createProductionExecutionDto: CreateProductionExecutionDto) {
    return 'This action adds a new productionExecution';
  }

  findAll() {
    return `This action returns all productionExecution`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productionExecution`;
  }

  update(id: number, updateProductionExecutionDto: UpdateProductionExecutionDto) {
    return `This action updates a #${id} productionExecution`;
  }

  remove(id: number) {
    return `This action removes a #${id} productionExecution`;
  }
}
