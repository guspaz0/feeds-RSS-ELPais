import { Schema } from "mongoose";
import { INews } from "../interfaces/IMongooseDocument";
import mongoosePaginate from 'mongoose-paginate-v2'

const NewsSchema: Schema<INews> = new Schema({
    title: String,
    pubDate: Date,
    link: {
        type: String,
        unique: true
    },
    description: String,
    category: [String],
    media_content: Object,
    section: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
}).plugin(mongoosePaginate)

export default NewsSchema;