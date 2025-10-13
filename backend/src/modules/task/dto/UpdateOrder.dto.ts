import { IsArray } from 'class-validator';

export class UpdateOrderDto {
    @IsArray()
    orderItems: {
        id: number,
        order: number
    }[]
}
