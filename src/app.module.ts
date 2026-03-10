import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestModule } from './guest/guest.module';
import { EstadiaModule } from './estadia/estadia.module';
import { ConsumoModule } from './consumo/consumo.module';
import { Guest } from './guest/entities/guest.entity';
import { Estadia } from './estadia/entities/estadia.entity';
import { Consumo } from './consumo/entities/consumo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1', 
      port: 3306,
      username: 'root',
      password: '',
      database: 'hotel',
      // Agregamos el arreglo de entidades explícitamente
      entities: [Guest, Estadia, Consumo], 
      autoLoadEntities: true,
      synchronize: true,
    }),
    GuestModule,
    EstadiaModule,
    ConsumoModule,
  ],
})
export class AppModule {}