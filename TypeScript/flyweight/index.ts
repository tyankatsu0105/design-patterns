class KarakTea {
  constructor(public type: string) {}
}

class TeaMaker {
  constructor(private availableTea: Record<string, KarakTea> = {}) {}

  make(preference: string) {
    this.availableTea[preference] =
      this.availableTea[preference] || new KarakTea(preference);
    return this.availableTea[preference];
  }
}

class TeaShop {
  constructor(private teaMaker: TeaMaker, private orders: KarakTea[] = []) {}

  takeOrder(teaType: string, table: number) {
    this.orders[table] = this.teaMaker.make(teaType);
  }

  serve() {
    this.orders.forEach((order, index) => {
      console.log(`Serving tea(${order.type}) to table# ${index}`);
    });
  }
}

const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder("less sugar", 1);
shop.takeOrder("more milk", 2);
shop.takeOrder("without sugar", 5);

shop.serve();
