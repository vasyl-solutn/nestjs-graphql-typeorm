import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { UserSetting } from './UserSetting';
import { Todo } from './Todo';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  displayName?: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  money?: number;

  @OneToOne(() => UserSetting)
  @JoinColumn()
  @Field(() => UserSetting, { nullable: true })
  settings?: UserSetting;

  @ManyToMany(() => Todo, (todo) => todo.users)
  @Field(() => [Todo], { description: 'Todos associated with this user' })
  todos: Todo[];
}
