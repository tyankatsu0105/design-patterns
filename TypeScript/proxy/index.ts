export {};

interface Door {
  open(): void;
  close(): void;
}

class LabDoor implements Door {
  open() {
    console.log("Opening lab door");
  }

  close() {
    console.log("Closing the lab door");
  }
}

type Password = "ecr@t" | (string & {});

class Security {
  constructor(private door: Door) {}

  open(password: Password) {
    if (this.authenticate(password)) {
      this.door.open();
      return;
    }

    console.log("Big no! It ain't possible.");
  }

  private authenticate(password: Password) {
    return password === "ecr@t";
  }

  close() {
    this.door.close();
  }
}

const door = new Security(new LabDoor());
door.open("invalid");

door.open("ecr@t");
door.close();
