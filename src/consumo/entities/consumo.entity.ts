import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Estadia } from '../../estadia/entities/estadia.entity';

@Entity('consumos')
export class Consumo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'estadia_id' })
  estadiaId: number;

  @ManyToOne(() => Estadia, (estadia) => estadia.consumos)
  @JoinColumn({ name: 'estadia_id' })
  estadia: Estadia;

  @Column()
  descripcion: string;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precioUnitario: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  total: number;
}