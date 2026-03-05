import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Guest {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  document: string;

  @Column()
  phone: string;

  @Column()
  email: string;
}