import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estadia } from './entities/estadia.entity';
import { CreateEstadiaDto } from './dto/create-estadia.dto';
import { Guest } from '../guest/entities/guest.entity';
import { Habitacion } from '../habitacion/entities/habitacion.entity';

@Injectable()
export class EstadiaService {
  constructor(
    @InjectRepository(Estadia)
    private estadiaRepo: Repository<Estadia>,
    @InjectRepository(Guest)
    private guestRepo: Repository<Guest>,
    @InjectRepository(Habitacion)
    private habitacionRepo: Repository<Habitacion>,
  ) {}

  private calcularSubtotal(
    fechaIngreso: string,
    fechaSalida: string,
    precioPorNoche: number,
  ): number {
    const ingreso = new Date(fechaIngreso);
    const salida = new Date(fechaSalida);
    const noches = Math.ceil(
      (salida.getTime() - ingreso.getTime()) / (1000 * 60 * 60 * 24),
    );
    if (noches <= 0) {
      throw new BadRequestException(
        'La fecha de salida debe ser posterior a la de ingreso.',
      );
    }
    return noches * precioPorNoche;
  }

  async create(dto: CreateEstadiaDto): Promise<Estadia> {
    const huesped = await this.guestRepo.findOne({
      where: { id: dto.huespedId },
    });
    if (!huesped) {
      throw new NotFoundException(
        `Huésped con ID ${dto.huespedId} no encontrado`,
      );
    }

    const habitacion = await this.habitacionRepo.findOne({
      where: { id: dto.habitacionId },
    });
    if (!habitacion) {
      throw new NotFoundException(
        `Habitación con ID ${dto.habitacionId} no encontrada`,
      );
    }
    if (!habitacion.disponible) {
      throw new BadRequestException(
        `La habitación ${habitacion.numero} no está disponible`,
      );
    }

    const subtotal = this.calcularSubtotal(
      dto.fechaIngreso,
      dto.fechaSalida,
      dto.precioPorNoche,
    );
    const estadia = this.estadiaRepo.create({ ...dto, subtotal });
    const saved = await this.estadiaRepo.save(estadia);

    // Marcar habitación como ocupada
    habitacion.disponible = false;
    await this.habitacionRepo.save(habitacion);

    return saved;
  }

  findAll(): Promise<Estadia[]> {
    return this.estadiaRepo.find({ relations: ['consumos', 'guest', 'habitacion'] });
  }

  async findOne(id: number): Promise<Estadia> {
    const estadia = await this.estadiaRepo.findOne({
      where: { id },
      relations: ['consumos', 'guest', 'habitacion'],
    });
    if (!estadia) {
      throw new NotFoundException(`Estadía con ID ${id} no encontrada`);
    }
    return estadia;
  }

  async detalleCuenta(id: number) {
    const estadia = await this.findOne(id);
    const totalConsumos = estadia.consumos.reduce(
      (sum, c) => sum + Number(c.total),
      0,
    );
    const totalFinal = Number(estadia.subtotal) + totalConsumos;
    return {
      estadia: {
        id: estadia.id,
        huesped: estadia.guest
          ? { id: estadia.guest.id, name: estadia.guest.name }
          : { id: estadia.huespedId },
        habitacion: estadia.habitacion
          ? { id: estadia.habitacion.id, numero: estadia.habitacion.numero }
          : { id: estadia.habitacionId },
        fechaIngreso: estadia.fechaIngreso,
        fechaSalida: estadia.fechaSalida,
        precioPorNoche: Number(estadia.precioPorNoche),
        subtotalAlojamiento: Number(estadia.subtotal),
      },
      consumos: estadia.consumos,
      resumen: {
        subtotalAlojamiento: Number(estadia.subtotal),
        totalConsumos,
        totalFinal,
      },
    };
  }
}
