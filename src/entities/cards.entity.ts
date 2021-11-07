import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { RegisterOfCards } from './register-of-cards.entity';

@Entity('cards')
export class Cards {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cardContent: string;

    @OneToOne(() => RegisterOfCards)
    @JoinColumn()
    registerOfCard: RegisterOfCards;
}