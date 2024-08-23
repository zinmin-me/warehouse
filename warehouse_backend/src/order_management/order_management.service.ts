import { Injectable } from '@nestjs/common';
import { CreateOrderManagementDto } from './dto/create-order_management.dto';
import { UpdateOrderManagementDto } from './dto/update-order_management.dto';

@Injectable()
export class OrderManagementService {
  create(createOrderManagementDto: CreateOrderManagementDto) {
    return 'This action adds a new orderManagement';
  }

  findAll() {
    return `This action returns all orderManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderManagement`;
  }

  update(id: number, updateOrderManagementDto: UpdateOrderManagementDto) {
    return `This action updates a #${id} orderManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderManagement`;
  }
}
