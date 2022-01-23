// Partial <T>
// 모든 property를 optional로 만든다.

interface A {
  x: number;
  y: number;
}

type partialA = Partial<A>;
// x : number | undefined;

// Required
// Optinal 속성을 필수 속성으로 바꾼다.

interface B {
  x?: number;
  y?: number;
}

type RequiredB = Required<B>;
// x : number;

// Record<K,V>
// 특정 객체의 key와 value의 타입을 결정한다.
type RecordType = Record<symbol, Array<number>>;

const a: RecordType = { [Symbol("hello")]: [1, 2, 3, 4] };

//

// Pick<T, P>
// 해당 타입의 특정 프로퍼티들만 가져와서 새로운 타입을 만든다.

interface C {
  a: number;
  b: string;
  c: Buffer;
}

type PickedC = Pick<C, "a" | "b">;
// a와 b 프로퍼티를 필수적으로 가져와야 한다.

const c: PickedC = { a: 4, b: "baka" };

//  Omit<T,P>
// 해당 P 프로퍼티를 제외한 나머지 프로퍼티로 새로운 타입을 만든다.
type OmittedC = Omit<C, "c">;
const omittedC: OmittedC = {
  a: 12,
  b: "baka",
};

// Type의 Union 관련(interface의 Property와는 다르다.)

// Exclude : Union 타입의 구성원 타입을 제거한다.
type Unioned = Buffer | Array<number> | number | ((a: number) => null) | "baku";
type UnionExcluded = Exclude<Unioned, "baku" | Buffer>;

const excluded: UnionExcluded = (c: number) => {
  return null;
};

// Extract : Union Type에서 공통된 부분만 추출한다.
type UnionExtracted = Extract<
  Unioned,
  "baku" | number | Buffer | (() => string)
>;
const extacted: UnionExtracted = "baku";

// NonNullable : 해당 type의 null | undefined union type을 제거한다.
type Nullish = number | null | undefined;
const notNullish: NonNullable<Nullish> = 4;
