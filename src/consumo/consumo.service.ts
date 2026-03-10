import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consumo } from './entities/consumo.entity';
import { CreateConsumoDto } from './dto/create-consumo.dto';
import { Estadia } from '../estadia/entities/estadia.entity';

@Injectable()
export class ConsumoService {
  constructor(
    @InjectRepository(Consumo)
    private consumoRepo: Repository<Consumo>,
    @InjectRepository(Estadia)
    private estadiaRepo: Repository<Estadia>,
  ) {}

  async create(dto: CreateConsumoDto): Promise<Consumo> {
    const estadia = await this.estadiaRepo.findOne({
      where: { id: dto.estadiaId },
    });
    if (!estadia) {
      throw new NotFoundException(
        `Estadía con ID ${dto.estadiaId} no encontrada`,
      );
    }

    // El total se calcula en el servidor, nunca se acepta del cliente
    const total = Number(dto.precio) * dto.cantidad;
    const consumo = this.consumoRepo.create({ ...dto, total });
    return this.consumoRepo.save(consumo);
  }

  findAll(): Promise<Consumo[]> {
    return this.consumoRepo.find({ relations: ['estadia'] });
  }

  async findOne(id: number): Promise<Consumo> {
    const consumo = await this.consumoRepo.findOne({
      where: { id },
      relations: ['estadia'],
    });
    if (!consumo) {
      throw new NotFoundException(`Consumo con ID ${id} no encontrado`);
    }
    return consumo;
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.consumoRepo.delete(id);
  }
}
