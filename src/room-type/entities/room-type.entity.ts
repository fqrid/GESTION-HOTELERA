import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('room_types')
export class RoomType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  precioBase: number;
}
