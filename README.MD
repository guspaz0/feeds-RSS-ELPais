<p align="center">
    RSS feeds ElPais

</p>

![El Pais](https://static.elpais.com/dist/resources/images/logos/primary/el-pais.svg)

### DESAFÍO TÉCNICO🛠️🚀

- Objetivo
    
    Desarrollar una API RESTful en **TypeScript** utilizando **Express** que actúe como un proxy entre los feeds RSS de El País y los consumidores de la API. 
    
    Esta API debe:
    
    1. Consumir y transformar datos XML de múltiples feeds RSS de El País.
    2. Enriquecer la información con metadatos adicionales.
    3. Almacenar los datos transformados en **MongoDB**.
    4. Exponer endpoints para consultar y filtrar las noticias, implementando paginación.
    5. Documentar la API utilizando **Swagger**.
    6. Implementar pruebas automatizadas para garantizar la calidad del código.
    7. Desplegar la aplicación en un entorno accesible públicamente.

## 📁 Estructura de proyecto

```bash
├── src/                # Main source code
│   ├── config/         # App, Db, configs
│   ├── controllers/    # Controllers
│   ├── entities/       # Mongo DB Schemas 
│   ├── routes/         # Routes, api endpoints for this proyect
│   ├── services/       # Service layer
│   ├── repository/     # Mongo DB Models
│   ├── interfaces/     # Interface methods for repository and others
│   ├── types/          # Types declarations, local and globals
│   └── utils/          # Utilities
├── tests/              # Test cases
├── docker-compose.yml  # Script to initialize docker containers for the app
├── .env                # Environment variable file
└── README.md           # This file
```