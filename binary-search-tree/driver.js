import Tree from './Tree.js';
import prettyPrint from './prettyPrint.js';

function getRandomArray(length = 10, max = 100) {
  return Array.from({ length }, () => Math.floor(Math.random() * max));
}

const randomData = getRandomArray();
const tree = new Tree(randomData);

console.log('Initial Tree:');
prettyPrint(tree.root);

console.log('Is Balanced:', tree.isBalanced());

console.log('Level Order:');
tree.levelOrderForEach((node) => console.log(node.data));

console.log('Pre Order:');
tree.preOrderForEach((node) => console.log(node.data));

console.log('Post Order:');
tree.postOrderForEach((node) => console.log(node.data));

console.log('In Order:');
tree.inOrderForEach((node) => console.log(node.data));

// Unbalancing
tree.insert(150);
tree.insert(200);
tree.insert(300);

console.log('\nUnbalanced Tree:');
prettyPrint(tree.root);
console.log('Is Balanced:', tree.isBalanced());

// Rebalancing
tree.rebalance();
console.log('\nRebalanced Tree:');
prettyPrint(tree.root);
console.log('Is Balanced:', tree.isBalanced());
