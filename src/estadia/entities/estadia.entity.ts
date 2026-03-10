import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Guest } from '../../guest/entities/guest.entity';
import { Consumo } from '../../consumo/entities/consumo.entity';

@Entity()
export class Estadia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  huespedId: number;

  @Column()
  habitacionId: number;

  @Column()
  fechaIngreso: string;

  @Column()
  fechaSalida: string;

  @Column('decimal')
  precioPorNoche: number;

  @Column('decimal')
  subtotal: number;

  @ManyToOne(() => Guest, (guest) => guest.stays)
  guest: Guest;

  @OneToMany(() => Consumo, (consumo) => consumo.estadia)
  consumos: Consumo[];
}