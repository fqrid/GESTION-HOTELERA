import { IsString, IsNumber, IsPositive, IsInt } from 'class-validator';

export class CreateConsumoDto {
  @IsString()
  descripcion: string;

  @IsNumber()
  @IsPositive()
  precio: number;

  @IsInt()
  @IsPositive()
  cantidad: number;

  @IsNumber()
  @IsPositive()
  total: number;

  @IsInt()
  estadiaId: number;
}