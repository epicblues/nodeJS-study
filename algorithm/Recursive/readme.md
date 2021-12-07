# Recursive Programming

## 장점 : 복잡한 for문 등의 반복문을 사용하지 않고 간결하게 표시.

## 단점 : Call Stack 문제, 함수 호출 속도 문제(반복문보다 느리다.)

## 핵심

- whats the smallest amount of work I can do in each iteration?
- suppose that I'm laziest person

### ex1) String 뒤집기

```javascript
const stringReverse = (target) => {
  if (target.length === 0) return ""; // base case

  const slicedTarget = target.substring(1); // shrink problem space
  const firstChar = target.charAt(0); // smallest unit of work to contribute
  return stringReverse(slicedTarget) + firstChar;
};
```

### ex2) 2진법 구하기

```javascript
const decimalToBinary = (decimal) => {
  if (decimal === 1 || decimal === 0) {
    return String(decimal); // base case(가장 첫 번째 자리수)
  }
  // 2로 나누었을 때 떨어지면 0
  // 2로 나누었을 때 1이 남으면 1
  const share = Math.floor(decimal / 2);
  const remainder = Math.ceil(decimal / 2) - share;
  return decimalToBinary(Math.floor(decimal / 2)) + remainder;
};
```
