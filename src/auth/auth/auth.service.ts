import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserReadDto } from 'src/users/dto/user-read.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly us: UsersService,
    private readonly js: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.us.findOne(username);
    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(readUserDto: UserReadDto) {
    console.log('cou');
    const userFound = await this.us.findOne(readUserDto.email);
    if (!userFound) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    const isPasswordMatching = await bcrypt.compare(
      readUserDto.password,
      userFound.password,
    );

    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
    userFound.password = undefined;
    const payload = {
      createAt: new Date().toISOString(),
      sub: userFound._id,
      role: '',
    };

    // rework with env var
    if (userFound.email === 'admin') {
      payload.role = 'admin';
    } else {
      payload.role = 'user';
    }
    return {
      user: userFound,
      access_token: this.js.sign(payload),
    };
  }
}
