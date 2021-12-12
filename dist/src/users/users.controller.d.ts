import { UserCreationDto } from './dto/user-creation.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private us;
    constructor(us: UsersService);
    createUser(createUserDto: UserCreationDto): Promise<import("./interfaces/user.interface").IUser>;
}
