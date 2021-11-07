import { Column, Double, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ComplexOfServices } from './complex-of-services.entity';
import { MedicalPersonnel } from './medical-personnel.entity';

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