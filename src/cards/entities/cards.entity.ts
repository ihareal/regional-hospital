import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { RegisterOfCards } from 'src/register-of-cards/entities/register-of-cards.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('cards')
export class Cards {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    cardContent: string;

    @OneToOne(() => RegisterOfCards)
    @JoinColumn()
    registerOfCard: RegisterOfCards;

    @ApiProperty()
    @Column()
    registerOfCardId: number;
}