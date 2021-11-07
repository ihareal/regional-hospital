import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { MedicalPersonnel } from './medical-personnel.entity';

@Entity('departments')
export class Departments {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    contacts: string;

    @Column()
    description: string;
    
    @OneToOne(() => MedicalPersonnel)
    @JoinColumn()
    medicalPersonnel: MedicalPersonnel;
}