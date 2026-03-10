import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitacionService } from './habitacion.service';
import { HabitacionController } from './habitacion.controller';
import { Habitacion } from './entities/habitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Habitacion])],
  controllers: [HabitacionController],
  providers: [HabitacionService],
  exports: [HabitacionService],
})
export class HabitacionModule {}
