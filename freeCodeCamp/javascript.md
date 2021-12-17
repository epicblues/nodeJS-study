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
- 정규표현식을 만족하는 문자열 '배열'을 반환한다.

```javascript
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); //
```

- g : 패턴 검색을 끝까지 한다.(일반적으로는 한 번 검색되면 검색을 멈춘다.)
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
let reRegex = /^(\d+) \1 \1$/;
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
