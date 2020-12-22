// for..of loops
// for..of versus for..in loops
let supernatural = {
    actors: [
        "Jared Padelecki",
        "Jensen Ackles",
        "Mark Sheppard",
        "Misha Collins",
    ],
    characters: ["Sam Winchester", "Dean Winchester", "Crowley", "Castiel"],
    seasons: 12,
};
for (let prop in supernatural) {
    console.log(prop, Array.isArray(supernatural[prop]));
}
for (name of supernatural.actors) {
    console.log(name);
}