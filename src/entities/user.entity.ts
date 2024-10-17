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

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @PrimaryGeneratedColumn('uuid')
  public provider_id: string;

  @PrimaryColumn()
  public email: string;

  @PrimaryColumn()
  public username: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['active', 'inactive'],
    default: 'active',
  })
  public status: string;

  @Column()
  level: number;

  @Column({
    type: 'enum',
    enum: ['account', 'facebook', 'google'],
    default: 'account',
  })
  public login_type: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'user'],
    default: 'user',
  })
  public role: string;

  @Column({ type: 'smallint', default: 0 })
  public block: number;

  @Column()
  public avatar_url: string;

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

  @OneToMany(() => MovieRate, (rate) => rate.user)
  movieRates: MovieRate[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Bookmark, (bookmark) => bookmark.user)
  bookmarks: Bookmark[];
}
