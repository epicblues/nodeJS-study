// InstanceType<T> => 해당 클래스 타입. 보통 생성자 함수가 반환하는 타입?

// extends 기능 : 제네릭의 범위를 제한시킨다.
function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  // 익명 클래스를 이름 없이 선언할 수 있다.
  return class extends Base {
    // mixed in class
    public deleted: boolean = false;
    delete() {}
  };
}

// helper type
type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string) {}
}

type CarInstanceType = InstanceType<typeof Car>; // Car
// 사실상 Car랑 다를 것이 없기 떄문에 의미가 없다.

// Mixed in pattern에서 유용하다.
// Mixed in pattern으로 만든 클래스의 인스턴스 타입을 규정할 때
// Mixed in pattern으로 만든 클래스는 변수로 취급되기 때문이다.(type이 아니다.)

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);
// 변수로 할당되었기 때문에 Type 유형으로 들어가지 않는다.
// 타입이 이나리 변수다
// 따라서 typeof 연산자로 해당 변수의 type을  가져와야 한다.

const car = new DeletableCar("baka");
const user = new (Deletable(User))("bakuuser");

class Profile {
  constructor(
    // InstanceType으로 Mixed In class의 인스턴스 타입을 가져올 수 있다.
    public user: InstanceType<typeof DeletableUser>,
    public car: InstanceType<typeof DeletableCar>
  ) {}
}

const myProfile = new Profile(user, car);
