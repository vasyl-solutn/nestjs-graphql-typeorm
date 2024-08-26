import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { User } from '../graphql/models/User';
import { UserSettingService } from './UserSettingService';
import { UserSetting } from '../graphql/models/UserSetting';
import { UserSettingsResolver } from './UserSettingsResolver';
import { Todo } from '../graphql/models/Todo';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting, Todo])],
  providers: [
    UserResolver,
    UserService,
    UserSettingService,
    UserSettingsResolver,
  ],
})
export class UsersModule {}
