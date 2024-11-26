import { IsNotEmpty, IsString, Length, MaxLength } from "class-validator";

export class PayloadDto {
    @IsString()
    @MaxLength(255, {
        message: "This property must have maximun 255 characters"
    })
    @IsNotEmpty()
    readonly prompt: string
}