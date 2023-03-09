class Hamster {
    constructor(name){ // 
        this.owner = '' // <- this value is set to an empty string, so no need to specific in the parameter
        this.name = name
        this.price = 15
    }
    wheelRun() {
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }
}

class Person {
    constructor(name){ 
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getWeight() {
        return this.weight
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }

    eat(num){ // <- this num is a param for Timmy's argument in line 73,80,83
        this.mood += num // <- this num is the num in line 45
        this.weight += num
    }

    exercise(num){ // num refer to this methods not the eat()
        this.weight -= num // <- this num is refering to line 50, not the same num for eat()
    }

    ageUp(agenum){ // <- this has a param bc this method will need be resuable
        this.age += agenum // <- mean this.age(Person's age at line 21) + agenum (arugment from line 73)
        this.height += agenum
        this.weight += agenum
        this.mood -= agenum
        this.bankAccount += 10
    }
    
    buyHamster(hamster){
        this.hamsters.push(hamster) // <- this hamster is refering to the parameter - line 62(GUS!)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }
    
}

console.log(`----------- When Timmy is 5 --------`)
const gus = new Hamster('Gus')
const timmy = new Person('Timmy')
timmy.ageUp(5)
timmy.eat(5)
timmy.exercise(5)
console.log(timmy)
console.log()

console.log(`----------- When Timmy is 14 --------`)
timmy.ageUp(9)
gus.owner = timmy.name
timmy.buyHamster(gus)
console.log(timmy)
console.log()

console.log(`----------- When Timmy is 24 --------`)
timmy.ageUp(15)
timmy.eat(2)
timmy.exercise(2)
console.log(timmy)


console.log()
console.log(`------------ Chef ------------`)

class Dinners {
    constructor(appetizer,entree,dessert){
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }

}

class Chef { // factory of dinner
    constructor(chef){ // <- this "chef" is a parameter 
        this.chef = chef // <- this chef is a value that need to be defined (in the parameter)
        this.dish = [] // <- no need to define in parameter as it's an array OR it needs a value (a string, a number, etc..) to be functionable!

    }

    makeDinner (param1,param2,param3){
        const newDinner = new Dinners(param1,param2,param3) // pass the arugments for line 109
        this.dish.push(newDinner)
    }
    
}



const chef = new Chef('Chef Andy')
chef.makeDinner('Fruit Charcuterie Board','Chicken Pepper Pot','Bubble Berry Cobbler')
chef.makeDinner('Hot Spinach Artichoke Dip','Chicken Zucchini Casserole','Raspberry Mousse')
chef.makeDinner('Orange-Glazed Meatballs','Chicken and Rice Casserole','Bubblegum Cloud Fudge')
console.log(chef)

