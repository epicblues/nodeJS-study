# ES6

## Switching values of variables;

```javascript
let a = 10,
  b = 20;
[a, b] = [b, a];
// Since Operating Orders are started from right of the equal;
// right array evaulated first, changing variable to real value;
// then destructuring array starts assigning values corresponding each index
```

## Array.prototype.slice 대체 연산

```javascript
const originalArr = [1, 2, 3, 4, 5];
// 네 번째 요소 부터 배열로 가져오기
const [one, two, three, ...newArr] = originalArr;

// newArr = [4,5];
```

## Getter/Setter

```javascript
// javascript에서 Getter와 Setter를 사용하여 property를 제어하고자 하면
// 해당 property의 속성명 앞에 _를 붙이는 게 관습이다.
// getter setter와 같은 속성을 사용할 경우 재귀적으로 호출된다.

class Thermo {
  constructor(temperature) {
    this._temperature = temperature;
  }

  get temperature() {
    return this._temperature;
  }

  set temperature(temperature) {
    this._temperature = temperature;
  }
}
```

## Module Export

```javascript
export const add = (x, y) => {
  return x + y;
};
// The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
  return x + y;
};

export { add };
```

## Export default

- Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const
- 즉, 표현식만 가능하다

## Regex

- | : 한 정규표현식에서 여러 패턴을 찾고싶을 때

```javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // 적극적으로 사용하자.
let result = petRegex.test(petString);
```

```javascript
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]$|^[a-z]\d\d+$|^[a-z][a-z]+\d*$/i; // | 연산자 활용 case
let result = userCheck.test(username);
```

- //i : ignorecase, 대/소분자 구별 없이 검색하고 싶을때

```javascript
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);
```

- String.prototype.match
- 정규표현식을 만족하는 문자열 '배열'을 반환한다색

```javascript
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); //
```

- g : 패턴 검색을 끝까지 한다. 검색된 패턴 이후에도 다시 나머지 문자열로 패턴 검색
- . : wildcard
- - : 해당 문자 1개 이상
- - : 해당 문자 0개 이상

* In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

- ? : lazy matching(먼저 패턴에 속하는 것을 찾으면 그것을 return하고 새로운 패턴을 찾는다.)
- 개수와 관련된 연산자 뒤에 붙는다는 것이 기존의 ?와의 차이

```javascript
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```

- \w : [a-zA-Z0-9_] shorthand character classes(alphanumeric)
  - alphanumeric 에 '\_'가 들어가는 것을 유의하자
- \W : [^a-za-z0-9_]
- \s : [ \r\n\t\f\v] matches whitespace
- \S : [^ \r\n\t\f\v] non-whitespace matches
- ? : character 뒤에 붙으면 {0,1}과 같은 효과

* There are two kinds of lookaheads: positive lookahead and negative lookahead.

  - 핵심은 lookahead한 패턴은 매칭 결과물로 내보내지는 않는 것(조건만 확인한다)

  - A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

  - On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
  - 주로 Regex.prototype.test에서 쓰인다. (여러 패턴을 점검하고자 할 때 and 조건이라 보면 될 듯)

* LookBehind : (?<=...) negative (?<!...) positive (대상의 앞의 패턴 점검)

```javascript
const replacer = (str) => {
  const matcher = /(?<=.).(?=.)/g;
  // "rlaalsdfsdf" => "r**********f"
  console.log(str.match(matcher));
  return str.replace(matcher, "*");
};
```

```javascript
function spinalCase(str) {
  const strArr = str.split(/\s|(?<=[a-z])(?=[A-Z])|_/g);
  // split 충족 대상을 제거하고 싶지 않을 때는 LookBehind와 Lookup을 사용한다.
  // 즉 "" 도 정규표현식이 조건만 만족하면 돌려낼 수 있다.
  const lowerArr = strArr.map((str) => str.toLowerCase());
  return lowerArr.join("-");
}
// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
// spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
```

