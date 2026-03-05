import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestModule } from './guest/guest.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1', 
      port: 3306,
      username: 'root',
      password: '',
      database: 'hotel',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GuestModule,
  ],
})
export class AppModule {}