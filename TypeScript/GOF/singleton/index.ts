export {};

const president = (() => {
  const presidentsPrivateInformation = "Super private";

  const name = "Turd Sandwich";

  const getName = () => name;

  return {
    getName,
  };
})();

console.log(president.getName());
