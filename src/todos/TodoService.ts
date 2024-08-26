import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../graphql/models/Todo';
import { CreateTodoInput } from '../graphql/utils/CreateTodoInput';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todosRepository: Repository<Todo>,
  ) {}

  getTodos() {
    return this.todosRepository.find({ relations: ['users'] });
  }

  getTodoById(id: number) {
    return this.todosRepository.findOne({
      where: { id },
      relations: ['todos'],
    });
  }

  createTodo(createTodoData: CreateTodoInput) {
    const newTodo = this.todosRepository.create(createTodoData);
    return this.todosRepository.save(newTodo);
  }
}
