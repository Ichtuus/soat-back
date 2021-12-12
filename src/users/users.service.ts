import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreationDto } from './dto/user-creation.dto';
import { IUser } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async createUser(createUserDto: UserCreationDto): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    try {
      const createdUser = new this.userModel({
        ...createUserDto,
        password: hashedPassword,
      });
      return await createdUser.save();
    } catch (error) {
      if (error.code) {
        throw new HttpException(
          'User with that email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(email: string): Promise<IUser> {
    return await this.userModel.findOne({ email }).exec();
  }
}
