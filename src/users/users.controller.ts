import { Body, Controller, Post } from '@nestjs/common';
import { UserCreationDto } from './dto/user-creation.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private us: UsersService) {}

  @Post('signUp')
  async createUser(@Body() createUserDto: UserCreationDto) {
    return this.us.createUser(createUserDto);
  }
}
