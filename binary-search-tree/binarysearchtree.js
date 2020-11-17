class Node {
    constructor(value) {
        // keep track of 3 properties
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        // keep track of root node, set to new node
        this.root = new Node(value);
        this.count = 1;
    }

    size() {
        return this.count;
    }

    insert(value) {
        this.count++

        let newNode = new Node(value);

        const searchTree = node => {
            // if value < node.value, go left
            if (value < node.value) {
                // if no left child, append new node
                if(!node.left) {
                    node.left = newNode;
                }
                // if there is a left child, look left again
                else {
                    searchTree(node.left)
                }
            }    
            // if value > node.value, go right
           else if (value > node.value) {
                // if no right child, append new node
                if (!node.right) {
                    node.right = newNode;
                }
                // if there is a right child, look right again
                else {
                    searchTree(node.right);
                }
            }   
        }
        searchTree(this.root);
    }

    min() {
        let currentNode = this.root;

        // continue traversing left until no more children
        while (currentNode.left){
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    max() {
        let currentNode = this.root;

         // continue traversing right until no more children
         while (currentNode.right){
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }

    contains(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            if (value < currentNode.value) {
                currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    // depth first search - looks branch by branch

    // in-order
    // left, root, right
    // 2, 3, 12, 15, 28, 36, 39
    dfsInOrder() {
        let result = [];

        
        const traverse = node => {
            // if left child exists, go left again
            if (node.left) traverse(node.left)
            // capture root node value
            result.push(node.value);
            // if right child exists, go right again
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return result;
    }
    // pre-order
    // root, left, right
    // 15, 3, 2, 12, 36, 28, 39
    dfsPreOrder() {
        let result = [];

        // recursive traverse function to push values into result array
        const traverse = node => {
            // capture root node value
            result.push(node.value);
            // if left child exists, go left again
            if (node.left) traverse(node.left)
            // if right child exists, go right again
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    // post-order
    // left, right, root
    // 2, 12, 3, 28, 39, 36, 15
    dfsPostOrder() {
        let result = [];

        const traverse = node => {
            // if left child exists, go left again
            if (node.left) traverse(node.left)
            // if right child exists, go right again
            if (node.right) traverse(node.right);
            // capture root node value
            result.push(node.value);
        }
        traverse(this.root);
        return result;

    }

    // breadth first search - look level by level
    // use a queue
    // use lots of console.logs
    bfs() {
        let result = [];

        let queue = [];

        queue.push(this.root);

        while (queue.length) {
            let currentNode = queue.shift();

            result.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return result;
    }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst.dfsInOrder());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());

console.log(bst.bfs());
