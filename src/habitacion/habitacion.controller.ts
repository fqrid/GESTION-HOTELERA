import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { HabitacionService } from './habitacion.service';
import { CreateHabitacionDto } from './dto/create-habitacion.dto';
import { UpdateHabitacionDto } from './dto/update-habitacion.dto';

@Controller('habitaciones')
export class HabitacionController {
  constructor(private readonly habitacionService: HabitacionService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createHabitacionDto: CreateHabitacionDto) {
    return this.habitacionService.create(createHabitacionDto);
  }

  @Get()
  findAll() {
    return this.habitacionService.findAll();
  }

  // ⚠️ Las rutas estáticas SIEMPRE deben ir antes que las dinámicas (:id)
  @Get('disponibles')
  findDisponibles() {
    return this.habitacionService.findDisponibles();
  }

  @Get('numero/:numero')
  findByNumero(@Param('numero') numero: string) {
    return this.habitacionService.findByNumero(numero);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.habitacionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHabitacionDto: UpdateHabitacionDto,
  ) {
    return this.habitacionService.update(id, updateHabitacionDto);
  }

  @Patch(':id/disponibilidad')
  updateDisponibilidad(
    @Param('id', ParseIntPipe) id: number,
    @Body('disponible') disponible: boolean,
  ) {
    return this.habitacionService.updateDisponibilidad(id, disponible);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.habitacionService.remove(id);
  }
}
