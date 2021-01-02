// inherit-compose.js
// Inheritance vs Composition

//INHERITANCE
//  Character > Human > Sam
//  Character > Robot > x73
//  Character > Cyborg > Dolph

const Character = {
    talk: function(...msg) {
        console.log(msg.join(" "));
    },
};

const Human = Object.create(Character, {
    speed: { value: 3 },
    name: { value: "Hector" },
});
Human.walk = function() {
    this.talk(this.name, "walking");
};
Human.eat = function() {
    this.talk(this.name, "eating");
};

const Robot = Object.create(Character, {
    speed: { value: 8 },
    id: { value: "THX1138" },
});
Robot.drive = function() {
    this.talk(this.id, "\u26A1", "driving");
};
Robot.wifi = function() {
    this.talk(this.id, "\u26A1", "connecting");
};

const sam = Object.create(Human, { name: { value: "Samuel" } });
sam.walk();
sam.talk("Hello from Samuel.");

const x73 = Object.create(Robot, { id: { value: "x73" } });
x73.drive();
x73.wifi();
// ????What about a Cybernetically enhanced human with wifi?