import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Patients } from './patients.entity';
import { CatalogueOfServices } from './сatalogue-of-services.entity';

@Entity('medicalPersonnel')
export class MedicalPersonnel {
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
    position: string;

    @ManyToMany(type => CatalogueOfServices,  catalogueOfServices => catalogueOfServices.medicalPersonnels)
    catalogueOfServices: CatalogueOfServices[];

    @ManyToMany(type => Patients,  patients => patients.medicalPersonnel)
    patients: Patients[];
}