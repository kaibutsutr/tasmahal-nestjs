import { Column } from 'typeorm';
import { IsString } from 'class-validator';
export class GetTeacherDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  phone: string;

  @IsString()
  lectures: string;

  @IsString()
  title: string;

  @IsString()
  level: string;
}
