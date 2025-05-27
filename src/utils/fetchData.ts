import { SECCION } from "../types/secciones";
import { appConfig } from "../config/appConfig";
import { parseStringPromise } from 'xml2js';


export async function fetchData(seccion: SECCION) {
    try {
        const res = await fetch(appConfig.endpoints.elPais+SECCION[seccion]+"/portada")
        if (res.ok) { 
            const xmlData = await res.text()
            const data = await convertXmlToJson(xmlData)
            return data
        }
    } catch (e) {
        console.log(e)
    }

}

async function convertXmlToJson(xml: string): Promise<any>{
    try {
        const jsonResult = await parseStringPromise(xml);
        // const debug = Array.from(jsonResult.rss.channel['0'].item).slice(-10)[0] as any
        // console.log(
        //     debug['media:content']
        // )
        return Array.from(jsonResult.rss.channel['0'].item);
    } catch (error) {
        console.error('Error parsing XML:', error);
    }
}