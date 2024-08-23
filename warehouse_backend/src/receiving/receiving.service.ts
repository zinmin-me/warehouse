import { Injectable } from '@nestjs/common';
import { CreateReceivingDto } from './dto/create-receiving.dto';
import { UpdateReceivingDto } from './dto/update-receiving.dto';

@Injectable()
export class ReceivingService {
  create(createReceivingDto: CreateReceivingDto) {
    return 'This action adds a new receiving';
  }

  findAll() {
    return `This action returns all receiving`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receiving`;
  }

  update(id: number, updateReceivingDto: UpdateReceivingDto) {
    return `This action updates a #${id} receiving`;
  }

  remove(id: number) {
    return `This action removes a #${id} receiving`;
  }
}
