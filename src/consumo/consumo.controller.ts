import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConsumoService } from './consumo.service';
import { CreateConsumoDto } from './dto/create-consumo.dto';

@Controller('consumo')
export class ConsumoController {
  constructor(private readonly consumoService: ConsumoService) {}

  @Post()
  create(@Body() dto: CreateConsumoDto) {
    return this.consumoService.create(dto);
  }

  @Get()
  findAll() {
    return this.consumoService.findAll();
  }
}