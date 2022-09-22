
const { beforeAll, beforeEach, afterAll } = require("jest-circus");
const { sum, subtract, multiply, divide } =require("./mat")

beforeAll(()=>{
  console.log("Before All Test");
})

describe("Functions", ()=>{

  beforeEach(()=>{
    console.log("Before Each Test");
  })
  


  it("should add two numbers", ()=>{
    expect(sum(2,3)).toBe(5);
  });

  it("should subtract two numbers", ()=>{
    expect(subtract(20, 15)).toBe(5);
  });

  it("should multiply two numbers", ()=>{
    expect(multiply(2,3)).toBe(6);
  });

  it("should divide two numbers", ()=>{
    expect(divide(200, 5)).toBe(40);
  });

  afterAll(()=>{
    console.log("After all")
  })
  afterEach(()=>{
    console.log("After Each")
  })

});







