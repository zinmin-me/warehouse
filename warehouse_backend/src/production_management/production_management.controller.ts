import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductionManagementService } from './production_management.service';
import { CreateProductionManagementDto } from './dto/create-production_management.dto';
import { UpdateProductionManagementDto } from './dto/update-production_management.dto';

@Controller('production-management')
export class ProductionManagementController {
  constructor(private readonly productionManagementService: ProductionManagementService) {}

  @Post()
  create(@Body() createProductionManagementDto: CreateProductionManagementDto) {
    return this.productionManagementService.create(createProductionManagementDto);
  }

  @Get()
  findAll() {
    return this.productionManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productionManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductionManagementDto: UpdateProductionManagementDto) {
    return this.productionManagementService.update(+id, updateProductionManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionManagementService.remove(+id);
  }
}
