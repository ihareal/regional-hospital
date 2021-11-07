import { Brigade } from 'src/brigade/entities/brigade.entity';
import { RegisterOfCards } from 'src/register-of-cards/entities/register-of-cards.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


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