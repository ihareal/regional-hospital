import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Arrivals } from 'src/arrivals/entities/arrivals.entity';
import { Patients } from 'src/patients/entities/patients.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';

@Entity('registerOfCards')
export class RegisterOfCards {
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
    registration: string;

    @OneToMany(() => Arrivals, arrivals => arrivals.registerOfCards)
    arrivals: Arrivals[];

    @OneToOne(() => Patients)
    @JoinColumn()
    patients: Patients;

    @ApiProperty()
    @Column()
    patientId: number;

}