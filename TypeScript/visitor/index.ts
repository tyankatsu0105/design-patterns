export {};

type AnimalOperation = {
  visitMonkey(monkey: Monkey): void;
  visitLion(lion: Lion): void;
  visitDolphin(dolphin: Dolphin): void;
};

interface Animal {
  accept(operation: AnimalOperation): void;
}

class Monkey implements Animal {
  shout() {
    console.log("Ooh oo aa aa!");
  }

  accept(operation: AnimalOperation) {
    operation.visitMonkey(this);
  }
}

class Lion implements Animal {
  roar() {
    console.log("Roaaar!");
  }

  accept(operation: AnimalOperation) {
    operation.visitLion(this);
  }
}

class Dolphin implements Animal {
  speak() {
    console.log("Tuut tuttu tuutt!");
  }

  accept(operation: AnimalOperation) {
    operation.visitDolphin(this);
  }
}

const speak: AnimalOperation = {
  visitMonkey(monkey) {
    monkey.shout();
  },
  visitLion(lion) {
    lion.roar();
  },
  visitDolphin(dolphin) {
    dolphin.speak();
  },
};

const jump: AnimalOperation = {
  visitMonkey(monkey) {
    console.log("Jumped 20 feet high! on to the tree!");
  },
  visitLion(lion) {
    console.log("Jumped 7 feet! Back on the ground!");
  },
  visitDolphin(dolphin) {
    console.log("Walked on water a little and disappeared");
  },
};

const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

monkey.accept(speak);
monkey.accept(jump);

lion.accept(speak);
lion.accept(jump);

dolphin.accept(speak);
dolphin.accept(jump);
