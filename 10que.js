//Q10.Consider below as an example of constructor function where we want name and level to be
//referred to a function itself, is below example correct or not? Please explain?
//function Hero(name, level)
//{
//name = name;
//level = level;
//}


//Given code is not correct .and is not the example of construction function

class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

const hero1 = new Hero('Rohit', 1);
console.log(hero1)