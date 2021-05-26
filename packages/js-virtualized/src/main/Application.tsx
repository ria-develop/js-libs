import React, {ReactNode, useEffect, useState} from 'react';
import {ICellSelection, SelectionMode} from '../visual-components/api';
import VirtualizedTable from '../visual-components/VirtualizedTable';

export interface IRowData {
  category: string;
  group: string;
  item: string | ReactNode;
  expanded?: boolean;
}

function Application(): JSX.Element {
  const [data, setData] = useState<(IRowData | ReactNode)[]>([]);
  const [filteredData, setFilteredData] = useState<(IRowData | ReactNode)[]>([]);
  const [selection, setSelection] = useState<ICellSelection[]>([]);
  const [fields] = useState<(keyof IRowData)[]>(['category', 'group', 'item']);

  useEffect(() => {
    const myData = [
      {
        category: 'C1',
        group: 'G1',
        item: 'I1'
      },
      {
        category: 'C1',
        group: 'G1',
        item: 'I2'
      },
      {
        category: 'C1',
        group: 'G2',
        item: 'I1'
      },
      {
        category: 'C1',
        group: 'G2',
        item: 'I2'
      },
      {
        category: 'C2',
        group: 'G1',
        item: 'I1'
      },
      {
        category: 'C2',
        group: 'G1',
        item: 'I2'
      },
      {
        category: 'C2',
        group: 'G2',
        item: 'I1'
      },
      {
        category: 'C2',
        group: 'G2',
        item: 'I2'
      }
    ];
    setData(myData);
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <VirtualizedTable<IRowData | ReactNode>
      data={filteredData}
      selectionMode={SelectionMode.SINGLE}
      fields={fields}
      onSelect={setSelection}
      selection={selection}
    />
  );
}

export default Application;
