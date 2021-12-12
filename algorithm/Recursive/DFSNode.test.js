const DFSNode = (function () {
  const prototype = {
    connect(node) {
      this.edges.push(node);
    },
  };

  return function (data) {
    this.edges = [];
    this.data = data;
    this.__proto__ = prototype;
  };
})();

DFSNode.traverse = function traverse(node, set = new Set()) {
  if (set.has(node.data)) return set; // 이미 순회한 node면 set에 추가하지 않는다.
  set.add(node.data);
  if (node.edges.length === 0) return set;
  for (let childNode of node.edges) {
    traverse(childNode, set);
  }
  return set;
};

const head = new DFSNode(1);
const $2 = new DFSNode(2);
const $3 = new DFSNode(3);
const $4 = new DFSNode(4);
const $5 = new DFSNode(5);
const $6 = new DFSNode(6);
const $7 = new DFSNode(7);
const $8 = new DFSNode(8);
const $9 = new DFSNode(9);

head.connect($2);
$2.connect($5);
$2.connect($3);

$2.connect($4);
$5.connect($6);
$6.connect($8);
$5.connect($7);
head.connect($9);

test("DFs Node Test", () => {
  const traversedSet = DFSNode.traverse(head, new Set());
  const buffer = [];
  for (let node of traversedSet.values()) buffer.push(node);
  expect(buffer).toEqual([1, 2, 5, 6, 8, 7, 3, 4, 9]);
});
