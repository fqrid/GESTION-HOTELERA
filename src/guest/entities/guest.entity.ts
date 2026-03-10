import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Estadia } from '../../estadia/entities/estadia.entity';

@Entity('guests')
export class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  document: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Estadia, (estadia) => estadia.guest)
  stays: Estadia[];
}
