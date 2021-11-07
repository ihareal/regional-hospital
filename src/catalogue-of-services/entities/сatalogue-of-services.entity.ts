import { ComplexOfServices } from 'src/complex-of-services/entities/complex-of-services.entity';
import { MedicalPersonnel } from 'src/medical-personnel/entities/medical-personnel.entity';
import { Column, Double, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catalogueOfServices')
export class CatalogueOfServices{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    serviceDescription: string;

    @ManyToMany(type => MedicalPersonnel,  medicalPersonnel => medicalPersonnel.catalogueOfServices)
    @JoinTable()
    medicalPersonnels: MedicalPersonnel[];

    @ManyToMany(type => ComplexOfServices,  complexOfServices => complexOfServices.catalogueOfServices)
    @JoinTable()
    complexOfServices: ComplexOfServices[];    

}