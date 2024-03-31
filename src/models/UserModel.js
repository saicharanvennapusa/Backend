import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trimm: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    firstName: {
        type: String,
        lowercase: true,
        trim: true,
        index: true
    },
    lastName: {
        type: String,
        lowercase: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    }
}, { timestamps: true })


export const User = mongoose.model("User", userSchema)