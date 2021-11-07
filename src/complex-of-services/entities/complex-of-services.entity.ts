import { CatalogueOfServices } from 'src/catalogue-of-services/entities/сatalogue-of-services.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

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