import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { EstadiaService } from './estadia.service';
import { CreateEstadiaDto } from './dto/create-estadia.dto';

@Controller('estadias')
export class EstadiaController {
  constructor(private readonly estadiaService: EstadiaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateEstadiaDto) {
    return this.estadiaService.create(dto);
  }

  @Get()
  findAll() {
    return this.estadiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estadiaService.findOne(id);
  }

  @Get(':id/detalle')
  detalle(@Param('id', ParseIntPipe) id: number) {
    return this.estadiaService.detalleCuenta(id);
  }
}
