class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    /*this.name = name;*/ super(name); //That’s because the child constructor must call super().
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // ok now
console.log(rabbit.name); // White Rabbit
