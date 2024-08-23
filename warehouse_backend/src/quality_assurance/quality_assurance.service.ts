import { Injectable } from '@nestjs/common';
import { CreateQualityAssuranceDto } from './dto/create-quality_assurance.dto';
import { UpdateQualityAssuranceDto } from './dto/update-quality_assurance.dto';

@Injectable()
export class QualityAssuranceService {
  create(createQualityAssuranceDto: CreateQualityAssuranceDto) {
    return 'This action adds a new qualityAssurance';
  }

  findAll() {
    return `This action returns all qualityAssurance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qualityAssurance`;
  }

  update(id: number, updateQualityAssuranceDto: UpdateQualityAssuranceDto) {
    return `This action updates a #${id} qualityAssurance`;
  }

  remove(id: number) {
    return `This action removes a #${id} qualityAssurance`;
  }
}
