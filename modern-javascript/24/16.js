function Person(name, age) {
  this.name = name;
  const _age = age;

  const getAge = () => _age;

  this.getAge = getAge;
  // 원래는 Person 함수 컨텍스트가 사라지면 같이 사라졌어야 할 _age가 getAge로 계속 참조되어
  // 자유변수가 되었다.
}

const KMS = new Person("Minsung", 30);
const KMG = new Person("Mingyun", 28);

console.log(KMS.getAge());
console.log(KMG.getAge());
