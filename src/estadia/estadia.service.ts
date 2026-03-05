import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estadia } from './entities/estadia.entity';
import { CreateEstadiaDto } from './dto/create-estadia.dto';

@Injectable()
export class EstadiaService {
  constructor(
    @InjectRepository(Estadia)
    private estadiaRepo: Repository<Estadia>,
  ) {}

  private calcularSubtotal(fechaIngreso: string, fechaSalida: string, precioPorNoche: number): number {
    const ingreso = new Date(fechaIngreso);
    const salida = new Date(fechaSalida);
    const noches = Math.ceil((salida.getTime() - ingreso.getTime()) / (1000 * 60 * 60 * 24));
    if (noches <= 0) throw new BadRequestException('La fecha de salida debe ser posterior a la de ingreso.');
    return noches * precioPorNoche;
  }

  async create(dto: CreateEstadiaDto): Promise<Estadia> {
    const huespedExiste = await this.estadiaRepo.manager.findOne('Huesped', { where: { id: dto.huespedId } });
    if (!huespedExiste) throw new NotFoundException('Huesped no encontrado');
    const habitacionExiste = await this.estadiaRepo.manager.findOne('Habitacion', { where: { id: dto.habitacionId } });
    if (!habitacionExiste) throw new NotFoundException('Habitacion no encontrada');
    const subtotal = this.calcularSubtotal(dto.fechaIngreso, dto.fechaSalida, dto.precioPorNoche);
    const estadia = this.estadiaRepo.create({ ...dto, subtotal });
    return this.estadiaRepo.save(estadia);
  }

  findAll(): Promise<Estadia[]> {
    return this.estadiaRepo.find({ relations: ['consumos'] });
  }

  async findOne(id: number): Promise<Estadia> {
    const estadia = await this.estadiaRepo.findOne({ where: { id }, relations: ['consumos'] });
    if (!estadia) throw new NotFoundException('Estadia no encontrada');
    return estadia;
  }

  async detalleCuenta(id: number) {
    const estadia = await this.findOne(id);
    const totalConsumos = estadia.consumos.reduce((sum, c) => sum + Number(c.total), 0);
    const totalFinal = Number(estadia.subtotal) + totalConsumos;
    return {
      estadia: { id: estadia.id, huespedId: estadia.huespedId, habitacionId: estadia.habitacionId, fechaIngreso: estadia.fechaIngreso, fechaSalida: estadia.fechaSalida, precioPorNoche: estadia.precioPorNoche, subtotalAlojamiento: Number(estadia.subtotal) },
      consumos: estadia.consumos,
      resumen: { subtotalAlojamiento: Number(estadia.subtotal), totalConsumos, totalFinal },
    };
  }
}
