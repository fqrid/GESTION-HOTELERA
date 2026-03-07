export class CreateHabitacionDto {
    numero: string;
    piso: number;
    disponible: boolean;
    capacidad: number;
    precioPorNoche: number;
    descripcion?: string;
}