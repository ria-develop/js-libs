/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import VirtualizedDataView, {ICellSelection} from '../visual-components/list';

export interface IRowData {
  category: string;
  group: string;
  item: string | ReactNode;
  expanded?: boolean;
}

function Application(): JSX.Element {
  const [data, setData] = useState<(IRowData | ReactNode)[]>([]);
  const [filteredData, setFilteredData] = useState<(IRowData | ReactNode)[]>([]);
  const [hiddenRanges, setHiddenRanges] = useState<any[]>([]);
  const [value, setValue] = useState<ICellSelection[]>([]);
  const [fields] = useState<(keyof IRowData)[]>(['category', 'group', 'item']);
  const toggleBranch = useCallback(
    (dataSource: any[], from, to) => {
      const newData = dataSource.filter((item, index) => {
        return !(index < to && index > from);
      });
      setHiddenRanges(newData);
    },
    [hiddenRanges]
  );

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
    <VirtualizedDataView<IRowData | ReactNode>
      data={filteredData}
      selection={value}
      fields={fields}
      onSelect={setValue}
      rowHeight={48}
    />
  );
}

export default Application;
