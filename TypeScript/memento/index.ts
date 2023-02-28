export {};

class EditorMemento {
  constructor(private content: string = "") {}

  getContent() {
    return this.content;
  }
}

class Editor {
  constructor(private content: string = "") {}

  type(words: string) {
    this.content += ` ${words}`;
  }

  getContent() {
    return this.content;
  }

  save() {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento) {
    this.content = memento.getContent();
  }
}

const editor = new Editor();

editor.type("This is the first sentence.");
editor.type("This is second.");

const saved = editor.save();

// saveした跡にtypeしても、ここは保存されない
editor.type("And this is third.");

console.log(editor.getContent());

editor.restore(saved);

// saveした状態のcontentが表示される
console.log(editor.getContent());
