Set-Content src\consumo\dto\create-consumo.dto.ts @'
export class CreateConsumoDto {
  estadiaId: number;
  descripcion: string;
  cantidad: number;
  precioUnitario: number;
}
'@