/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import {CSSProperties} from 'react';
import {AutoSizer, CellMeasurer, CellMeasurerCache, List} from 'react-virtualized';
import {MeasuredCellParent} from 'react-virtualized/dist/es/CellMeasurer';

type ParentNode = {
  type: 'parent';
  isExpanded: boolean;
  children: ChildNode[];
  data: {
    id: string;
    label: string;
  };
};

type ChildNode = {
  type: 'child';
  isExpanded?: boolean;
  children?: [];
  data: Visit;
};

type Node = ParentNode | ChildNode;

type Visit = {
  id: string;
  name: string;
};

const flattenNodes = (nodes: Node[]) => {
  return nodes.reduce<Node[]>((acc, node) => {
    const {children} = node;
    acc = acc.concat([node, ...(children || [])]);
    return acc;
  }, []);
};

const countNodes = (nodes: Node[]) => {
  return flattenNodes(nodes).length;
};

const getParentNodeByIndex = (nodes: Node[], index: number, baseIndex = 0): Node | null => {
  if (nodes.length === 0 || index < 0) return null;

  const [hd, ...rest] = nodes;
  const nextBaseIndex = baseIndex + countNodes([hd]);

  if (nextBaseIndex > index) return hd;
  return getParentNodeByIndex(rest, index, nextBaseIndex);
};

const updateParentNode = (nodes: Node[], index: number, updater: (node: Node) => Node) => {
  const parentNode = getParentNodeByIndex(nodes, index);
  return nodes.map((node) => {
    if (parentNode == node) {
      return updater(node);
    }
    return node;
  });
};

let totalCount = 0;
const generateChildren = (count: number): ChildNode[] => {
  const children: ChildNode[] = [];
  for (let i = 1; i <= count; ++i) {
    totalCount += 1;
    children.push({
      type: 'child',
      data: {
        id: `visit${totalCount}`,
        name: `George_${totalCount}`
      }
    });
  }
  return children;
};

class Grouping extends React.Component<unknown, {data: Node[]}> {
  state: {
    data: Node[];
  } = {
    data: [
      {
        type: 'parent',
        isExpanded: true,
        data: {
          id: 'inpatients',
          label: 'Inpatient'
        },
        children: generateChildren(3)
      },
      {
        type: 'parent',
        isExpanded: false,
        data: {
          id: 'outpatients',
          label: 'Outpatient'
        },
        children: generateChildren(3)
      }
    ]
  };

  listRef: List | null = null;

  private cellMeasurerCache = new CellMeasurerCache({
    defaultHeight: 0,
    fixedWidth: true
  });

  toggleParentExpand = (index: number): void => {
    this.setState(
      ({data}) => ({
        data: updateParentNode(data, index, (node) => ({
          ...node,
          isExpanded: !node.isExpanded
        }))
      }),
      () => {
        if (this.listRef) {
          this.cellMeasurerCache.clearAll();
          this.listRef.forceUpdateGrid();
        }
      }
    );
  };

  private rowRenderer = ({
    index,
    key,
    parent,
    style
  }: {
    index: number;
    key: string;
    parent: MeasuredCellParent;
    style: CSSProperties;
  }) => {
    const flatNodes = flattenNodes(this.state.data);
    const node = flatNodes[index];
    const parentNode = getParentNodeByIndex(this.state.data, index);

    let itemJSX;
    switch (node && node.type) {
      case null: {
        itemJSX = <span>Empty</span>;
        break;
      }
      case 'parent': {
        itemJSX = (
          <div
            style={{
              padding: '10px 5px',
              borderBottom: '1px solid #ddd',
              display: 'flex',
              cursor: 'pointer',
              justifyContent: 'space-between'
            }}
            onClick={() => this.toggleParentExpand(index)}
          >
            <h3 style={{margin: 0, color: node.isExpanded ? '#333' : '#ddd'}}>{(node as ParentNode).data.label}</h3>
            <span>{node.isExpanded ? 'Collapse' : 'Expand'}</span>
          </div>
        );
        break;
      }
      default: {
        itemJSX = parentNode?.isExpanded ? (
          <div style={{padding: '5px'}}>
            <span>{(node as ChildNode).data.name}</span>
            <textarea
              onKeyUp={() => {
                this.cellMeasurerCache.clear(index, 0);
                this.listRef?.recomputeRowHeights(index);
              }}
            />
          </div>
        ) : null;
        break;
      }
    }

    return itemJSX ? (
      <CellMeasurer cache={this.cellMeasurerCache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
        <div style={{display: 'flex', ...style}}>{itemJSX}</div>
      </CellMeasurer>
    ) : null;
  };

  render(): JSX.Element {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <AutoSizer>
          {({width, height}: {height: number; width: number}) => (
            <List
              deferredMeasurementCache={this.cellMeasurerCache}
              height={height}
              noRowsRenderer={() => <span>None</span>}
              overscanRowCount={10}
              rowCount={countNodes(this.state.data)}
              rowHeight={(params) => {
                return this.cellMeasurerCache.rowHeight(params);
              }}
              rowRenderer={this.rowRenderer}
              ref={(ref) => {
                this.listRef = ref;
              }}
              style={{outline: 'none'}}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default Grouping;
