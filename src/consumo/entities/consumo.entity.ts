import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Estadia } from '../../estadia/entities/estadia.entity';

@Entity()
export class Consumo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  cantidad: number;

  @Column()
  precioUnitario: number;

  @Column()
  total: number;

  @ManyToOne(() => Estadia, (estadia) => estadia.consumos)
  estadia: Estadia;
}