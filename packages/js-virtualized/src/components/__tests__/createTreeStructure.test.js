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

const structure = createTreeStructure(flat, ['category', 'group', 'item']);

function aggregate(summary) {
  const counters = {};
  summary.data.forEach((data) => {
    Object.keys(data).forEach((property) => {
      if (!counters[property]) {
        counters[property] = [data[property]];
      } else if (!counters[property].includes(data[property])) {
        counters[property].push(data[property]);
      }
    });
  });
  Object.keys(counters).forEach((property) => {
    summary[property] = counters[property].length;
  });
}

function traverseWithSummary(node) {
  if (node.isLeaf) {
    const [data] = node.children;
    return {summary: {numAllChildren: 1, data: [data]}, rows: [data]};
  }
  let rows = [];
  let summary;
  if (node.children) {
    // Summary row
    summary = {[node.grouping]: node.name, data: [], expanded: true, numAllChildren: 0};
    rows.push(summary);
    node.children.forEach((child) => {
      const childResult = traverseWithSummary(child);
      if (childResult.summary) {
        summary.numAllChildren += childResult.summary.numAllChildren;
        summary.data = summary.data.concat(childResult.summary.data).filter(Boolean);
      }
      rows = rows.concat(childResult.rows);
    });
    aggregate(summary);
  }
  return {summary, rows};
}

console.log(traverseWithSummary(structure).rows);
//const flatten = traverseWithSummary(structure);

//console.log(util.inspect(flatten, {depth: null, colors: true}));