```javascript
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=.*\d{2}.*)/;
// 6글자 이상 && 연속적인 2숫자가 들어가 있는 패턴
// 괄호가 끝나면 다시 그 시점으로 돌아가서 점검한다고 보면 될 듯?
let result = pwRegex.test(sampleWord);
```

- () : Group Capturing
  - 캡처한 순서에 따라서 \1,\2,\3 등 변수로 접근할 수 있다.
  - 처음에 캡처한 것을 임시 변수에 저장해 놓기 때문에(같은 value 취급)
  - 동적으로 접근 가능

```javascript
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // 이 때 \1은 42를 의미하게 된다.
let result = reRegex.test(repeatNum);
```

- String.prototype.replace
  - pattern에 맞는 것을 replace 가능
  - 그룹으로 capturing한 것을 두 번째 변수에서 $1, $2 등으로 접근 가능

```javascript
let str = "one two three";
let fixRegex = /(one) (two) (three)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
```

## Object

### key in object

- prototype property랑 인스턴스 고유의 property 구분 없이 획득

```javascript
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  return (
    "Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj
  ); // Only change code above this line
}

console.log(isEveryoneHere(users));
```

### for (const key in object)

- 이때 value에 접근하기 위해서는 []접근을 해야한다. key가 변수(상수 문자 리터럴이 아니다)이기 때문이다.
- 나 : .연산자로 접근하려 했다.

### Object.prototype.hasOwnProperty(key)

- 인스턴스 고유의 프로퍼티인지 확인

```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];

for (let key in beagle) {
  if (beagle.hasOwnProperty(key)) {
    ownProps.push(key);
  } else {
    prototypeProps.push(key);
  }
}
```

### Remember to Set the Constructor Property when Changing the Prototype

### Object.prototype.isPrototypeOf(instance)

- 해당 객체가 instance의 prototype인지 판별한다.

### Object.create(obj)

- creates a new object, and sets obj as the new object's prototype.

### Public Property

- property that can be accessed and defined outside of object's definition

### IIFE(Immediately Invoked Function Expression)

- 선언되자 마자 바로 실행되는 익명 함수
- 관련 있는 기능을 모아 놓은 모듈을(Group Related Functionality) 만들 때도 쓰인다.
- 모듈 사용 이유 : 코드 재사용성.

## functional Programming

- One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

### Mutation : Changing or Altering Things

### Side Effect : Outcome of mutation

### Dependency explicit

- Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

### String.prototype.split()

- 주의점 : split조건을 만족하면 빈 요소라도 반환한다.

```javascript
function urlSlug(title) {
  return title.trim().toLowerCase().split(/\s/).join("-");
  // 공백이 연속될 경우 공백 사이의 ''를 배열의 요소로 반환한다.
}
```

### function arity

- The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

```javascript
function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z; //final statement
    };
  };
}
const addArrowFuncCurried = (x) => (y) => (z) => x + y + z;

function unCurried(x, y, z) {
  return x + y + z;
}
add(10)(20)(30);
```

### String.prototype.replace

- 정규표현식에 g flag를 넣지 않는 이상 일치하는 패턴을 찾으면
- 그것을 바꾸고 더 이상 반복하지 않는다.

### String.prototype.charCodeAt();

- 해당 문자열의 charCode를 반환한다.

### String.fromCharCode(number);

- 해당 숫자와 chacode가 일치하는 문자열을 반환한다.

### break 문 labeling

- 특정 코드 블록으로 이동시키는 것이 아니라
- 단순히 해당 label이 되어 있는 for 문을 탈출시키는 역할

### loop시 const 선언 주의

- 변수의 값 자체를 바꾸어야 할 때는 let을 선언해야 한다.
- 자주 하는 실수 : const 선언한 배열을 concat 등을 통해 새로운 배열에 할당

```javascript
function steamrollArray(arr) {
  if (!Array.isArray(arr)) return [arr];
  let answer = []; // const로 사용해서 오답
  for (let item of arr) {
    answer = [...answer, ...steamrollArray(item)];
  }
  return answer;
}
steamrollArray([1, [2], [3, [[4]]]]);
```

