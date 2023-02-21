class Computer {
  getElectricShock() {
    console.log("Ouch!");
  }

  makeSound() {
    console.log("Beep beep!");
  }

  showLoadingScreen() {
    console.log("Loading..");
  }

  bam() {
    console.log("Ready to be used!");
  }

  closeEverything() {
    console.log("Bup bup bup buzzzz!");
  }

  sooth() {
    console.log("Zzzzz");
  }

  pullCurrent() {
    console.log("Haaah!");
  }
}

class ComputerFacade {
  constructor(private computer: Computer) {}

  turnOn() {
    this.computer.getElectricShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }

  turnOff() {
    this.computer.closeEverything();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}

const computer = new ComputerFacade(new Computer());
computer.turnOn(); // Ouch! Beep beep! Loading.. Ready to be used!
computer.turnOff(); // Bup bup buzzz! Haah! Zzzzz
