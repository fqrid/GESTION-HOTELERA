import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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
  fechaIngreso: Date;

  @Column()
  fechaSalida: Date;

  @Column()
  subtotal: number;

  @OneToMany(() => Consumo, (consumo) => consumo.estadia)
  consumos: Consumo[];
}