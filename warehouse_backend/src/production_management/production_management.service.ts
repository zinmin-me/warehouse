import { Injectable } from '@nestjs/common';
import { CreateProductionManagementDto } from './dto/create-production_management.dto';
import { UpdateProductionManagementDto } from './dto/update-production_management.dto';

@Injectable()
export class ProductionManagementService {
  create(createProductionManagementDto: CreateProductionManagementDto) {
    return 'This action adds a new productionManagement';
  }

  findAll() {
    return `This action returns all productionManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productionManagement`;
  }

  update(id: number, updateProductionManagementDto: UpdateProductionManagementDto) {
    return `This action updates a #${id} productionManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} productionManagement`;
  }
}
