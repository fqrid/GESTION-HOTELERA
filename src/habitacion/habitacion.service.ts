import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habitacion } from './entities/habitacion.entity';
import { CreateHabitacionDto } from './dto/create-habitacion.dto';
import { UpdateHabitacionDto } from './dto/update-habitacion.dto';

@Injectable()
export class HabitacionService {
  constructor(
    @InjectRepository(Habitacion)
    private habitacionRepository: Repository<Habitacion>,
  ) {}

  async create(createHabitacionDto: CreateHabitacionDto): Promise<Habitacion> {
    const habitacion = this.habitacionRepository.create(createHabitacionDto);
    return await this.habitacionRepository.save(habitacion);
  }

  async findAll(): Promise<Habitacion[]> {
    return await this.habitacionRepository.find();
  }

  async findDisponibles(): Promise<Habitacion[]> {
    return await this.habitacionRepository.find({
      where: { disponible: true },
    });
  }

  async findOne(id: number): Promise<Habitacion> {
    const habitacion = await this.habitacionRepository.findOne({
      where: { id },
    });
    if (!habitacion) {
      throw new NotFoundException(`Habitación con ID ${id} no encontrada`);
    }
    return habitacion;
  }

  async findByNumero(numero: string): Promise<Habitacion> {
    const habitacion = await this.habitacionRepository.findOne({
      where: { numero },
    });
    if (!habitacion) {
      throw new NotFoundException(
        `Habitación con número ${numero} no encontrada`,
      );
    }
    return habitacion;
  }

  async update(
    id: number,
    updateHabitacionDto: UpdateHabitacionDto,
  ): Promise<Habitacion> {
    const habitacion = await this.findOne(id);
    Object.assign(habitacion, updateHabitacionDto);
    return await this.habitacionRepository.save(habitacion);
  }

  async updateDisponibilidad(
    id: number,
    disponible: boolean,
  ): Promise<Habitacion> {
    const habitacion = await this.findOne(id);
    habitacion.disponible = disponible;
    return await this.habitacionRepository.save(habitacion);
  }

  async remove(id: number): Promise<void> {
    const habitacion = await this.findOne(id);
    await this.habitacionRepository.remove(habitacion);
  }
}
