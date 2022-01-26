type Data = string | null | Symbol | number;

// 조건 식을 만족하면 해당 타입으로 반환해준다.
// never : 절대 일어나서는 안될 타입
// 보통 합치는 연산을 할 때 빼는 역할을 한다.

type Exclude1<A, B> = A extends B ? never : A;

// Union 단위로 하나씩 비교연산한다.
// A를 풀어서 B 전체와 비교
// string extends string|null? => 맞으므로 never

type Excluded = Exclude1<Data, string | null>;

type CustomExtract<T, U> = T extends U ? T : never;
// 공통된 타입만 추출한다.
type Extracted = CustomExtract<Data, string | null | { hello: string }>;

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;
// never being removed from typescript

type FuncTypeUnion = ((a: string) => Array<number>) | "hello" | 4;
type MyType2 = Exclude1<
  FuncTypeUnion,
  ((a: string) => Array<number>) | "hello"
>;
