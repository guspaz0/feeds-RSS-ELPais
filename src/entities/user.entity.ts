import { Schema } from "mongoose";
import { IUser } from "../interfaces/IMongooseDocument";
import mongoosePaginate from 'mongoose-paginate-v2'

const userSchema: Schema<IUser> = new Schema({
    name: {
      type: String,
      required: [true, "Name is required!"],
      minlength: [3, "Name must be at least 3 characters long!"]
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      match: [/^\S+@\S+\.\S+$/, "Invalid email format!"]
    }
},{
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v
        }
    }
})

export default userSchema.plugin(mongoosePaginate)