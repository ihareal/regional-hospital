import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { Arrivals } from './arrivals.entity';
import { BrigadeMedicalPersonnel } from './brigade-medical-personnel.entity';

@Entity('brigade')
export class Brigade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickName: string;    

    @OneToMany(() => Arrivals, arrival => arrival.brigades)
    arrivals: Arrivals[];

    @OneToMany(() => BrigadeMedicalPersonnel, brigadeMedicalPersonnel => brigadeMedicalPersonnel.brigade)
    brigadeMedicalPersonnels: BrigadeMedicalPersonnel[];    
}