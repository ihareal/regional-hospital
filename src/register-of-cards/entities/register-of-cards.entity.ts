import { Arrivals } from 'src/arrivals/entities/arrivals.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';

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