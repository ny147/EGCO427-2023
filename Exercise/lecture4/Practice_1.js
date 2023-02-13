class Jedi{

    constructor (){
      this.forceIsDark = false;
    }

    force(){
      return (this.forceIsDark ? 'Join' : "Fear is the path to") + ' the dark side'
    }

    say(){
      return (this.forceIsDark ? 'Yes, Master' : "Hello ,OBI")
    }

//   force(){
//     return this.toString()
//   }
}

class Sith extends Jedi{
    constructor(){
      super()
      this.forceIsDark = true;
    }
}

let yoda = new Jedi()
let darth = new Sith()


console.log(yoda.say())
console.log(darth.say())

console.log(yoda.forceIsDark)
console.log(darth.forceIsDark)

console.log(yoda.force())
console.log(darth.force())