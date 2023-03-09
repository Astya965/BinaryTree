export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const insertNode = (tree: TreeNode | null, value: number) => {
  let node: TreeNode | null = tree;
  let key: "left" | "right" | null = null;

  while (node && value !== node.val) {
    key = value < node.val ? "left" : "right";
    if (!node[key]) {
      node[key] = new TreeNode(value);
      break;
    }
    node = node[key];
  }

  return tree;
};

export const createTreeFromArray = (array: number[]) =>
  array.reduce(
    (acc: TreeNode | null, cur) =>
      acc ? insertNode(acc, cur) : new TreeNode(cur),
    null
  );
