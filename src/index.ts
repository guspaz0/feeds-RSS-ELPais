import app from './app'
import { appConfig } from './config/appConfig';
import { dataSource } from './config/dataSource';
import Swagger from './config/openapi/swagger';

const { port } = appConfig.server

async function initialize(){
    await dataSource()
    app.use("/api-docs", ...await Swagger.setUp());
    app.listen(port, () => {
        console.log(`app is running on http://localhost:${port}`)
    })
}


initialize()