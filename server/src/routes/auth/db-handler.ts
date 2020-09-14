
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import IUser from './i-user'
import UserModel from './db-model'

export class DBHandler {
    private readonly databaseUrl: string;
    private readonly db: mongoose.Connection;    
    
    constructor() {
        this.databaseUrl = 'mongodb://127.0.0.1/calendar-app';
        mongoose.connect(this.databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        this.db = mongoose.connection;
        this.verifyDatabaseConnection();
    }

    public async getUser(email: string, password: string) {
        try {
            const user = await UserModel.findOne({ email: email });
            if (user == null) {
                throw new Error("User with specified email does not exist.");
            }
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
                throw new Error("Password incorrect.");
            }
            return user;
        }
        catch(error) {
            throw error;
        }
    }

    public async insertUser(user: IUser) {
        user.password = await bcrypt.hash(user.password, 12);
        const userModel = new UserModel(user);
        await userModel.save();
    }

    public deleteUser(user: IUser): void {

    }

    public updateUser(user: IUser): void {

    }

    private verifyDatabaseConnection(): void {
        this.db.on('error', console.error.bind(console, 'Database connection error:'))
        this.db.once('open', () => {
            console.log("Database connection open");
        })
    }
};