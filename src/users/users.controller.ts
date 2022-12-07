import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './CreateUserDto';
import { User } from './interface/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  mypage(): User[] {
    return this.usersService.findAll();
  }

  @Post()
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post()
  signIn(): string {
    return 'this action returns signIn and token';
  }
}
