import { IsString, IsNumber, IsPositive, IsInt, IsNotEmpty } from 'class-validator';

export class CreateConsumoDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  @IsPositive()
  precio: number;

  @IsInt()
  @IsPositive()
  cantidad: number;

  @IsInt()
  @IsPositive()
  estadiaId: number;
}
