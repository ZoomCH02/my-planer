import { IsBoolean, IsOptional, IsString, IsIn } from "class-validator";

export class TaskDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsBoolean()
    @IsOptional()
    isCompleted?: boolean;

    @IsString()
    @IsOptional()
    createdAt?: string;

    @IsString()
    @IsOptional()
    @IsIn(['low', 'medium', 'high'], { message: 'Priority must be low, medium, or high' })
    priority?: string;
}
