# TrailerFlix

![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-2B579A?style=for-the-badge&logo=visual-studio-code&logoColor=007ACC)
![Node](https://img.shields.io/badge/node-3F873E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-087ED1?style=for-the-badge&logo=typescript&logoColor=white)

A simple Fastify-based API that provides movie trailer information. You can retrieve a list of trailers or information about a specific trailer by its ID.

### Features
- List all available movie trailers
- Get information about a specific trailer by its ID
- CORS enabled for cross-origin requests

### Installation
Clone the repository:

```
git clone https://github.com/GabrielFRCordeiro/node-ts-api-trailerflix.git
```

Navigate into the project directory:

```
cd movie-trailers-api
```

Install the dependencies:

```
npm install
```

Start the server:

```
npm run start:dev
```

The server will start on port 3333.

### API Endpoints
1. Endpoint: /trailers
- Method: GET
- Response: Returns a list of all available trailers.

```
{
  "trailers": [
    {
      "id": 1,
      "name": "Avengers: Infinity War",
      "description": "",
      "videoId": "6ZfuNTqbHE8",
      "categories": [""]
    },
    {
      "id": 2,
      "name": "Everything Everywhere All At Once",
      "description": "",
      "videoId": "wxN1T1uxQ2g",
      "categories": [""]
    },
    ...
  ]
}
```

2. Get trailer by ID
- Endpoint: /trailers/:id
- Method: GET
- URL Parameters:
    - id: The unique ID of the trailer (integer)
- Response: Returns information about a specific trailer if found.

```
{
  "trailer": {
    "id": 1,
    "name": "Avengers: Infinity War",
    "description": "",
    "videoId": "6ZfuNTqbHE8",
    "categories": [""]
  }
}
```

If the trailer is not found, a 404 error is returned:

```
{
  "message": "Trailer not found"
}
```

### CORS Support
This API supports CORS, allowing requests from any origin (*). You can freely make requests from different domains or front-end applications.

### Dependencies
fastify: Web framework for Node.js
@fastify/cors: CORS plugin for Fastify

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
