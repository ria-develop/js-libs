const util = require('util');
const {createTreeStructure} = require('../createTreeStructure');
const flat = [
  {
    category: 'Cat 1',
    group: 'Group 1',
    item: 'Item 1',
    value: 100
  },
  {
    category: 'Cat 1',
    group: 'Group 1',
    item: 'Item 2',
    value: 100
  },
  {
    category: 'Cat 1',
    group: 'Group 2',
    item: 'Item 1',
    value: 100
  },
  {
    category: 'Cat 1',
    group: 'Group 2',
    item: 'Item 2',
    value: 100
  },
  {
    category: 'Cat 2',
    group: 'Group 1',
    item: 'Item 1',
    value: 100
  },
  {
    category: 'Cat 2',
    group: 'Group 1',
    item: 'Item 2',
    value: 100
  },
  {
    category: 'Cat 2',
    group: 'Group 2',
    item: 'Item 1',
    value: 100
  },
  {
    category: 'Cat 2',
    group: 'Group 2',
    item: 'Item 2',
    value: 100
  }
];
console.log(util.inspect(createTreeStructure(flat, ['category', 'group', 'item']), {depth: null, colors: true}));
