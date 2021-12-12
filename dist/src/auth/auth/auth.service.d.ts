import { JwtService } from '@nestjs/jwt';
import { UserReadDto } from 'src/users/dto/user-read.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly us;
    private readonly js;
    constructor(us: UsersService, js: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    login(readUserDto: UserReadDto): Promise<{
        user: import("../../users/interfaces/user.interface").IUser;
        access_token: string;
    }>;
}
