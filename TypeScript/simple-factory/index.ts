class WoodenDoor {
  constructor(private width: number, private height: number) {}

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}

const DoorFactory = {
  makeDoor: (width: number, height: number) => new WoodenDoor(width, height),
};

const door = DoorFactory.makeDoor(100, 200);
console.log("Width:", door.getWidth());
console.log("Height:", door.getHeight());
