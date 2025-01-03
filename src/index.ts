import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: '*'
})

const trailers = [
    {
        id: 1,
        name: "Avengers: Infinity War",
        description: "",
        youtubeId: "6ZfuNTqbHE8",
        categories: [""]
    },
    {
        id: 2,
        name: "Everything Everywhere All At Once",
        description: "",
        youtubeId: "wxN1T1uxQ2g",
        categories: [""]
    },
    {
        id: 3,
        name: "Spider-Man: No Way Home",
        description: "",
        youtubeId: "JfVOs4VSpmA",
        categories: [""]
    },
    {
        id: 4,
        name: "Deadpool & Wolverine",
        description: "",
        youtubeId: "73_1biulkYk",
        categories: [""]
    },
    {
        id: 5,
        name: "Detective Pikachu",
        description: "",
        youtubeId: "1roy4o4tqQM",
        categories: [""]
    },
    {
        id: 6,
        name: "Black Panther: Wakanda Forever",
        description: "",
        youtubeId: "RlOB3UALvrQ",
        categories: [""]
    },
    {
        id: 7,
        name: "Glass Onion",
        description: "",
        youtubeId: "-xR_lBtEvSc",
        categories: [""]
    },
    {
        id: 8,
        name: "Knives Out",
        description: "",
        youtubeId: "qGqiHJTsRkQ",
        categories: [""]
    },
    {
        id: 9,
        name: "Suicide Squad",
        description: "",
        youtubeId: "CmRih_VtVAs",
        categories: [""]
    },
    {
        id: 10,
        name: "The Suicide Squad",
        description: "",
        youtubeId: "jz1FrtMIh5c",
        categories: [""]
    }
]

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
