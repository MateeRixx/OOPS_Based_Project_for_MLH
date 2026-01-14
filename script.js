class Pet {
  constructor(name, personality) {
    this.name = name;
    this.personality = personality;
    this.hunger = 50;     // 0 = full, 100 = starving
    this.happiness = 50;  // 0 = sad, 100 = very happy
  }

  feed() {
    this.hunger = Math.max(0, this.hunger - 20);
    this.happiness = Math.min(100, this.happiness + 5);
    return `${this.name} enjoyed the food! 🍖`;
  }

  play() {
    this.happiness = Math.min(100, this.happiness + 20);
    this.hunger = Math.min(100, this.hunger + 10);
    return `${this.name} is having fun! 🎾`;
  }

  getStatus() {
    let mood = "😐";

    if (this.happiness > 70) mood = "😄";
    else if (this.happiness < 30) mood = "😢";

    return {
      hunger: this.hunger,
      happiness: this.happiness,
      mood
    };
  }

  decay() {
    this.hunger = Math.min(100, this.hunger + 1);
    this.happiness = Math.max(0, this.happiness - 1);
  }
}


//dom manumpilation :

const pet = new Pet("Oggy", "Angry");

const petName = document.getElementById("petName");
const hunger = document.getElementById("hunger");
const happiness = document.getElementById("happiness");
const mood = document.getElementById("mood");
const message = document.getElementById("message");

petName.innerText = pet.name;

function updateUI() {
  const status = pet.getStatus();
  hunger.innerText = status.hunger;
  happiness.innerText = status.happiness;
  mood.innerText = status.mood;
}

function feedPet() {
  message.innerText = pet.feed();
  updateUI();
}

function playPet() {
  message.innerText = pet.play();
  updateUI();
}

setInterval(() => {
  pet.decay();
  updateUI();
}, 3000);

updateUI();
