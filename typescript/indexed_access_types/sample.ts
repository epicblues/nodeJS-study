import { User } from "./User";

type City = User["address"]["city"];

type IdOrName = User["id" | "name"];
// property key를 Union으로 사용할 수 있다.

type UserAddress = User["address"];

const updateAddress = (id: User["id"], newAddress: UserAddress) => {};

type UserProperties = keyof User; // User의 key값들의 union 형태;
// "address","id","name"

const myProps: UserProperties = "address";

// key를 string으로 선언하면 typescript에서 거부한다.
// 해당 object는 기본적을 unknown인데 거기에 어떤 key가 있는지 알 수 없기 때문이다.
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let user: User = {
  name: "john Doe",
  id: 49,
  address: {
    city: "seoul",
    country: "Korea",
    street: "baka",
  },
};

console.log(getProperty(user, "address"));

// document.addEventListener("click", (e) => {}); // typescript의 타입 추론 : e : MouseEvent;

interface MyMouseEvent {
  x: number;
  y: number;
}

interface MyKeyboardEvent {
  key: string;
}

interface MyEventObjects {
  // 이벤트를 특정 이벤트 객체로 mapping 한다.
  click: MyMouseEvent;
  keypress: MyKeyboardEvent;
}

const customAddEventListener = <K extends keyof MyEventObjects>(
  eventName: K,
  callback: (e: MyEventObjects[K]) => void // intersection : MyMouseEvent & MyKeyboardEvent
) => {
  if (eventName === "click") {
    callback({ x: 1, y: 4 } as MyEventObjects[K]); // TS가 narrow를 하지 못하므로 assertion 해야 한다.
  } else if (eventName === "keypress") {
    callback({ key: "bkaj" } as MyEventObjects[K]);
  } else {
    throw new Error("baka");
  }
};

customAddEventListener("click", (e) => {
  console.log(e.x);
});

type MyEvents = MyEventObjects[keyof MyEventObjects];
