import { Injectable } from '@nestjs/common';
import { CreateSalesAndDistributionDto } from './dto/create-sales_and_distribution.dto';
import { UpdateSalesAndDistributionDto } from './dto/update-sales_and_distribution.dto';

@Injectable()
export class SalesAndDistributionService {
  create(createSalesAndDistributionDto: CreateSalesAndDistributionDto) {
    return 'This action adds a new salesAndDistribution';
  }

  findAll() {
    return `This action returns all salesAndDistribution`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesAndDistribution`;
  }

  update(id: number, updateSalesAndDistributionDto: UpdateSalesAndDistributionDto) {
    return `This action updates a #${id} salesAndDistribution`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesAndDistribution`;
  }
}
