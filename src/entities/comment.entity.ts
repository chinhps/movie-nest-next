import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Movie } from './movie.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'text' })
  public message: number;

  @Column({ type: 'enum', enum: ['on', 'off'], default: 'on' })
  status: string;

  @ManyToOne(() => User, (user) => user.comments)
  user: User[];

  @ManyToOne(() => Movie, (movie) => movie.comments)
  movie: Movie[];
}
