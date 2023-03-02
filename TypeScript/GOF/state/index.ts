export {};

type Transform = (inputString: string) => string;

const upperCase: Transform = (inputString) => inputString.toUpperCase();
const lowerCase: Transform = (inputString) => inputString.toLowerCase();
const defaultTransform: Transform = (inputString) => inputString;

class TextEditor {
  constructor(private transform: Transform) {}

  setTransform(transform: Transform) {
    this.transform = transform;
  }

  type(words: string) {
    console.log(this.transform(words));
  }
}

const editor = new TextEditor(defaultTransform);

editor.type("First line");

editor.setTransform(upperCase);

editor.type("Second line");
editor.type("Third line");

editor.setTransform(lowerCase);

editor.type("Fourth line");
editor.type("Fifth line");
