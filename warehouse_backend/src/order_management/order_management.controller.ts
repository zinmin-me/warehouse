import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderManagementService } from './order_management.service';
import { CreateOrderManagementDto } from './dto/create-order_management.dto';
import { UpdateOrderManagementDto } from './dto/update-order_management.dto';

@Controller('order-management')
export class OrderManagementController {
  constructor(private readonly orderManagementService: OrderManagementService) {}

  @Post()
  create(@Body() createOrderManagementDto: CreateOrderManagementDto) {
    return this.orderManagementService.create(createOrderManagementDto);
  }

  @Get()
  findAll() {
    return this.orderManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderManagementDto: UpdateOrderManagementDto) {
    return this.orderManagementService.update(+id, updateOrderManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderManagementService.remove(+id);
  }
}
