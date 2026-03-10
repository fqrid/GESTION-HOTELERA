import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ConsumoService } from './consumo.service';
import { CreateConsumoDto } from './dto/create-consumo.dto';

@Controller('consumos')
export class ConsumoController {
  constructor(private readonly consumoService: ConsumoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateConsumoDto) {
    return this.consumoService.create(dto);
  }

  @Get()
  findAll() {
    return this.consumoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.consumoService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.consumoService.remove(id);
  }
}
