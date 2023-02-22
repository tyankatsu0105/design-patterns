export {};

class Burger {
  constructor(
    public size: number,
    public cheeze: boolean = false,
    public pepperoni: boolean = false,
    public lettuce: boolean = false,
    public tomato: boolean = false
  ) {}
}

class BurgerBuilder {
  private burger: Burger;
  constructor(private size: Burger["size"]) {
    this.burger = new Burger(size);
  }

  addPepperoni() {
    this.burger.pepperoni = true;
    return this;
  }

  addLettuce() {
    this.burger.lettuce = true;
    return this;
  }

  addCheeze() {
    this.burger.cheeze = true;
    return this;
  }

  addTomato() {
    this.burger.tomato = true;
    return this;
  }

  build() {
    return this.burger;
  }
}

const b = new BurgerBuilder(14).addPepperoni().build();
console.log({ b });
