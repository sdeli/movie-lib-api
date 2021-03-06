import { Genre } from './../../genre/entities/genre.entity';
import { Actor } from './actor.entity';
import { Director } from './director.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'text', nullable: true })
  img: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  rating: number;

  @ManyToOne(() => Director)
  director: Director;

  @ManyToMany(() => Actor)
  @JoinTable()
  actors: Actor[];

  @ManyToMany(() => Genre)
  @JoinTable()
  genres: Genre[];
}
