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
        categories: ["comedy", "action", "science fiction", "drama", "martial arts"]
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
        categories: ["family", "fantasy", "adventure", "mistery", "comedy"]
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
        categories: ["mistery", "crime", "comedy", "whodunnit"]
    },
    {
        id: 8,
        name: "Knives Out",
        description: "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate.",
        youtubeId: "qGqiHJTsRkQ",
        categories: ["mistery", "crime", "comedy", "whodunnit"]
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
    },
    {
        id: 11,
        name: "Captain America: Civil War",
        description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
        youtubeId: "dKrVegVI0Us",
        categories: ["superhero", "action", "drama", "science fiction"]
    },
    {
        id: 12,
        name: "Shazam!",
        description: "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
        youtubeId: "go6GEIrcvFY",
        categories: ["family", "superhero", "comedy", "fantasy", "adventure"]
    },
    {
        id: 13,
        name: "Blue Beetle",
        description: "An alien scarab chooses Jaime Reyes to be its symbiotic host, bestowing the recent college graduate with a suit of armor that's capable of extraordinary powers, forever changing his destiny as he becomes the superhero known as Blue Beetle.",
        youtubeId: "vS3_72Gb-bI",
        categories: ["superhero", "action", "adventure", "science fiction"]
    },
    {
        id: 14,
        name: "Palm Springs",
        description: "Nyles and Sarah find themselves stuck in a time loop and living the same day over and over again. They are drawn to each other, but certain revelations threaten their budding romance.",
        youtubeId: "CpBLtXduh_k",
        categories: ["comedy", "romance", "science fiction"]
    },
    {
        id: 15,
        name: "Avengers: Endgame",
        description: "After the devastating events of Vingadores: Guerra do Infinito (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        youtubeId: "hA6hldpSTF8",
        categories: ["superhero", "science fiction", "adventure", "action"]
    },
    {
        id: 16,
        name: "Madagascar 3: Europe's Most Wanted",
        description: "The Madagascar animals join a struggling European circus to get back to New York, but find themselves being pursued by a psychotic animal-control officer.",
        youtubeId: "PlkWVkpP59U",
        categories: ["family","comedy", "adventure"]
    },
    {
        id: 17,
        name: "Kung Fu Panda 3",
        description: "threats: one supernatural and the other a little closer to home.",
        youtubeId: "fGPPfZIvtCw",
        categories: ["martial arts", "action", "comedy", "family", "fantasy"]
    },
    {
        id: 18,
        name: "Guns Akimbo",
        description: "A guy relies on his newly-acquired gladiator skills to save his ex-girlfriend from kidnappers.",
        youtubeId: "JggpSpqxS6I",
        categories: ["action", "comedy", "crime"]
    },
    {
        id: 19,
        name: "Who Framed Roger Rabbit",
        description: "When a cartoon rabbit is accused of murder, he enlists the help of a burnt out private investigator to prove his innocence.",
        youtubeId: "tYkZNPBxZyk",
        categories: ["comedy", "crime", "adventure"]
    },
    {
        id: 20,
        name: "Cars 3",
        description: "Lightning McQueen sets out to prove to a new generation of racers that he's still the best race car in the world.",
        youtubeId: "E4K7JgPJ8-s",
        categories: ["adventure", "family", "action", "sport"]
    },
    {
        id: 21,
        name: "Murder on the Orient Express",
        description: "When a murder occurs on the train on which he's travelling, celebrated detective Hercule Poirot is recruited to solve the case.",
        youtubeId: "z68frP9Q7XA",
        categories: ["mistery", "crime", "drama", "whodunnit"]
    },
    {
        id: 22,
        name: "The Greatest Showman",
        description: "Celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.",
        youtubeId: "EodWwczRIe4",
        categories: ["musical", "drama", "biography"]
    },
    {
        id: 23,
        name: "Turning Red",
        description: "A thirteen-year-old girl named Mei is torn between staying her mother's dutiful daughter and the changes of adolescence. And as if the challenges were not enough, whenever she gets overly excited Mei transforms into a giant red panda.",
        youtubeId: "pqdHP2dWQ9M",
        categories: ["adventure", "comedy", "family", "fantasy"]
    },
    {
        id: 24,
        name: "Wreck-It Ralph",
        description: "Ralph is tired of playing the role of a bad guy and embarks on a journey to become a video game hero. But he accidentally lets loose a deadly enemy that threatens the entire arcade.",
        youtubeId: "87E6N7ToCxs",
        categories: ["adventure", "family", "comedy"]
    },
    {
        id: 25,
        name: "Star Wars: The Force Awakens",
        description: "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
        youtubeId: "sGbxmsDFVnE",
        categories: ["science fiction", "adventure", "action"]
    },
    {
        id: 26,
        name: "Star Wars: The Last Jedi",
        description: "Rey develops her abilities with the help of Luke Skywalker as the Resistance prepares for battle against the First Order.",
        youtubeId: "Q0CbN8sfihY",
        categories: ["science fiction", "adventure", "action"]
    },
    {
        id: 27,
        name: "The Boy and the Herron",
        description: "In the wake of his mother's death and his father's remarriage, a headstrong boy named Mahito ventures into a dreamlike world shared by both the living and the dead.",
        youtubeId: "f7EDFdA10pg",
        categories: ["isekai", "adventure", "fantasy", "drama"]
    },
    {
        id: 28,
        name: "Despicable Me",
        description: "Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see the evildoer as their potential father.",
        youtubeId: "bvXMWcUhKMY",
        categories: ["family", "comedy", "science fiction"]
    },
    {
        id: 29,
        name: "The Lion King 3",
        description: "Timon the meerkat and Pumbaa the warthog retell the story of O Rei Leão (1994) from their own perspective.",
        youtubeId: "p0DTnqn71WQ",
        categories: ["musical", "family", "adventure", "comedy"]
    },
    {
        id: 30,
        name: "Shrek",
        description: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",
        youtubeId: "CwXOrWvPBPk",
        categories: ["comedy", "adventure", "fairy tale", "romance"]
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
