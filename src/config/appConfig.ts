import 'dotenv/config'
import { SECCION } from '../types/secciones'

export const appConfig = {
    server: {
        port: process.env.PORT
    },
    documentDb: {
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASSWORD,
        db_name: process.env.MONGO_DB,
        host: process.env.MONGO_HOST
    },
    endpoints: {
        elPais: (seccion: SECCION)=> process.env.FEEDS_ELPAIS+SECCION[seccion]+"/portada"
    }
}