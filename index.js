// Your code here
class Cat {
    constructor(Sasha) {
        this.name = Sasha;
    }

    speak() {
        return `${this.name} says meow!`;
    }
}
  
  class Dog {
    constructor(Rex) {
        this.name = Rex;
    }
    speak() {
        return `${this.name} says woof!`
    }
  }
  
  class Bird {
    constructor(Birdy, Pedro) {
        this.name = Birdy;
        this.isMale = Pedro;
    }
    speak() {
            if (this.isMale) {
                return `It's me! ${this.name}, the parrot!`;
            } else {
                return `${this.isMale} says squawk!`;
            }
        }
          /*  constructor(Parrot, Birdy) {
                this.isMale = Parrot;
                this.name = Birdy;
        
            }
            speak() {
                return ` It's me! ${this.isMale}, the parrot!`
            }
            speak() {
                return `${this.name} says squawk!`
            }*/
    }
