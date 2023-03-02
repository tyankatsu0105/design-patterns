export {};

class WoodenDoor {
  getDescription() {
    console.log("I am a wooden door");
  }
}

class IronDoor {
  getDescription() {
    console.log("I am an iron door");
  }
}

class Welder {
  getDescription() {
    console.log("I can only fit iron doors");
  }
}

class Carpenter {
  getDescription() {
    console.log("I can only fit wooden doors");
  }
}

class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }

  makeFittingExpert() {
    return new Carpenter();
  }
}

class IronDoorFactory {
  makeDoor() {
    return new IronDoor();
  }

  makeFittingExpert() {
    return new Welder();
  }
}

const woodenFactory = new WoodenDoorFactory();

const door = woodenFactory.makeDoor();
const expert = woodenFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();

// const ironFactory = new IronDoorFactory()

// const door = ironFactory.makeDoor()
// const expert = ironFactory.makeFittingExpert()

// door.getDescription()
// expert.getDescription()
