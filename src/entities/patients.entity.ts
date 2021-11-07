import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { MedicalPersonnel } from './medical-personnel.entity';

@Entity('patients')
export class Patients {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    surname: string;

    @Column()
    lastName: string;

    @Column()
    address: string;

    @Column()
    contacts: string;

    @ManyToMany(type => MedicalPersonnel, medicalPersonnel => medicalPersonnel.patients)
    @JoinTable()
    medicalPersonnel: MedicalPersonnel[];    
}
