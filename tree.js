function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(6);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

// preOrder
function preOrder(root, result = []) {
    if (root === null) {
        return result;
    }
    result.push(root.val);
    preOrder(root.left, result);
    preOrder(root.right, result);
    return result;
}
console.log('Preorder: ' + preOrder(root));

// inOrder
function inOrder(root, result = []) {
    if (root === null) {
        return result;
    }
    inOrder(root.left, result);
    result.push(root.val);
    inOrder(root.right, result);
    return result;
}
console.log('Inorder: ' + inOrder(root));

// postOrder
function postOrder(root, result = []) {
    if (root === null) {
        return result;
    }
    postOrder(root.left, result);
    postOrder(root.right, result);
    result.push(root.val);
    return result;
}
console.log('Postorder: ' + postOrder(root));

// The depth of the tree
function depth(root) {
    if (root === null) {
        return 0;
    }
    let leftDepth = depth(root.left);
    let rightDepth = depth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
}
console.log('Depth: ' + depth(root));

// The minimum depth of the tree
function minDepth(root) {
    if (root === null) {
        return 0;
    }
    else if (root.left === null) {
        return 1 + minDepth(root.right);
    }
    else if (root.right === null) {
        return 1 + minDepth(root.left);
    }
    let leftDepth = minDepth(root.left);
    let rightDepth = minDepth(root.right);
    return 1 + Math.min(leftDepth, rightDepth);
}
console.log('minDepth: ' + minDepth(root));

// Binary search of the binary search tree
function binarySearch(root, val) {
    if (root === null) {
        return null;
    }
    else if (root.val === val) {
        return root;
    }
    else if (root.val > val) {
        return binarySearch(root.left, val);
    }
    else {
        return binarySearch(root.right, val);
    }
}
let result = binarySearch(root, 2);
if (result) {
    console.log('Search 2: ' + result.val);
}
else {
    console.log('Value NOT found in the tree');
}

// Checking if the tree is balanced
function isBalanced(root) {
    if (root === null) {
        return true;
    }
    let leftHeight = depth(root.left);
    let rightHeight = depth(root.right);
    if (leftHeight - rightHeight > 1 || leftHeight - rightHeight < -1) {
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
}
if (isBalanced(root)) {
    console.log('The tree is balanced');
}
else {
    console.log('The tree is NOT balanced');
}

// Cloning a new tree
function copyTree(root) {
    if (root === null) {
        return null;
    }
    let copy = new TreeNode(root.val);
    copy.left = copyTree(root.left);
    copy.right = copyTree(root.right);
    return copy;
}
let copy = copyTree(root);

// Checking if two trees have same values
function isSameTree(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
        return true;
    }
    else if (tree1 === null || tree2 === null) {
        return false;
    }
    return (
        tree1.val === tree2.val &&
        isSameTree(tree1.left, tree2.left) &&
        isSameTree(tree1.right, tree2.right)
    );
}
if (isSameTree(root, copy)) {
    console.log('The root tree and the copy tree are identical');
}
else {
    console.log('The root tree and the copy tree are NOT identical');
}

// The sum of the values of the tree
function sum(root) {
    if (root === null) {
        return 0;
    }
    return root.val + sum(root.left) + sum(root.right);
}
console.log('Sum: ' + sum(root));

// Merging two trees and the sum of their corresponding values
function mergeTrees(tree1, tree2) {
    if (tree1 === null) {
        return tree2;
    }
    if (tree2 === null) {
        return tree1;
    }
    let copy = new TreeNode(tree1.val + tree2.val);
    copy.left = mergeTrees(tree1.left, tree2.left);
    copy.right = mergeTrees(tree1.right, tree2.right);
    return copy;
}
console.log('Merged tree (inOrder): ' + inOrder(mergeTrees(root, copy)));

// Returning an array with arrays of values in same levels
function levelOrder(root, n = 0, result = []) {
    if (root === null) {
        return result;
    }
    if (!result[n]) {
        result[n] = [];
    }
    result[n].push(root.val);
    levelOrder(root.left, n + 1, result);
    levelOrder(root.right, n + 1, result);
    return result;
}
function levelOrderBottom(root, n = 0, result = []) {
    if (root === null) {
        return result;
    }
    if (result[n] === undefined) {
        result[n] = [];
    }
    result[n].push(root.val);
    levelOrderBottom(root.left, n + 1, result);
    levelOrderBottom(root.right, n + 1, result);
    if (n === 0) {
        return result.reverse();
    }
    return result;
};
console.log(levelOrder(root));
console.log(levelOrderBottom(root));
