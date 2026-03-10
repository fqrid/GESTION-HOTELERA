import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Guest } from '../../guest/entities/guest.entity';
import { Habitacion } from '../../habitacion/entities/habitacion.entity';
import { Consumo } from '../../consumo/entities/consumo.entity';

@Entity('estadias')
export class Estadia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  huespedId: number;

  @Column()
  habitacionId: number;

  @Column({ type: 'date' })
  fechaIngreso: string;

  @Column({ type: 'date' })
  fechaSalida: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precioPorNoche: number;

  @Column('decimal', { precision: 10, scale: 2 })
  subtotal: number;

  @ManyToOne(() => Guest, (guest) => guest.stays)
  @JoinColumn({ name: 'huespedId' })
  guest: Guest;

  @ManyToOne(() => Habitacion, (habitacion) => habitacion.estadias)
  @JoinColumn({ name: 'habitacionId' })
  habitacion: Habitacion;

  @OneToMany(() => Consumo, (consumo) => consumo.estadia)
  consumos: Consumo[];
}
