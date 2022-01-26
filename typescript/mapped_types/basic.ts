// iterating through props;

type Properties = "propA" | "propB" | 1 | 5;

type CopyType<T> = {
  [P in keyof T]: T[P];
};
// 이걸 가지고 type을 유동적으로 수정할 수 있다.

// interface에서는 불가능
// 순회 기준 : Union
type MyMappedType<T> = {
  [key in keyof T]: T[key] | null; // 키와 값 일치 관계
};

type MyMappedTypeNullale = MyMappedType<{ a: "A"; b: "B" }>;

type ReadOnlyType<T> = {
  readonly [key in keyof T]: T[key];
};

// T property U에 포함되는 것만 골라 온다.
type MyPick<T, U extends string | number | symbol> = {
  [P in Extract<keyof T, U>]: T[P];
};

type Picked = MyPick<{ a: string; b: string }, "a" | "c">;

type MyOmit<T, U> = {
  [P in Exclude<keyof T, U>]: T[P];
};

type Omitted = MyOmit<{ a: string; b: string }, "b" | 1>;

// keyof any = string|number|symbol
type MyRecord<K extends keyof any, V> = {
  // K가 리터럴이 아닌 타입으로 들어오면 프로퍼티 값을 기준으로 하는 것이 아닌 것 같다.
  [P in K]: V;
};

type NumberToString = MyRecord<number, string>;

const myObj: MyRecord<number | string, string> = {
  4: "",
};

// Interface의 index 시그니처로는 union으로 들어올 수 없다.

interface Record2 {
  [k: number]: number;
}

let asdf: Record2 = {
  4: 1,
  5: 4,
};
