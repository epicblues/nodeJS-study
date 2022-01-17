const str = "hello";

// 식별자 str은 암묵적으로 생성된 래퍼 객체를 가리킨다.
// 래퍼 객체에 name 프로퍼티가 동적 추가된다.

// str.name = "baka";

// 식별자 str는 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]]내부 슬롯에 할당된 원시값을 갖는다.
// 이때 위에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

try {
  console.log(str.name);
} catch (err) {
  console.log(err);
}

console.log(typeof str, str);

// 다시 식별자 str는 암묵적으로 래퍼 객체를 가리킨다.
// 이 래퍼 객체는 이전의 그것돠 다른 새로운 객체이므로 name 프로퍼티가 존재하지 않는다.

eval('console.log("hello world");console.log("kms baka")');
