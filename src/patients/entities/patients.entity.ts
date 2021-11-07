import { MedicalPersonnel } from 'src/medical-personnel/entities/medical-personnel.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

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
