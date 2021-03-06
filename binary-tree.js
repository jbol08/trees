/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    function minLevels(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minLevels(node.right) + 1;
      if (node.right === null) return minLevels(node.left) + 1;
      return (Math.min(minLevels(node.left), minLevels(node.right)) + 1);
    }
    return minLevels(this.root);
    

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    function maxLevels(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxLevels(node.right) + 1;
      if (node.right === null) return maxLevels(node.left) + 1;
      return (Math.max(maxLevels(node.left), maxLevels(node.right)) + 1);
    }
    return maxLevels(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    let sum = 0;
    function maxTotal(node) {
      if (node === null) return 0;
      let rightSum = maxTotal(node.right);
      let leftSum = maxTotal(node.left);
      sum = Math.max(sum, node.val + leftSum + rightSum );
      return Math.max(0,leftSum + node.val, rightSum + node.val);
    }
    maxTotal(this.root);
    return sum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let queue = [this.root];
    let closest = null;
    while (queue.length) {
      let currentNode = queue.shift();
      let currVal = currentNode.val;
      let higherThan = lowerBound < currVal;
      let newClosest = currVal < closest || closest === null;
      if (higherThan && newClosest) {
        closest = currVal
      }
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return closest;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  // /** Further study!
  //  * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  // /** Further study!
  //  * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  // /** Further study!
  //  * lowestCommonAncestor(node1, node2): find the lowest common ancestor
  //  * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {
    
  // }
}

module.exports = { BinaryTree, BinaryTreeNode };
