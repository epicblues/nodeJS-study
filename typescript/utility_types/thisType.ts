// ThisType<T>

// this에 들어갈 type을 정의한다.
// this의 구체적인 Context를 나중에 정의하고 싶을 때 사용한다.

interface MyObject {
  sayHello(): void;
}

interface MyObjectThis {
  helloWorld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
  sayHello() {
    return this.helloWorld();
  },
};

// 아직 아무것도 정의하지 않았다.

// this를 직접 정의한다.
myObject.sayHello = myObject.sayHello.bind({
  helloWorld() {
    return "hello world!";
  },
});

console.log(myObject.sayHello());

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // 메서드 안의 'this 타입은 D & M 입니다.
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // thistype 때문에 this.data.x.가 아니다!!!!!!!!!!
      // typescirpt가 자동으로 this 타입을 추론한다.
      this.y += dy; // 미리 만들어질 객체의 type을 예상하고 정의해서 가능한 것
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
