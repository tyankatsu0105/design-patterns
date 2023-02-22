export {};

interface Page {
  getContent(): string;
}

interface Theme {
  getColor(): string;
}

class About implements Page {
  constructor(private theme: Theme) {}

  getContent() {
    return `About page in ${this.theme.getColor()}`;
  }
}

class Careers implements Page {
  constructor(private theme: Theme) {}

  getContent() {
    return `Careers page in ${this.theme.getColor()}`;
  }
}

class DarkTheme implements Theme {
  getColor() {
    return "Dark Black";
  }
}
class LightTheme implements Theme {
  getColor() {
    return "Off white";
  }
}
class AquaTheme implements Theme {
  getColor() {
    return "Light blue";
  }
}

const darkTheme = new DarkTheme();
const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent());
console.log(careers.getContent());
