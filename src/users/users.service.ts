import { Injectable } from '@nestjs/common';
import { UsersSchema } from './dto/users.dto';

@Injectable()
export class UsersService {
    // constructor(private user:UsersSchema){

    // }
    public users: UsersSchema[] = []



    addUser(users: UsersSchema): string {
        this.users.push(users)
        return `This will add user`
    }

    deleteUser(usersID: string): string {
        this.users = this.users.filter((currentUser) => {
            return currentUser.id === usersID
        })
        return `This will delete user`
    }

    updateUser(users: UsersSchema): string {
        let index = this.users.findIndex((currentUser: any) => {
            return currentUser.id === users.id
        })
        this.users[index] = users
        return `This will update user`
    }

    findUsers(): UsersSchema[] {
        return this.users

    }
}
