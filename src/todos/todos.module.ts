import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../graphql/models/Todo';
import { TodoResolver } from './TodoResolver';
import { TodoService } from './TodoService';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodoResolver, TodoService],
})
export class TodosModule {}
