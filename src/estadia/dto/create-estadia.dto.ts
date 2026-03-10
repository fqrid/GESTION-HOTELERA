import {
  IsInt,
  IsPositive,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateEstadiaDto {
  @IsInt()
  @IsPositive()
  huespedId: number;

  @IsInt()
  @IsPositive()
  habitacionId: number;

  @IsDateString()
  fechaIngreso: string;

  @IsDateString()
  fechaSalida: string;

  @IsNumber()
  @IsPositive()
  precioPorNoche: number;
}
