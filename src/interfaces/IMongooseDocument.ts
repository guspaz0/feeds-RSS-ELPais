import { Document } from 'mongoose';
import { SECCION } from '../types/secciones';

export interface INews extends Document, abstractEntity {
    title: string,
    pubDate: Date,
    link: string,
    description: string,
    category: string[],
    media_content: Record<string, string>,
    section: SECCION
}

export interface IUser extends Document, abstractEntity {
    name: string,
    email: string
}

export abstract class abstractEntity {
    createdAt!: Date
}