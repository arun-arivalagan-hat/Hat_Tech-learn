import { Injectable } from '@nestjs/common';
import { UserLoggerService } from './logger/user.logger.service.js';

export interface User {
    id: number;
    name: string;
}

@Injectable()
export class UserService {
    // Inject the UserLoggerService into the UserService
    constructor(private userLogger: UserLoggerService) {}

    // Sample in-memory user data
    private users: User[] = [
    { id: 1, name: "Arun" },
    { id: 2, name: "Arivalagan" }
];

    // Get all users with names in uppercase
    getAllUsers(){
        this.userLogger.log('Fetching all users');
        return this.users.map(user => ({ ...user, name: user.name.toUpperCase() }));
    }

    // Get a user by ID
    getUser(id: number): User | undefined {
        this.userLogger.log(`Fetching user with ID: ${id}`);
        
        return this.users.find(user => user.id === id);
    }

    // Create a new user
    createUser(user: User) {
        this.userLogger.log(`Creating user with ID: ${user.id}`);
        this.users.push(user);
        return {
            message: "User created successfully",
            user
        };
    }

    // Update an existing user
    updateUser(id: number, updatedUser: Partial<User>) {
        this.userLogger.log(`Updating user with ID: ${id}`);
        const user = this.getUser(id);
        if (!user) {
            return { message: "User not found" };
        }
        Object.assign(user, updatedUser);
        this.userLogger.log(`Updated user with ID: ${id}`);
        return {
            message: "User updated successfully",
            user
        };
    }
    // Delete a user by ID
    deleteUser(id: number) {
        this.userLogger.log(`Deleting user with ID: ${id}`);
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            return { message: "User not found" };
        }
        const deletedUser = this.users[index];
        this.users.splice(index, 1);
        this.userLogger.log(`${this.users.map(user => user.name).join(', ')}`);
        return {
            message: "User deleted successfully",
            user: deletedUser
        };
    }
}
