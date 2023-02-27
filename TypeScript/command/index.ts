export {};

/**
 * Receiver
 */
class Bulb {
  turnOn() {
    console.log("Bulb has been lit");
  }

  turnOff() {
    console.log("Darkness!");
  }
}

interface Command {
  execute(): void;
  undo(): void;
  redo(): void;
}

class TurnOnCommand implements Command {
  constructor(private bulb: Bulb) {}

  execute() {
    this.bulb.turnOn();
  }

  undo() {
    this.bulb.turnOff();
  }

  redo() {
    this.execute();
  }
}

class TurnOffCommand implements Command {
  constructor(private bulb: Bulb) {}

  execute() {
    this.bulb.turnOff();
  }

  undo() {
    this.bulb.turnOn();
  }

  redo() {
    this.execute();
  }
}

/**
 * Invoker
 */
class RemoteControl {
  submit(command: Command) {
    command.execute();
  }
}

const bulb = new Bulb();
// recieverにcommandを実行させる
const turnOn = new TurnOnCommand(bulb);
const turnOff = new TurnOffCommand(bulb);

// invokerのメソッドをクライアントで利用する
const remote = new RemoteControl();

// invokerのメソッドを実行することで、recieverのcommandの実行が可能になる
remote.submit(turnOn);
remote.submit(turnOff);
