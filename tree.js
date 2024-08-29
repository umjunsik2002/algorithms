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

function depth(root) {
    if (root === null) {
        return 0;
    }
    let leftDepth = depth(root.left);
    let rightDepth = depth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
}
console.log('Depth: ' + depth(root));

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
    console.log('Value not found in the tree');
}