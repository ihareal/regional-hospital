import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { MedicalPersonnel } from 'src/medical-personnel/entities/medical-personnel.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne } from 'typeorm';

@Entity('patients')
export class Patients {
    @PrimaryGeneratedColumn()    
    id: number;

    @ApiProperty()
    @Column()
    firstName: string;

    @ApiProperty()
    @Column()
    surname: string;

    @ApiProperty()
    @Column()
    lastName: string;

    @ApiProperty()
    @Column()
    address: string;

    @ApiProperty()
    @Column()
    phoneNumber: string;

    @ManyToMany(type => MedicalPersonnel, medicalPersonnel => medicalPersonnel.patients)
    @JoinTable()
    medicalPersonnel: MedicalPersonnel[];    
}
