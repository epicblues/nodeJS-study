class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  static insertData(head, value) {
    if (head === null) {
      // base case
      return new TreeNode(value);
    }
    if (head.data === value) return head;
    if (head.data > value) {
      head.left = this.insertData(head.left, value);
      // 다른 유형에서도 내가 자주 놓치는 부분
    } else {
      head.right = this.insertData(head.right, value);
    }
    return head;
  }
  static print(head, stringBuffer = []) {
    if (head === null) return;
    this.print(head.left, stringBuffer);
    stringBuffer.push(head.data);
    this.print(head.right, stringBuffer);

    return stringBuffer;
  }
}

const a = new TreeNode(5);
const b = new TreeNode(6);
const c = new TreeNode(4);
const d = new TreeNode(1);

TreeNode.insertData(a, 6);
TreeNode.insertData(a, 7);
TreeNode.insertData(a, 4);
TreeNode.insertData(a, 1);

test("treeNode Test", () => {
  expect(TreeNode.print(a)).toEqual([1, 4, 5, 6, 7]);
});
