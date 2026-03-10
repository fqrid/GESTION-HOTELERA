import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumoService } from './consumo.service';
import { ConsumoController } from './consumo.controller';
import { Consumo } from './entities/consumo.entity';
import { Estadia } from '../estadia/entities/estadia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consumo, Estadia])],
  controllers: [ConsumoController],
  providers: [ConsumoService],
  exports: [ConsumoService],
})
export class ConsumoModule {}
