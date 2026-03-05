import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumoService } from './consumo.service';
import { ConsumoController } from './consumo.controller';
import { Consumo } from './entities/consumo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consumo])],
  controllers: [ConsumoController],
  providers: [ConsumoService],
  exports: [ConsumoService],
})
export class ConsumoModule {}