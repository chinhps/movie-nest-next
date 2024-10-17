import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MovieRate } from './movieRate.entity';
import { Comment } from './comment.entity';
import { Bookmark } from './bookmark.entity';

@Entity('movies')
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie_name: string;

  @Column()
  movie_name_other: string;

  @Column()
  release: string;

  @Column({
    type: 'enum',
    enum: ['on', 'off'],
    default: 'off',
  })
  status: string;

  @Column()
  banner_image: string;

  @Column()
  movie_image: string;

  @Column()
  description: string;

  @Column()
  parent_id: number;

  @Column()
  views: number;

  @PrimaryColumn()
  slug: string;

  @Column()
  episodes_counter: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    select: true,
  })
  public created_at!: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    select: true,
  })
  public updated_at!: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    select: true,
  })
  public deleted_at!: Date;

  @OneToMany(() => MovieRate, (rate) => rate.movie)
  movieRates: MovieRate[];

  @OneToMany(() => Comment, (comment) => comment.movie)
  comments: Comment[];

  @OneToMany(() => Bookmark, (bookmark) => bookmark.user)
  bookmarks: Bookmark[];
}
