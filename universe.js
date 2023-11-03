// const screen = document.querySelector(".div");







class Human {

    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack() {
        console.log("You are attacking an alien!");
    }
}

class Alien {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack() {
        console.log("Alien attacking human");
    }
}

let human = new Human(20, 5, .7);

let alien = [6];
let x, y, z;
for (let i = 0; i < 6; i++) {
    x = Math.floor(Math.random() * (4) + 6);
    y = Math.floor(Math.random() * (3) + 2)
    z = Math.random() * (.2) + .6
    alien[i] = new Alien(x, y, z)


}

let i = 0;

while (i < 6) {
    human.attack()

    if (Math.random() < human.accuracy) {

        console.log("You hit the alien!!!");
        console.log("You have done 5 damage");
        alien[i].hull -= human.firepower;
        console.log("Alien has " + alien[i].hull + " hull remaining.");
        if (alien[i].hull <= 0) {

            console.log("Human wins round " + (i + 1));
            ++i;
            // let y = prompt("Would you like to retreat? (y = yes, n = no)")
            // if (y ==="y"){
            //     console.log("You retreated. Goodbye");
            //     break;
            // }

        }
        if (i ===5 && alien[i].hull <=0){
            console.log("Human destroy all aliens");
            break;
        }

        // break;
    }
    else {
        console.log("You missed");
        // continue
    }

    alien[i].attack()
    // console.log("Alien attacks");
    if (Math.random() < alien[i].accuracy) {

        console.log("Alien hit the human!!!");
        console.log("Alien have done " + alien[i].firepower + " damage");
        human.hull -= alien[i].firepower;
        console.log("Human has " + human.hull + " hull remaining.");
        if (human.hull <= 0) {

            console.log("Alien wins " + (i + 1));
            console.log("Game Over!!");
            break;

        }

        // break;
    }
    else {
        console.log("Alien missed");
        // continue
    }








}