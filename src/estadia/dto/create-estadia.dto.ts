import { IsNumber, IsDateString } from 'class-validator';

export class CreateEstadiaDto {
  @IsNumber()
  huespedId: number;
  
  @IsNumber()
  habitacionId: number;

  @IsDateString()
  fechaEntrada: string;

  @IsDateString()
  fechaSalida: string;
}
