import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly as;
    constructor(as: AuthService);
    validate(username: string, password: string): Promise<any>;
}
export {};
