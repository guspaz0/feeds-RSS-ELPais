import swaggerAutogen from "swagger-autogen";
import swaggerUi from "swagger-ui-express";
import path from 'path'
import fs from 'fs'
import { SECCION } from "../../types/secciones";

class SwaggerConfig {
	#endpointsFiles = ["./src/routes/index.ts"];
	#outputFile = path.join(__dirname, 'swagger_output.json')
	async setUp(){
		await swaggerAutogen({openapi: '3.0.0'})(this.#outputFile, this.#endpointsFiles, this.#doc)
		const swaggerFile = JSON.parse(fs.readFileSync(this.#outputFile,'utf-8'));
		return [ swaggerUi.serve, swaggerUi.setup(swaggerFile) ]
	}
	#newsExample = {
		_id: "123456",
		title: "noticia tendencia",
		pubDate: "2025-05-26T00:00:00.000Z",
		link: "https://elpais.com/noticia.html",
		description: "Detalle de noticia tendencia",
		category: [	"palabra clave"	],
		media_content: { url: "url a una imagen", type: "image/jpeg", medium: "image" },
		section: "argentina",
		createdAt: "2025-05-27T00:00:00.000Z"
	}
	#doc = {
		info: {
			title: "API Noticias",
			description: "API REST para noticias",
			version: "1.0.0",
		},
		servers: [
			{
				url: `/api/v1`,
				description: "API v1"
			}
		],
		schemes: ["http"],
		components: {
			schemas: {
				News: this.#newsExample,
				pageResponseNews: {
					page: 1,
					limit: 20,
					total: 6,
					results: [ this.#newsExample ]
				},
				errorResponse: {
					succeed: true,
					message: "Mensaje que hace referencia para indentificar el error"
				},
				seccion: {
					'@enum': Object.keys(SECCION),
					default: "argentina"
				}
			},
			parameters: {
				page: { 
					name: "page", 
					in: 'query', 
					description: "pagina actual", 
					schema: { type: "integer", default: 1 } 
				},
				limit: { 
					name: "limit", 
					in: 'query', 
					description: "resultados por pagina", 
					schema: { type: "integer", default: 20 } 
				},
				title: { 
					name: "title", 
					in: 'query', 
					description: "busqueda por titulo", 
					schema: { type: "string", default: "" } 
				},
				category: { 
					name: "category", 
					in: 'query', 
					description: "busqueda por categoria", 
					schema: { type: "string", default: "" } 
				},
				from: { 
					name: "from", 
					in: 'query', 
					description: "buscar por fecha de inicio", 
					schema: { type: "date", default: "" } 
				},
				to: { 
					name: "to", 
					in: 'query', 
					description: "buscar por fecha final", 
					schema: { type: "date", default: "" } 
				}
			}
		}
	};
}

export default new SwaggerConfig()