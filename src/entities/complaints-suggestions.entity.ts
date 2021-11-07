import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('complaints-suggestions')
export class ComplaintsSuggestionss{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    review: string;
}