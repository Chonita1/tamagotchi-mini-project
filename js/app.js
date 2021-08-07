class Tamagotchi {
    constructor (name) {
        this.name = name;
        this.hunger = 0;
        this.feed = 0;
        this.play = 0;
        this.sleep = 0;
        this.boredom = 0;
        this.health = 0;
        this.age = 0;
        this.rip = false;
    }
        getName() {
            return this.name
        }
        getHunger() {
            return this.hunger
        }
    
        getFeed()  {
            return this.feed
            
        }
        
        getBoredom() {
            return this.boredom
            //this.boredom++
            //this.health++
        }
        getPlay() {
            return this.play
        
        }
        getSleep() {
            return this.sleep
        }        
        getHealth() {
            return this.health
        }
        getAge() {
            return this.age
        }
        getRip() {
            return this.rip
        }
    }
    const game = {
        vPet: null, 
        intervalID: null,
        time: 0,
    }
    const vPet2 = new Tamagotchi('');
    this.vPet = vPet2;
    console.log("Welcome to your new pet");
        