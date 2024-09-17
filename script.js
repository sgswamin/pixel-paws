class Pet {
    constructor(id) {
      this.id = id;
      this.fedLevel = 100;
      this.fedElement = document.getElementById(`hunger${id}`);
      this.messageElement = document.getElementById(`message${id}`);
      this.displayElement = document.getElementById(`pet${id}`);
    }
  
      feed(amount) {
      this.fedLevel += amount;
      if (this.fedLevel > 100) this.fedLevel = 100;
      this.fedElement.innerText = this.fedLevel;
    }
  
      decreaseFedLevel() {
      this.fedLevel -= 10;
      if (this.fedLevel < 0) this.fedLevel = 0;
      this.fedElement.innerText = this.fedLevel;
      if (this.fedLevel === 0) {
        this.messageElement.innerText = "Pet ran away";
        this.displayElement.style.opacity = 0.5;
      }
    }
  
  }
  
  let pet1Element = document.getElementById("pet1");
  let pet2Element = document.getElementById("pet2");
  let selectedPet = null;
  
  function selectPet(id){
    pet1Element.classList.remove("selected");
    pet2Element.classList.remove("selected");
  
    selectedPet = id;
    if (id === 1) {
      pet1Element.classList.add("selected");
    } else {
      pet2Element.classList.add("selected");
    }
  }
  
  let pet1 = new Pet(1);
  let pet2 = new Pet(2);
  
  function feedPet(amount){
    if (selectedPet === 1){
      pet1.feed(amount);
    }
    else if (selectedPet === 2){
      pet2.feed(amount);
    }
  }
  
  setInterval(() => {
    pet1.decreaseFedLevel();
    pet2.decreaseFedLevel();
  }, 5000);
  
  selectPet(1);