### 함수의 arguments, this

- 화살표 함수가 아닌 일반 함수 표현식에서만 사용 가능
- 상위 스코프의 arguments, this를 덮어 쓰기 때문에
- 상위 스코프의 arguments, this를 사용하고 싶으면
- 따로 변수에 저장해서 전달하거나 화살표 함수를 사용해야 한다.

```javascript
function addTogether() {
  if (![...arguments].every((arg) => typeof arg === "number")) return undefined;
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  }

  return (arg) => {
    if (typeof arg !== "number") return undefined;
    return arguments[0] + arg; // arguments 바인딩이 없으므로 상위 스코프의 arguments를 참조한다.
  };
}

addTogether(2, 3);
```

### 스코프 클로저 활용 예시

```javascript
const Person = function (firstAndLast) {
  // constructor 스코프 위에서 함수가 만들어지므로
  // 상위 스코프의 parameter인 firstAndLast를 기억할 수 있다.
  // 외부에서 직접 접근해서 제어할 수 없게 된다.
  this.getFullName = function () {
    return firstAndLast;
  };
  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };
  this.setFirstName = function (first) {
    firstAndLast = firstAndLast.replace(/^\w+/, first);
  };
  this.setLastName = function (last) {
    firstAndLast = firstAndLast.replace(/\w+$/, last);
  };
  this.setFullName = function (newFirstAndLast) {
    firstAndLast = newFirstAndLast;
  };
};

const bob = new Person("Bob Ross");
bob.getFullName();
```

### Array.prototype.findIndex(callback)

- Array.prototype.indexOf와 다르게 특정 조건을 가진 아이템의
- index를 찾을 때 사용한다.
- Array.prototpye.indexOf는 값을 비교한다(reference 아님)

### 시간 오래 걸린 문제(재귀 상황 잘못 구현)

## 소수점 계산 시 의도되지 않은 오류 가능성

- Number.prototype.toFixed()로 자릿수 제한
- 문자열을 반환하므로 +나 ParseInt() 등으로 Casting 필요

```javascript
function checkCashRegister(price, cash, cid) {
  const total = cid.reduce((prev, curr) => {
    return +(prev + curr[1]).toFixed(2);
  }, 0);

  const amount = +(cash - price).toFixed(2);

  if (total === amount) return { status: "CLOSED", change: cid };
  if (total < amount) return { status: "INSUFFICIENT_FUNDS", change: [] };
  // 현재 상황 total > amount;

  for (let i = cid.length - 1; i >= 0; i--) {
    const maxCurVal = cid[i][1];
    if (maxCurVal === 0) continue;
    const unit = mapper[cid[i][0]];
    if (unit > amount) continue;
    // 사실 상의 base case
    // amount를 계속 줄여서 적합한 인자를 찾는다.
    if (unit === amount)
      return {
        status: "OPEN",
        change: [[cid[i][0], unit]],
      };
    const newCid = [];
    for (let tuple of cid) {
      newCid.push([...tuple]);
    }
    newCid[i][1] = +(newCid[i][1] - unit).toFixed(2);
    const result = checkCashRegister(+(price + unit).toFixed(2), cash, newCid); // 내가 빠진 상태로 준비해봐

    if (result.status === "INSUFFICIENT_FUNDS") continue;
    if (result.status === "OPEN") {
      const index = result.change.findIndex((val) => val[0] === cid[i][0]);
      // 축소시킨 문제를 다시 확장.
      if (index === -1) {
        result.change.push([cid[i][0], unit]);
        result.change.sort((a, b) => mapper[b[0]] - mapper[a[0]]);
      } else
        result.change[index][1] = +(result.change[index][1] + unit).toFixed(2);
      return {
        status: "OPEN",
        change: result.change,
      };
    }
  }

  return { status: "INSUFFICIENT_FUNDS", change: [] };
}

const mapper = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
```
