import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Movie } from './movie.entity';

@Entity('movie_rates')
export class MovieRate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'double' })
  rate: number;

  @ManyToOne(() => User, (user) => user.movieRates)
  user: User[];

  @ManyToOne(() => Movie, (movie) => movie.movieRates)
  movie: Movie[];
}
