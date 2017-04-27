import { default as leftpad } from "left-pad";

class Test {
  constructor() {
    this.variable = "Hello";
  }

  hi(){
    console.log( leftpad(1, 2, '0') );
  }
};

const test = new Test();

console.log('hello')


export default test;
