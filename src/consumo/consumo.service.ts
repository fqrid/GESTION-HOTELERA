import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consumo } from './entities/consumo.entity';
import { CreateConsumoDto } from './dto/create-consumo.dto';

@Injectable()
export class ConsumoService {
  constructor(
    @InjectRepository(Consumo)
    private consumoRepo: Repository<Consumo>,
  ) {}

  async create(dto: CreateConsumoDto): Promise<Consumo> {
    const estadia = await this.consumoRepo.manager.findOne('Estadia', { where: { id: dto.estadiaId } });
    if (!estadia) throw new NotFoundException('Estadia no encontrada');
    const total = dto.cantidad * dto.precio;
    const consumo = this.consumoRepo.create({ ...dto, total });
    return this.consumoRepo.save(consumo);
  }

  findAll(): Promise<Consumo[]> {
    return this.consumoRepo.find({ relations: ['estadia'] });
  }
}