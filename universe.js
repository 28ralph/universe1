// const screen = document.querySelector(".div");

const humanattack = document.querySelector(".humanAttack");
const alienattack = document.querySelector(".alienAttack");
const screen = document.querySelector(".screen");
const li = document.querySelector(".li");
const ship1 = document.querySelector(".ship1");
let l1;
let a= 0;
let b = 500;
class Human {

    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack() {
        l1 = document.createElement("li");
        l1.innerHTML = "You are attacking an alien!/n";
        screen.append(l1);
    }
}

class Alien {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack() {
        l1 = document.createElement("li");
        l1.innerHTML = "Alien attacking human";
        screen.append(l1);
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
ship2();
let i = 0;

while (i < 6) {
    humanattack.HumanAttack();
    // if (alien[i].hull <= 0){
    // let quit = prompt("Would you like to retreat? (y = yes, n = no)");
    // if (quit === "y") {
    //     l1 = document.createElement("li");
    //     l1.innerHTML("You retreated. Goodbye");
    //     screen.append(l1);
    //     humanattack.disabled = true;
    //     alienattack.disabled = true;
    //     break;

    // }}
    alienattack.AlienAttack();


}

function HumanAttack() {

    human.attack()

    if (Math.random() < human.accuracy) {
        l1 = document.createElement("li");
        l1.innerHTML = "You hit the alien!!!/n";
        screen.append(l1);
        l1 = document.createElement("li");
        l1.innerHTML = "You have done 5 damage";
        screen.append(l1);
        alien[i].hull -= human.firepower;
        l1 = document.createElement("li");
        l1.innerHTML = "Alien has " + alien[i].hull + " hull remaining.";
        screen.append(l1);
        if (alien[i].hull <= 0) {
            l1 = document.createElement("li");
            l1.innerHTML = "Human wins round " + (i + 1);
            screen.append(l1);

            // let quit = prompt("Would you like to retreat? (y = yes, n = no)");
            // if (quit === "y") {
            //     l1 = document.createElement("li");
            //     l1.innerHTML("You retreated. Goodbye");
            //     screen.append(l1);
            //     humanattack.disabled = true;
            //     alienattack.disabled = true;

            // }






            l1 = document.createElement("li");
            l1.innerHTML = "<h1>ROUND " + (i + 2) + "</h1>";
            screen.append(l1);

            ++i;
            

        }
        if (i === 5 && alien[i].hull <= 0) {
            l1 = document.createElement("li");
            l1.innerHTML = "Human destroy all aliens";
            screen.append(l1);
            humanattack.disabled = true;
            alienattack.disabled = true;
            // break;
        }

        // break;
    }
    else {
        l1 = document.createElement("li");
        l1.innerHTML = "You missed";
        screen.append(l1);
        // continue
    }



}

function AlienAttack() {
    alien[i].attack()
    // l1.innerHTML("Alien attacks");
    if (Math.random() < alien[i].accuracy) {
        l1 = document.createElement("li");
        l1.innerHTML = "Alien hit the human!!!";
        screen.append(l1);
        l1 = document.createElement("li");
        l1.innerHTML = "Alien have done " + alien[i].firepower + " damage";
        screen.append(l1);
        human.hull -= alien[i].firepower;
        l1 = document.createElement("li");
        l1.innerHTML = "Human has " + human.hull + " hull remaining.";
        screen.append(l1);
        if (human.hull <= 0) {
            l1 = document.createElement("li");
            l1.innerHTML = "Alien wins " + (i + 1);
            screen.append(l1);
            l1 = document.createElement("li");
            l1.innerHTML = "Game Over!!";
            screen.append(l1);
            humanattack.disabled = true;
            alienattack.disabled = true;
            // break;

        }

        // break;
    }
    else {
        l1 = document.createElement("li");
        l1.innerHTML = "Alien missed";
        screen.append(l1);
        // continue
    }











}

function ship2(){
    if (a === 1500){
        a = 0;
       
    }
    if (b === 500){
        b = 497;
    }
    else if (b === 497){
        b = 500;
    }
 a +=3;
 
 ship1.style.left = a + "px";
 ship1.style.top = b + "px";
 setTimeout(ship2, 100);

}