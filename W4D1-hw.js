class Hamster {
    constructor(owner,name,price){
        this.owner = ''
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
        return price
    }
}

class Person {
    constructor(name,age,height,weight,mood,hamsters,bankAccount){
        this.name = name
        this.age = age || 0
        this.height = height || 0
        this.weight = weight || 0
        this.mood = mood || 0
        this.hamsters = []
        this.bankAccount = bankAccount
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getWeight() {
        if (eat() > 5){
            return this.weight += 10
        }
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }

    eat(){
        if (Person < 5){
            this.weight += 4
        }
        return this.mood += 2
    }

    exercise(){
        return this.weight -= 2
    }

    ageUp(){
        this.age ++
        this.height ++
        this.weight += 3
        this.mood -= 2
        return this.bankAccount += 10
    }
    
    buyHamster(hamster){
        this.hamster.push(hamster)
        this.mood += 10
        this.bankAccount - hamster.getPrice()
    }
    
}


const Timmy = new Person('Timmy',5,'43cm','50lb',6,false,100)
console.log(Timmy)

