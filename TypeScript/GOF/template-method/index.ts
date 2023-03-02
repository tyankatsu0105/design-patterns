export {};

abstract class Builder {
  public test!: () => void;
  public lint!: () => void;
  public assemble!: () => void;
  public deploy!: () => void;

  build() {
    this.test();
    this.lint();
    this.assemble();
    this.deploy();
  }
}

class AndroidBuilder extends Builder {
  // 以下TS2425のために利用不可
  // https://github.com/microsoft/TypeScript/issues/27965
  // // @ts-ignore
  // test() {
  //   console.log("Running android tests");
  // }
  // // @ts-ignore
  // lint() {
  //   console.log("Linting the android code");
  // }
  // // @ts-ignore
  // assemble() {
  //   console.log("Assembling the android build");
  // }
  // // @ts-ignore
  // deploy() {
  //   console.log("Deploying android build to server");
  // }
}
AndroidBuilder.prototype.test = function () {
  console.log("Running android tests");
};
AndroidBuilder.prototype.lint = function () {
  console.log("Linting the android code");
};
AndroidBuilder.prototype.assemble = function () {
  console.log("Assembling the android build");
};
AndroidBuilder.prototype.deploy = function () {
  console.log("Deploying android build to server");
};

class IosBuilder extends Builder {
  // @ts-ignore
  // test() {
  //   console.log("Running ios tests");
  // }
  // // @ts-ignore
  // lint() {
  //   console.log("Linting the ios code");
  // }
  // // @ts-ignore
  // assemble() {
  //   console.log("Assembling the ios build");
  // }
  // // @ts-ignore
  // deploy() {
  //   console.log("Deploying ios build to server");
  // }
}

IosBuilder.prototype.test = function () {
  console.log("Running ios tests");
};
IosBuilder.prototype.lint = function () {
  console.log("Linting the ios code");
};
IosBuilder.prototype.assemble = function () {
  console.log("Assembling the ios build");
};
IosBuilder.prototype.deploy = function () {
  console.log("Deploying ios build to server");
};

const androidBuilder = new AndroidBuilder();
androidBuilder.build();

const iosBuilder = new IosBuilder();
iosBuilder.build();
