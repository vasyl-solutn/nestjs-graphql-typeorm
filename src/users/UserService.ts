import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { User } from '../graphql/models/User';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { Todo } from '../graphql/models/Todo';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Todo) private todosRepository: Repository<Todo>,
  ) {}

  getUsers() {
    return this.usersRepository.find({ relations: ['settings', 'todos'] });
  }

  getUserById(id: number) {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['settings', 'todos'],
    });
  }

  createUser(createUserData: CreateUserInput) {
    const newUser = this.usersRepository.create(createUserData);
    return this.usersRepository.save(newUser);
  }

  async addUserTodos(userId: number, todoIds: number[]): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['todos'],
    });
    const todos = await this.todosRepository.findBy({ id: In([todoIds]) });

    user.todos = [...user.todos, ...todos];
    return this.usersRepository.save(user);
  }
}
