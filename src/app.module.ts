import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestModule } from './guest/guest.module';
import { EstadiaModule } from './estadia/estadia.module';
import { ConsumoModule } from './consumo/consumo.module';
import { HabitacionModule } from './habitacion/habitacion.module';
import { RoomTypeModule } from './room-type/room-type.module';
import { Guest } from './guest/entities/guest.entity';
import { Estadia } from './estadia/entities/estadia.entity';
import { Consumo } from './consumo/entities/consumo.entity';
import { Habitacion } from './habitacion/entities/habitacion.entity';
import { RoomType } from './room-type/entities/room-type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST ?? '127.0.0.1',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER ?? 'root',
      password: process.env.DB_PASS ?? '',
      database: process.env.DB_NAME ?? 'hotel',
      entities: [Guest, Estadia, Consumo, Habitacion, RoomType],
      autoLoadEntities: true,
      synchronize: true, 
    }),
    GuestModule,
    EstadiaModule,
    ConsumoModule,
    HabitacionModule,
    RoomTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
