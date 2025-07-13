const HashMap = require('./hashMap');
const map = new HashMap();

// Fill to capacity (0.75 * 16 = 12 items)
map.set('apple', 'red');
map.set('banana', 'yellow');
map.set('carrot', 'orange');
map.set('dog', 'brown');
map.set('elephant', 'gray');
map.set('frog', 'green');
map.set('grape', 'purple');
map.set('hat', 'black');
map.set('ice cream', 'white');
map.set('jacket', 'blue');
map.set('kite', 'pink');
map.set('lion', 'golden');

console.log('Length after 12 inserts:', map.length()); // Expect: 12
console.log('Capacity before resize:', map.capacity);  // Expect: 16

// Overwrite some values
map.set('apple', 'dark red');
map.set('banana', 'light yellow');

console.log('Updated apple:', map.get('apple')); // Expect: dark red
console.log('Updated banana:', map.get('banana')); // Expect: light yellow
console.log('Length should still be 12:', map.length()); // No change

// Trigger resize with 13th item
map.set('moon', 'silver');

console.log('Length after resize:', map.length()); // Expect: 13
console.log('Capacity after resize:', map.capacity); // Expect: 32

// Test has()
console.log('Has "moon"?', map.has('moon')); // true
console.log('Has "sun"?', map.has('sun'));   // false

// Test remove()
console.log('Remove "dog":', map.remove('dog')); // true
console.log('Remove "sun":', map.remove('sun')); // false

// Test keys, values, entries
console.log('All keys:', map.keys());
console.log('All values:', map.values());
console.log('All entries:', map.entries());

// Clear
map.clear();
console.log('Length after clear:', map.length()); // Expect: 0
console.log('Entries after clear:', map.entries()); // Expect: []
