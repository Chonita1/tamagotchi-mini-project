console.log("hello")
class Tamagotchi {
    constructor (name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.age = 0;
        this.boredom = 0;
    }
}
const tamagotchi1 = new Tamagotchi('Tammy');
    console.log(tamagotchi1);
    console.log(tamagotchi1.name);

// Adding a method to the constructor
// pet.name = function() {
// `${this.name} says hello!`;
// }