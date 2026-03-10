import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Estadia } from '../../estadia/entities/estadia.entity';

@Entity('consumos')
export class Consumo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column()
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column()
  estadiaId: number;

  @ManyToOne(() => Estadia, (estadia) => estadia.consumos)
  @JoinColumn({ name: 'estadiaId' })
  estadia: Estadia;
}
