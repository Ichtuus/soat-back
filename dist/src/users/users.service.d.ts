import { Model } from 'mongoose';
import { UserCreationDto } from './dto/user-creation.dto';
import { IUser } from './interfaces/user.interface';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    createUser(createUserDto: UserCreationDto): Promise<IUser>;
    findOne(email: string): Promise<IUser>;
}
