import { Body, Controller, Post } from '@nestjs/common';
import { UserReadDto } from 'src/users/dto/user-read.dto';
import { AuthService } from './auth.service';

@Controller({
  path: 'api/auth',
  version: '1',
})
export class AuthController {
  constructor(private as: AuthService) {}

  @Post('signin')
  async login(@Body() readUserDto: UserReadDto) {
    return this.as.login(readUserDto);
  }
}
