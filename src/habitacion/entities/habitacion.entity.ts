import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}