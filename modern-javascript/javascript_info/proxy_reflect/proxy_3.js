let map = new Map();
// 몇몇 자바스크립트 빌트인 객체에는 고유의 내부 공간(internal slot)이 존재한다.
// map의 경우 [[MapData]]에 정보들을 저장하고 , get, set메서드 등을 통해서 해당 고유 공간에 접근한다.
// proxy는 내부 공간에 접근할 수 있는 방법이 없다.

// let map = new Map();

// let proxy = new Proxy(map, {});

// 그냥 접근할 경우 this가 proxy가 되어서 map.prototype.set은 proxy.[[MapData]]를 호출할 수 없어서 에러 던짐
// proxy는 map을 상속받고 있지 않기 때문이다
// proxy.set('test', 1); // Error

let proxy = new Proxy(map, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments);
    // map.prototype.set을 가져온다.
    return typeof value == "function" ? value.bind(target) : value;
    // map.prototype.set 의 this를 proxy가 아닌 원본 map 객체에 연결하고 그것을 return 한다.
  },
});

// 원본 객체가 this 바인딩 된 map.prototype.get / set 메서드 호출
proxy.set("test", 1);
alert(proxy.get("test"));
