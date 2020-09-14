
import mongoose from 'mongoose';
import * as validations from './validations';


const schema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String,
        minlength: 2,
        maxlength: 50
    },
    lastName: {
        required: true,
        type: String,
        minlength: 2,
        maxlength: 30
    },
    username: {
        required: true,
        type: String,
        unique: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        required: true,
        type: String,
        unique: true,
        minlength: 2,
        validate: {
            validator: function(value: string): boolean {
                const regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                return regex.test(value);
            }
        }
    },
    password: {
        required: true,
        type: String,
        minlength: 2,
        maxlength: 60
    },

    // TO ADD TASKS
});

interface UserDocument extends mongoose.Document {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string
    // TO ADD TASKS
}

export default mongoose.model<UserDocument>('users', schema);