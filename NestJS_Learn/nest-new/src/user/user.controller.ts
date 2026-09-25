import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserService } from './user.service.js';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    //get all users, or a single user when ?id= is provided
    @Get()
    getUsers(@Query('id') id: string) {
        return this.userService.getUser(parseInt(id, 10));
    }
    //create user
    @Post()
    createUser(@Body() createUserDto: CreateUserDto)
    {
       return this.userService.createUser(createUserDto);
    }
    //update user
    @Put(':id')
    updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id', ParseIntPipe) id: number)
    {
         return this.userService.updateUser(id, updateUserDto);
    }
    //partially update user
    @Patch(':id')
    patchUser(@Body() updateUserDto: UpdateUserDto, @Param('id', ParseIntPipe) id: number)
    {
        return this.userService.updateUser(id, updateUserDto);
    }
    //delete user
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number)
    {
        return this.userService.deleteUser(id);
    }
}