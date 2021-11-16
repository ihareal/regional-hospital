import { CatalogueOfServices } from 'src/catalogue-of-services/entities/сatalogue-of-services.entity';
import { Patients } from 'src/patients/entities/patients.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

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
