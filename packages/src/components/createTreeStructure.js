const makeFlatDataToGroupIterator =
  (root, grouping, map = {}) =>
  (item) => {
    let parent = root;
    grouping.forEach(
      makeChainIterator(item, '', (value, chain, isLeaf) => {
        const child = getNode(value, chain, isLeaf, map);
        addChild(parent, child);
        if (isLeaf) {
          child.isLeaf = isLeaf;
          addChild(child, item);
        }
        parent = child;
      })
    );
  };

const makeChainIterator = (item, chain, callback) => (field, depth, grouping) => {
  const value = item[field];
  chain = `${chain}/${item[field]}`;
  callback(value, chain, depth === grouping.length - 1);
};

function createParent(name) {
  return {name, children: []};
}

function getNode(name, chain, isLeaf, map) {
  if (!map[chain]) {
    return (map[chain] = createParent(name, isLeaf));
  }
  return map[chain];
}

function addChild(parent, child) {
  //child.parent = parent;
  if (!parent.children.includes(child)) {
    parent.children.push(child);
  }
}
function createTreeStructure(list, grouping) {
  const root = createParent('ROOT');
  list.forEach(makeFlatDataToGroupIterator(root, grouping));
  return root;
}
module.exports = {
  createTreeStructure
};
