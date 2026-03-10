import {
  IsString,
  IsInt,
  IsBoolean,
  IsPositive,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  Min,
} from 'class-validator';

export class CreateHabitacionDto {
  @IsString()
  @IsNotEmpty()
  numero: string;

  @IsInt()
  @Min(1)
  piso: number;

  @IsBoolean()
  @IsOptional()
  disponible?: boolean;

  @IsInt()
  @IsPositive()
  capacidad: number;

  @IsNumber()
  @IsPositive()
  precioPorNoche: number;

  @IsString()
  @IsOptional()
  descripcion?: string;
}
