import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductionExecutionService } from './production_execution.service';
import { CreateProductionExecutionDto } from './dto/create-production_execution.dto';
import { UpdateProductionExecutionDto } from './dto/update-production_execution.dto';

@Controller('production-execution')
export class ProductionExecutionController {
  constructor(private readonly productionExecutionService: ProductionExecutionService) {}

  @Post()
  create(@Body() createProductionExecutionDto: CreateProductionExecutionDto) {
    return this.productionExecutionService.create(createProductionExecutionDto);
  }

  @Get()
  findAll() {
    return this.productionExecutionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productionExecutionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductionExecutionDto: UpdateProductionExecutionDto) {
    return this.productionExecutionService.update(+id, updateProductionExecutionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionExecutionService.remove(+id);
  }
}
