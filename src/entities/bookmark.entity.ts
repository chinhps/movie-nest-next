import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Movie } from './movie.entity';

@Entity('bookmarks')
export class Bookmark {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => User, (user) => user.bookmarks)
  user: User[];

  @ManyToOne(() => Movie, (movie) => movie.bookmarks)
  movie: Movie[];
}
