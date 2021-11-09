import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class News{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    content: string
}