function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
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