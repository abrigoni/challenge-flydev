Crear en github:
- [X] Un proyecto node con express-graphql
- [X] Una BD MongoDB y Mongoose como ORM
- [X] Tests en jest (no se el alcance de Jest, pero si hace feature tests, que sean dos o tres features tests probando la API)
- [X] Typescript implementado (aunque sea mínimo)
- [X] Usar algunas funciones con lodash
- [X] Un collection de Users (campos: id, name, lastName, age)
- [X] Métodos API (2 y 2): un GET que liste los users, un GET que devuelva un usuario particular, un POST que inserte un nuevo user y un PUT que update un usuario existente
- [X] Jest: que testee una inserción correcta, que testee una inserción incorrecta
- [X] Explicar algunas diferencias entre javascript / typescript y explicar Promises


## Config:
Version de Node.JS: v12.19.0
1. Crear un archivo .env que tenga 
    ```
        PORT = {valor}
        MONGO_URL = {valor}
        MONGO_NAME = {valor}
    ```
    Estas variables son seteadas en env.config.ts para su uso en desarrollo

2. Para desarrollo ejecutar el script dev y desarrollar normalmente con hot reload
    ```bash
        npm run dev
    ```
3. Para usar la version de produccion primero armar el build con el script build:
    ```bash
        npm run build
    ```
   Luego
    ```bash
        npm start
    ```


## Diferencias entre Javascript y Typescript
Javascript es un lenguaje de script interpretado utilizado en desarrollo web porque los navegadores
solo entienden HTML, CSS y Javascript. Para poder usar Javascript del lado del servidor se utiliza
Node.JS que es el entorno de ejecucion en el sistema operativo para poder usar javascript.

Typescript surge como una extension de javascript, un nivel mas alto de abstraccion.
La diferencia fundamental entre typescript y javascript es que el primero es compilado y el segundo
interpretado.

El flujo seria, se desarrolla en typescript, se compila 1 vez y 
se ejecuta el programa en javascript N veces.

Otras diferencias son las nuevas cosas que agregan:
Como el uso de tipado en las variables, nuevas estructuras para soportar la Programacion Orientada
a Objetos como clases, herencia, interfaces.
Tambien tiene el uso de generico para pasarse como parametro en la definicion de clases y funciones.


## Promises
Es un objeto que puede tal vez retornar un valor especificado en el futuro.
Cuando se crea una promesa tiene 3 estados posibles:
    - Pendiente
    - Resuelta
    - Rechazada

Por ejemplo una Promise<number> en typescript seria una promesa que en base a lo que suceda quien la resuelva,
puede llegar a retornar valor de tipo "number" cuando su estado pase a Resuelta, o bien puede ser rechazada y 
especificar por que razon fue asi.
