import { lensProp, view, set } from "ramda";
import { Person } from "../functional-programming-js/model/Person";

const person = new Person("444-444-4444", "John", "Doe");
const lastnameLens = lensProp<Person, "lastname">("lastname");

console.log(view(lastnameLens, person)); // Doe getter

const newPerson = set(lastnameLens, "Smith", person);
console.log(newPerson.lastname); // Smith setter
console.log(person.lastname); // Doe
