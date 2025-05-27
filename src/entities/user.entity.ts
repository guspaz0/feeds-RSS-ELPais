import { Schema } from "mongoose";
import { IUser } from "../interfaces/IMongooseDocument";
import mongoosePaginate from 'mongoose-paginate-v2'

const userSchema: Schema<IUser> = new Schema({
    name: String,
    email: String
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