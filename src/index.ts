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
        description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        youtubeId: "6ZfuNTqbHE8",
        categories: ["superhero", "action", "adventure", "science fiction"]
    },
    {
        id: 2,
        name: "Everything Everywhere All At Once",
        description: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
        youtubeId: "wxN1T1uxQ2g",
        categories: ["comedy", "action", "science fiction", "drama"]
    },
    {
        id: 3,
        name: "Spider-Man: No Way Home",
        description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
        youtubeId: "JfVOs4VSpmA",
        categories: ["superhero", "action", "adventure", "comedy"]
    },
    {
        id: 4,
        name: "Deadpool & Wolverine",
        description: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
        youtubeId: "73_1biulkYk",
        categories: ["superhero", "comedy", "action"]
    },
    {
        id: 5,
        name: "Detective Pikachu",
        description: "In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.",
        youtubeId: "1roy4o4tqQM",
        categories: ["fantasy", "adventure", "mistery", "comedy"]
    },
    {
        id: 6,
        name: "Black Panther: Wakanda Forever",
        description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
        youtubeId: "RlOB3UALvrQ",
        categories: ["superhero", "drama", "science fiction"]
    },
    {
        id: 7,
        name: "Glass Onion",
        description: "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.",
        youtubeId: "-xR_lBtEvSc",
        categories: ["mistery", "crime", "comedy"]
    },
    {
        id: 8,
        name: "Knives Out",
        description: "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate.",
        youtubeId: "qGqiHJTsRkQ",
        categories: ["mistery", "crime", "comedy"]
    },
    {
        id: 9,
        name: "Suicide Squad",
        description: "A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.",
        youtubeId: "CmRih_VtVAs",
        categories: ["superhero", "action", "adventure", "fantasy"]
    },
    {
        id: 10,
        name: "The Suicide Squad",
        description: "Supervillains Harley Quinn, Bloodsport, Peacemaker, and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
        youtubeId: "jz1FrtMIh5c",
        categories: ["superhero", "comedy", "action", "fantasy"]
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
