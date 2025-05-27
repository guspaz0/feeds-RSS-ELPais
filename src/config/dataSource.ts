import mongoose from "mongoose";
import { appConfig } from "./appConfig";

const { user, pass, host, db_name } = appConfig.documentDb

const CONNECTION_STRING = `mongodb://${user}:${pass}@${host}/${db_name}?authMechanism=SCRAM-SHA-1&authSource=admin`

export const dataSource = async () => {
    mongoose.connect(CONNECTION_STRING)
}