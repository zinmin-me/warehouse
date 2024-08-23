import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesAndDistributionService } from './sales_and_distribution.service';
import { CreateSalesAndDistributionDto } from './dto/create-sales_and_distribution.dto';
import { UpdateSalesAndDistributionDto } from './dto/update-sales_and_distribution.dto';

@Controller('sales-and-distribution')
export class SalesAndDistributionController {
  constructor(private readonly salesAndDistributionService: SalesAndDistributionService) {}

  @Post()
  create(@Body() createSalesAndDistributionDto: CreateSalesAndDistributionDto) {
    return this.salesAndDistributionService.create(createSalesAndDistributionDto);
  }

  @Get()
  findAll() {
    return this.salesAndDistributionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesAndDistributionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesAndDistributionDto: UpdateSalesAndDistributionDto) {
    return this.salesAndDistributionService.update(+id, updateSalesAndDistributionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesAndDistributionService.remove(+id);
  }
}
