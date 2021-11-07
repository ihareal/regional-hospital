import { MedicalPersonnel } from 'src/medical-personnel/entities/medical-personnel.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

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