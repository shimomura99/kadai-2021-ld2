class Animal {
    constructor() {
        this.energy = 100
    }
    eat() {
        this.energy = this.energy + 10
    }
}

class Cat extends Animal {
    speak() {
        console.log("meow")
    }
}

class Lion extends Animal {
    constructor() {
        super()
        this.energy = 500
    }
    speak() {
        console.log("growl")
    }
    eat() {
        this.energy = this.energy + 30
    }
}


const cat = new Cat()
const lion = new Lion()

cat.speak()
lion.speak()

cat.eat()
console.log("cat", cat.energy)
cat.eat()
console.log("   ", cat.energy)

lion.eat()
console.log("lion", lion.energy)
lion.eat()
console.log("    ", lion.energy)