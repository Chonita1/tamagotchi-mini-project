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


        //prompt to name your pet
pet_name = prompt("What is your pet's name?")

//feed pet_name from prompt into petName element
document.getElementById('petName').innerHTML = pet_name

let birthAge = 0;
let ageTimer = setInterval(function(){
  if(birthAge >= 100){
    clearInterval(ageTimer);
    document.getElementById("countdown").innerHTML = "RIP Too Old";
  } else {
    document.getElementById("countdown").innerHTML = birthAge + " years old";
  }
  birthAge += 1;
}, 1000);


const IMGMAP = {
  "pet-0": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/228274/pet-0.png",
  "pet-1": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/228274/pet-1.png",
  "pet-2": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/228274/pet-2.png",
  "pet-3": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/228274/pet-3.png",
  "pet-4": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/228274/pet-4.png",
  "pet-5": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/228274/pet-5.png",
  "pet-strong": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/228274/pet-strong.png",
  "pet-weak": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/228274/pet-weak.png",
  "pet-win": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/228274/pet-win.png",
  "pet-workout": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/228274/pet-workout.png"
};

// Setup of the game
const totalHealth = 10;
const winHealth = totalHealth * 1.2;

let petHealth = 10;
let petStrength = 0;
let petSleepiness = 5;



let turnCount = 0;

// Pet Image Selector
function updatePetImage(imageType) {
  let imageSrc = IMGMAP["pet-0"];

  if (imageType === "win") {
    imageSrc = IMGMAP["pet-win"];
  } else if (imageType === "strong") {
    imageSrc = IMGMAP["pet-strong"];
  } else if (imageType === "weak") {
    imageSrc = IMGMAP["pet-weak"];
  } else if (imageType === "exercise") {
    imageSrc = IMGMAP["pet-workout"];
  } else { // Regular images

    if (petHealth > (totalHealth * 0.8)) {
      imageSrc = IMGMAP["pet-0"];
    } else if (petHealth > (totalHealth * 0.6)) {
      imageSrc = IMGMAP["pet-1"];
    } else if (petHealth > (totalHealth * 0.4)) {
      imageSrc = IMGMAP["pet-2"];
    } else if (petHealth > (totalHealth * 0.2)) {
      imageSrc = IMGMAP["pet-3"];
    } else if (petHealth > 0) {
      imageSrc = IMGMAP["pet-4"];
    } 
    else {
      imageSrc = IMGMAP["pet-5"]; // RIP
    }

  }

  document.querySelector('img').setAttribute('src', imageSrc);
}

function updateScores() {
  document.querySelector('#health').textContent = petHealth;
  document.querySelector('#strength').textContent = petStrength;
  document.querySelector('#sleepiness').textContent = petSleepiness;

  if (petHealth < 1) {
    updatePetImage();
    outputLog('Your pet is no more. You LOSE.\n');
  } else if (petHealth > winHealth) {
    updatePetImage('win');
    outputLog('Congratulations. Your pet is really strong! You WIN.\n');
  }
}

function oneUpTurn() {
  turnCount = turnCount + 1;
}

function outputLog(message) {
  let log = document.querySelector('pre').textContent;
  document.querySelector('pre').textContent = 'TURN ' + turnCount + ': ' + message + log;
}


function restPet(event) {
  // Increment petHealth
  petSleepiness = petSleepiness - 1;


    updatePetImage();
    outputLog('Your pet sleeps and gets less sleepy.\n');
  

  // Update scores
  updateScores();
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

birthAge -= 10
  oneUpTurn();
  
}

function feedPet(event) {
  // Increment petHealth
  petHealth = petHealth + 10;

 
    updatePetImage();
    outputLog('Your pet eats and gains health.\n');
  
document.body.style.backgroundColor = "white";
document.body.style.color = "black";

  // Update scores
  updateScores();

  oneUpTurn();
}

function exercisePet(event) {
  // Increment petStrength
  petStrength = petStrength + 1;
  petHealth = petHealth - 10;

  // Update pet image
  updatePetImage('exercise');

  // Update log
  outputLog('Your pet plays with you.\n');

  // Update scores
  updateScores();
document.body.style.backgroundColor = "white";
document.body.style.color = "black";

  oneUpTurn();
}

function reset(event) {
  alert('What code should go here?');
}

function MyClass() {
    this.instanceData = "Display Me";

    this.DisplayData = function() {
        alert(this.instanceData);
    }
}

let classInstance = new MyClass();