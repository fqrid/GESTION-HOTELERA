Set-Content src\estadia\estadia.module.ts @'
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadiaService } from './estadia.service';
import { EstadiaController } from './estadia.controller';
import { Estadia } from './entities/estadia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estadia])],
  controllers: [EstadiaController],
  providers: [EstadiaService],
  exports: [EstadiaService],
})
export class EstadiaModule {}
'@