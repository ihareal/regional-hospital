import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { CatalogueOfServices } from './сatalogue-of-services.entity';


@Entity('complexOfServices')
export class ComplexOfServices {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    totalCost: number;

    @ManyToMany(type => CatalogueOfServices, catalogueOfServices => catalogueOfServices.complexOfServices)
    catalogueOfServices: CatalogueOfServices[];
}