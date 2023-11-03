class Human {

    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(){
        console.log("You are attacking an alien!");
    }
}

class Alien {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(){
        console.log("Alien attacking human");
    }
}

let human = new Human(20, 5, .7);

let alien = [2];
let x, y, z;
for (let i = 0; i<2; i++){
    x = Math.random() * (3) + 3
    y = Math.random() * (2) + 2
    z = Math.random() * (.2) + .6
    alien[i] = new Alien(x,y,z)

   
}

let i = 0;

while (i <= 1){
    human.attack()
    
    if(Math.random() < human.accuracy){

        console.log("You hit the alien!!!");
        console.log("You have done 5 damage");
        alien[i].hull -= human.firepower;
        console.log("Alien has " + alien[i].hull + " hull remaining.");
        if (alien[i].hull <= 0){
           
            console.log("Human wins round " + (i + 1));
            ++i;
        }

        // break;
    }
    else {
        console.log("You missed");
        // continue
    }
}