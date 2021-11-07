import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Brigade } from './brigade.entity';
import { RegisterOfCards } from './register-of-cards.entity';

@Entity('arrivals')
export class Arrivals {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reason: string;    

    @ManyToOne(() => Brigade, brigade => brigade.arrivals)
    brigades: Brigade;

    @ManyToOne(() => RegisterOfCards, registerOfCards => registerOfCards.arrivals)
    regiserOfCards: RegisterOfCards;
}