import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Brigade } from '../../brigade/entities/brigade.entity'

@Entity('brigadeMedicalPersonnel')
export class BrigadeMedicalPersonnel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    surname: string;

    @Column()
    lastName: string;

    @Column()
    position: string;

    @ManyToOne(() => Brigade, brigade => brigade.brigadeMedicalPersonnels)
    brigade: Brigade;
}