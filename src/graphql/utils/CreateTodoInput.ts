import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  points: number;
}
