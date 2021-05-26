const makeFlatDataToGroupIterator =
  (root, grouping, map = {}) =>
  (item) => {
    let parent = root;
    grouping.forEach(
      makeChainIterator(item, '', (name, chain, isLeaf, grouping) => {
        const child = getNode({name, chain, isLeaf, map, grouping});
        addChild(parent, child);
        if (isLeaf) {
          addChild(child, item);
        }
        parent = child;
      })
    );
  };

const makeChainIterator = (item, chain, callback) => (field, depth, grouping) => {
  const value = item[field];
  chain = `${chain}/${item[field]}`;
  callback(value, chain, depth === grouping.length - 1, field);
};

function createNode(name, isLeaf, grouping) {
  return {
    name,
    grouping,
    isLeaf,
    children: []
  };
}

function getNode({name, chain, isLeaf, map, grouping}) {
  if (!map[chain]) {
    return (map[chain] = createNode(name, isLeaf, grouping));
  }
  return map[chain];
}

function addChild(parent, child) {
  Object.defineProperty(child, 'parent', {enumerable: false, configurable: true, value: parent});
  if (!parent.children.includes(child)) {
    parent.children.push(child);
  }
}

function createTreeStructure(list, grouping) {
  const root = createNode('ROOT');
  list.forEach(makeFlatDataToGroupIterator(root, grouping));
  return root;
}

module.exports = {
  createTreeStructure
};
