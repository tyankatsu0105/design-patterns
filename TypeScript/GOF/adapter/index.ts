export {};

interface Lion {
  roar(): void;
}

class AfricanLion implements Lion {
  roar() {
    console.log("African Lion says: Roar");
  }
}

class AsianLion implements Lion {
  roar() {
    console.log("Asian Lion says: Roar");
  }
}

class Hunter {
  /**
   * roarメソッドが実装されている処理を期待している
   */
  hunt(lion: Lion) {
    lion.roar();
  }
}

interface Dog {
  bark(): void;
}

class WildDog implements Dog {
  bark() {
    console.log("Wild Dog says: Bark Bark");
  }
}

class WildDogAdapter {
  dog: Dog;
  constructor(dog: Dog) {
    this.dog = dog;
  }

  roar() {
    this.dog.bark();
  }
}

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();
/**
 * Lionではないが、roarを実装しているので、
 * huntメソッドを実行できる
 */
hunter.hunt(wildDogAdapter);
