// 특정 원소가 속한 집합을 찾기

const findParent = (parent, x) => {
  // 루트 노드가 아니라면, 루트 노드를 찾을 때 까지 재귀적으로 호출
  if (parent[x] !== x) {
    // 기존 풀이
    // x = findParent(parent, parent[x])

    // 경로 압축 기법
    // 부모 테이블을 바로 root node로
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
};

// 두 원소가 속한 집합을 합치기
const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  // 내가 잘못 생각 한 것 . parent 테이블은 루트 노드가 아닌 부모 노드를 저장한다.
  if (a > b) {
    parent[a] = b;
  } else {
    parent[b] = a;
  }
};

const input = "6 4\n1 4\n2 3\n2 4\n5 6";

const [meta, ...edgeStr] = input.split("\n");
const [v, e] = meta.split(" ").map(Number);
const parent = Array(v + 1)
  .fill()
  .map((item, index) => index); // 부모를 자기 자신으로 초기화
console.log(parent);
edgeStr.forEach((str) => {
  const [a, b] = str.split(" ").map(Number);
  console.log(a, b);
  unionParent(parent, a, b);
});

let setIds = [];
for (let i = 1; i <= v; i++) {
  setIds.push(findParent(parent, i));
}

console.log("각 원소가 속한 집합 : ", setIds.join(" "));
console.log("부모 테이블", parent.slice(1).join(" "));
