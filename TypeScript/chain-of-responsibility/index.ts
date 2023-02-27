export {};

class Account {
  protected balance: number;
  protected name: string;
  protected successor: Account;

  setNext(account: Account) {
    this.successor = account;
  }

  pay(amountToPay: number) {
    if (this.canPay(amountToPay)) {
      console.log(`Paid ${amountToPay} using ${this.name}`);
      return;
    }

    if (this.successor) {
      console.log(`Cannot pay using ${this.name}. Proceeding...`);
      this.successor.pay(amountToPay);
      return;
    }

    console.log("None of the accounts have enough balance");
  }

  canPay(amount: number) {
    return this.balance >= amount;
  }
}

class Bank extends Account {
  constructor(balance: number) {
    super();
    this.name = "bank";
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance: number) {
    super();
    this.name = "Paypal";
    this.balance = balance;
  }
}

class Bitcoin extends Account {
  constructor(balance: number) {
    super();
    this.name = "bitcoin";
    this.balance = balance;
  }
}

const bank = new Bank(100);
const paypal = new Paypal(200);
const bitcoin = new Bitcoin(300);

bank.setNext(paypal);
paypal.setNext(bitcoin);

bank.pay(259);
// bankは259払えないから、次のpaylapに移動
// paylapは259払えないから、次のbitcoinに移動
// bitcoinは259払えるから、259をbitcoinで払う
