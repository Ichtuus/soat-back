import { UserReadDto } from 'src/users/dto/user-read.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private as;
    constructor(as: AuthService);
    login(readUserDto: UserReadDto): Promise<{
        user: import("../../users/interfaces/user.interface").IUser;
        access_token: string;
    }>;
}
