import app from './app'
import { appConfig } from './config/appConfig';
import { dataSource } from './config/dataSource';

const { port } = appConfig.server

dataSource().then(()=> {
    app.listen(port, () => {
        console.log(`app is running on http://localhost:${port}`)
    })
})
