import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto.js';
import { UpdateUserDto } from '../dto/update-user.dto.js';
import { UserService } from '../service/user.service.js';
import { RoleGuard } from '../../guards/role.guard.js';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    //get all users, or a single user when ?id= is provided
    @Get(':id')
    getUsers(@Param('id',ParseIntPipe) id: number) {
        return this.userService.getUser(id);
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
    @UseGuards(RoleGuard)
    deleteUser(@Param('id', ParseIntPipe) id: number)
    {
        return this.userService.deleteUser(id);
    }
}