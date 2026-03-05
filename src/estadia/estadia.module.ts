import { Module } from '@nestjs/common';
import { EstadiaController } from './estadia.controller';
import { EstadiaService } from './estadia.service';

@Module({
  controllers: [EstadiaController],
  providers: [EstadiaService],
})
export class EstadiaModule {}