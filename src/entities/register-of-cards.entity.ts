import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Arrivals } from './arrivals.entity';

@Entity('registerOfCards')
export class RegisterOfCards {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    surname: string;

    @Column()
    lastName: string;

    @Column()
    registration: string;

    @OneToMany(() => Arrivals, arrivals => arrivals.regiserOfCards)
    arrivals: Arrivals[];
}