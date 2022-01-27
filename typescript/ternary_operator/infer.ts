type InferSomething<T> = T extends infer U ? U : any;

type InferredType = InferSomething<"I am a string">;

// 어떤 타입이 될 것이라 추측하고 그 추측된 타입 값을 연산에 활용할 수 있다.
type InferSomething2<T> = T extends { a: infer A; b: infer B } ? A & B : T;

type InfereedType2 = InferSomething2<{
  a: { someAprop: boolean };
  b: { someBprop: Array<number> };
}>;

const newType2obj: InfereedType2 = {
  someAprop: false,
  someBprop: [1, 2, 3, 4, 5],
};

// 활용 버전 ReturnType

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

const myFunction = (a: number, b: number) => a + b;

const myFunctionReturnType: MyReturnType<typeof myFunction> = 4;

type MyInstanceType<T> = T extends new (...args: any[]) => infer R ? R : any;

class MyClass {
  constructor(public a: string) {}
}

// MyClass는 타입이 아니라 함수 선언 변수이기 때문에 typeof 연산자로 타입으로 만들어야 한다.
type MyClassType = MyInstanceType<typeof MyClass>;

// 나만의 데코레이터 만들어보기
type ConstructorType<T> = new (...args: any[]) => T;

function myClassDecorator<T extends ConstructorType<{}>>(targetClass: T) {
  // {}는 모든 객체 타입의 조상?
  // any를 강제적으로 요구하는 조건 사라짐
  return class extends targetClass {
    connected: boolean = false;
    setConnected(settingBoolean: boolean) {
      this.connected = settingBoolean;
    }
    constructor(...args: any[]) {
      super(...args);
    }
  };
}

const DecoratedClass = myClassDecorator(MyClass);
const x = new DecoratedClass("bakbo");
const testStr = x.connected;

class MyClass2 {
  constructor(public myArr: number[]) {}
}
const DecoratedClass2 = myClassDecorator(MyClass2);

const y = new DecoratedClass2([1, 2, 3, 4, 5]);
