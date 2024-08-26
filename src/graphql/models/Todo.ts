import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './User';

@Entity({ name: 'todos' })
@ObjectType()
export class Todo {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: "The todo's unique identifier" })
  id: number;

  @Column()
  @Field(() => String, { description: "The todo's title" })
  title: string;

  @Column()
  @Field(() => Int, { description: 'The number of points for this todo' })
  points: number;

  @ManyToMany(() => User, (user) => user.todos)
  @JoinTable({ name: 'user_todos' })
  @Field(() => [User], {
    nullable: true,
    description: 'Users associated with this todo',
  })
  users: User[];
}
