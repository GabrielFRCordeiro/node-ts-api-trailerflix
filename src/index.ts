import fastify from "fastify";
import cors from "@fastify/cors";
import trailers from './data/trailers.json';

const server = fastify({ logger: true });

server.register(cors, {
    origin: '*'
})

server.get("/trailers", async(request, response) => {
    response.type('application/json').code(200);
    return { trailers }
})

interface TrailerParams {
    id: string
}

server.get<{Params: TrailerParams}>('/trailers/:id', async(request, response) => {
    const id = parseInt(request.params.id);
    const trailer = trailers.find((trailer) => trailer.id === id)
    if (!trailer) {
        response.type('application/json').code(404);
        return { message: 'Trailer not found' }
    } else {
        response.type('application/json').code(200);
        return { trailer }
    }
});

server.listen({port: 3333}, () => {
    console.log('Server init');
});
