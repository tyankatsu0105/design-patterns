export {};

/**
 * collague
 */
class User {
  constructor(private name: string, private chatMediator: ChatRoom) {}

  getName() {
    return this.name;
  }

  send(message: string) {
    this.chatMediator.showMessage(this, message);
  }
}

/**
 * Mediator
 */
class ChatRoom {
  showMessage(user: User, message: string) {
    const time = new Date();
    const sender = user.getName();

    console.log(`${time}[${sender}]: ${message}`);
  }
}

const mediator = new ChatRoom();

const john = new User("John Doe", mediator);
const jane = new User("Jane Doe", mediator);

// ChatRoomという中継者を介して、User同士がメッセージをやり取りする
john.send("Hi there!");
jane.send("Hey!");
