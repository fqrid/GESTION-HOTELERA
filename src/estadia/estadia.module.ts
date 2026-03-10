import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadiaService } from './estadia.service';
import { EstadiaController } from './estadia.controller';
import { Estadia } from './entities/estadia.entity';
import { Guest } from '../guest/entities/guest.entity';
import { Habitacion } from '../habitacion/entities/habitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estadia, Guest, Habitacion])],
  controllers: [EstadiaController],
  providers: [EstadiaService],
  exports: [EstadiaService],
})
export class EstadiaModule {}
