import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersSchema } from './dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private userServices: UsersService) { }

    @Post('/add')
    addUser(@Body() user:UsersSchema): string {
       return this.userServices.addUser(user)
        
    }

    @Delete('/delete/:id')
    deleteUser(@Param() _id:string): string {
        return this.userServices.deleteUser(_id)
    }

   
    @Put('/update')
    updateUser(@Body() user:UsersSchema): string {
        return this.userServices.updateUser(user)
    }

    @Get('/')
    findUsers():UsersSchema[] {
        return this.userServices.findUsers()

    }

    @Get('/:_id')
    findById(@Param('_id',ParseIntPipe) id:number): string {

        console.log(id,'paramsid');
        console.log(typeof id)
        
        return `This will find a user id is  ${id}  , `

    }

    @Post(`/addd`)
    addBook(@Body() book:UsersSchema):string{
        return ``

    }

}
