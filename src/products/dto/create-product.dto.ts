import { IsString, IsNumber } from 'class-validator';
export class CreateProductDto {
    @IsString()
    type: string;
    @IsNumber()
    space: number;
    @IsNumber()
    rate: number;
}
