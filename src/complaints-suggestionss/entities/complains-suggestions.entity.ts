import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('complaints-suggestions')
export class ComplainsSuggestions{
    
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    review: string;
}