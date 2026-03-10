import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Estadia } from '../../estadia/entities/estadia.entity';

@Entity('habitaciones')
export class Habitacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  numero: string;

  @Column()
  piso: number;

  @Column({ default: true })
  disponible: boolean;

  @Column()
  capacidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioPorNoche: number;

  @Column({ nullable: true })
  descripcion: string;

  // Relación inversa: una habitación puede tener muchas estadías (historial)
  @OneToMany(() => Estadia, (estadia) => estadia.habitacion)
  estadias: Estadia[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
