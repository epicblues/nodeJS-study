var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("Foo's This :", this);
    setInterval(function () {
      console.log("Callback's This : ", this);
      // NodeJs와 브라우저에서 던져주는 callback이 다르다.
      // Nodejs는 this가 바인딩되지 않았을 경우 this를 timer로 바인딩해서 호출한다.
      // 브라우저는 일반적인 함수처럼 호출해서 this가 전역 객체를 참조한다.
      console.log("Callback's Value : ", this.value);
    }, 2000);
  },
};

obj.foo();
