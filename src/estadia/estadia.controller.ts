import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { EstadiaService } from './estadia.service';
import { CreateEstadiaDto } from './dto/create-estadia.dto';
import { Estadia } from './entities/estadia.entity';

@Controller('estadia')
export class EstadiaController {
  constructor(private readonly estadiaService: EstadiaService) {}

  @Post()
  create(@Body() dto: CreateEstadiaDto): Promise<Estadia> {
    return this.estadiaService.create(dto);
  }

  @Get()
  findAll(): Promise<Estadia[]> {
    return this.estadiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Estadia> {
    return this.estadiaService.findOne(+id);
  }

  @Get(':id/detalle')
  detalle(@Param('id', ParseIntPipe) id: number): Promise<object> {
    return this.estadiaService.detalleCuenta(+id);
  }
}
