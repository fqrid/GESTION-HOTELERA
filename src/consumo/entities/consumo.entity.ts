Set-Content src\estadia\entities\estadia.entity.ts @'
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Consumo } from '../../consumo/entities/consumo.entity';

@Entity('estadias')
export class Estadia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'huesped_id' })
  huespedId: number;

  @Column({ name: 'habitacion_id' })
  habitacionId: number;

  @Column({ type: 'date' })
  fechaIngreso: string;

  @Column({ type: 'date' })
  fechaSalida: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precioPorNoche: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  subtotal: number;

  @OneToMany(() => Consumo, (consumo) => consumo.estadia, { cascade: true })
  consumos: Consumo[];
}
'@