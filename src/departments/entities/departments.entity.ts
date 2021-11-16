import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { MedicalPersonnel } from 'src/medical-personnel/entities/medical-personnel.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('departments')
export class Departments {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column()
    contacts: string;

    @ApiProperty()
    @Column()
    description: string;
    
    @OneToOne(() => MedicalPersonnel)
    @JoinColumn()
    medicalPersonnel: MedicalPersonnel;

    @ApiProperty()
    @Column()
    medicalPersonnelId: number;
}