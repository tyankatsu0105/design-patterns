export {};

class Sheep {
  constructor(
    public name: string,
    public category: string = "Mountain Sheep"
  ) {}

  setName(name: ConstructorParameters<typeof Sheep>[0]) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }

  setCategory(category: NonNullable<ConstructorParameters<typeof Sheep>[1]>) {
    this.category = category;
  }

  getCategory() {
    console.log(this.category);
  }
}

class SheepPrototype {
  private proto: Sheep;
  constructor(proto: Sheep) {
    this.proto = proto;
  }

  clone() {
    return new Sheep(this.proto.name, this.proto.category);
  }
}

const originalSheep = new Sheep("Jolly");
originalSheep.getName();
originalSheep.getCategory();

const prototype = new SheepPrototype(originalSheep);
const clonedSheep = prototype.clone();
clonedSheep.getName();
clonedSheep.setName("Dolly");
clonedSheep.getName();
clonedSheep.getCategory();

// JS case
// https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/Object_prototypes
const prototype2: Sheep = Object.create(originalSheep);
prototype2.getName();
