const foo = function () {
  console.dir(this);
};

// 일반 함수 호출
foo(); // Strict Mode로 간주하므로 undefined

const obj = { foo };

// 메서드 호출
obj.foo();

// 생성자 함수 호출
new foo();

const bar = { name: "bar" };

foo.call(bar);
foo.apply(bar);
foo.bind(process.argv)();
