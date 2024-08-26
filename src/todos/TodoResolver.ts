import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Todo } from '../graphql/models/Todo';
import { TodoService } from './TodoService';
import { CreateTodoInput } from '../graphql/utils/CreateTodoInput';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query(() => Todo, { nullable: true })
  getTodoById(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.getTodoById(id);
  }

  @Query(() => [Todo])
  getTodos() {
    return this.todoService.getTodos();
  }

  @Mutation(() => Todo)
  createTodo(@Args('createTodoData') createTodoData: CreateTodoInput) {
    return this.todoService.createTodo(createTodoData);
  }
}
