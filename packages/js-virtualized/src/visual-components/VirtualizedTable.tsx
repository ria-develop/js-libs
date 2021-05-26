/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React, {MouseEvent, MouseEventHandler, ReactNode, ReactNodeArray, useCallback, useState} from 'react';
import {CellsSelectionHandler, ICellSelection, IVirtualizedDataViewProps} from './api';
import {ArrowKeyStepper, AutoSizer, Column, Index, Table, TableProps} from 'react-virtualized';
import {ArrowKeyStepperProps, ScrollIndices} from 'react-virtualized/dist/es/ArrowKeyStepper';
import {TableCellProps, TableCellRenderer} from 'react-virtualized/dist/es/Table';
import {getCellIndices} from './utils/getCellIndices';
import {exists} from './utils/exists';
import './styles.scss';
import 'react-virtualized/styles.css';

type ScrollController = ScrollIndices & Pick<ArrowKeyStepperProps, 'onScrollToChange'>;

const useScroll = (initialScrollIndices: ScrollIndices): ScrollController => {
  const [scrollIndices, onScrollToChange] = useState<ScrollIndices>(initialScrollIndices);
  return {
    ...scrollIndices,
    onScrollToChange
  };
};

type DataController<T> = {
  columnCount: number;
  rowCount: number;
  rowGetter: (params: Index) => T;
};

const useData = <T extends unknown>(data: T[], columns: ReactNode): DataController<T> => {
  return {
    rowCount: data?.length,
    columnCount: (columns as ReactNodeArray)?.length,
    rowGetter: ({index}: Index) => data[index]
  };
};

type RowActionController = Pick<TableProps, 'onRowMouseOver' | 'rowClassName'>;

const useRowAction = ({scrollToRow}: ScrollController): RowActionController => {
  return {
    // onRowMouseOver({index}: RowMouseEventHandlerParams) {
    //   if (onScrollToChange) onScrollToChange({scrollToColumn, scrollToRow: index});
    // },
    rowClassName({index}: Index) {
      return index === scrollToRow ? 'is-highlighted' : '';
    }
  };
};

type ICell = {
  cellData: ReactNode;
  selected: boolean;
  highlighted: boolean;
  onClick: MouseEventHandler;
  onMouseOver: MouseEventHandler;
};

function Cell({cellData, selected, highlighted, onClick, onMouseOver}: ICell): JSX.Element {
  const classes = [];
  if (highlighted) {
    classes[classes.length] = 'is-highlighted';
  }
  if (selected) {
    classes[classes.length] = 'is-selected';
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex,jsx-a11y/mouse-events-have-key-events
    <div tabIndex={0} className={classes.join(' ')} onClick={onClick} onMouseOver={onMouseOver}>
      {cellData}
    </div>
  );
}

const useLayout = (fields: string[], cellRenderer: TableCellRenderer) => {
  return {
    rowHeight: 28,
    headerHeight: 28,
    displayHeader: true,
    children: fields.map((field, index) => (
      <Column
        width={100}
        key={`column-${index}`}
        dataKey={field.toString()}
        label={field}
        flexGrow={1}
        cellRenderer={cellRenderer}
      />
    ))
  };
};

type VirtualizedTableProps<T> = IVirtualizedDataViewProps<T> &
  Pick<TableProps, 'children' | 'rowStyle' | 'scrollToRow' | 'scrollToColumn'>;

const useCellRenderer = ({
  selection,
  onSelect,
  scrollTo: {scrollToColumn, scrollToRow, onScrollToChange}
}: {
  selection: ICellSelection[];
  onSelect: CellsSelectionHandler;
  scrollTo: ScrollController;
}): TableCellRenderer => {
  const onClick = useCallback((e: MouseEvent) => {
    onSelect([getCellIndices(e)]);
  }, []);
  const onMouseOver = useCallback((e: MouseEvent) => {
    const {colIndex, rowIndex} = getCellIndices(e);
    if (onScrollToChange) onScrollToChange({scrollToColumn: colIndex, scrollToRow: rowIndex});
  }, []);
  // eslint-disable-next-line react/display-name
  return ({cellData, columnIndex, rowIndex}: TableCellProps) => {
    return (
      <Cell
        cellData={cellData}
        selected={exists(selection, {rowIndex, colIndex: columnIndex})}
        highlighted={scrollToColumn === columnIndex && scrollToRow === rowIndex}
        onClick={onClick}
        onMouseOver={onMouseOver}
      />
    );
  };
};

const VirtualizedTable = <T extends unknown>({
  className,
  data,
  selection = [],
  onSelect,
  fields,
  scrollToRow = -2, // -1 reserved for header
  scrollToColumn = -1,
  ...tableProps
}: VirtualizedTableProps<T>): JSX.Element => {
  const scrollTo = useScroll({scrollToRow, scrollToColumn});
  const rowActions = useRowAction(scrollTo);
  const cellRenderer = useCellRenderer({selection, onSelect, scrollTo});
  const {children, ...layout} = useLayout(fields, cellRenderer);
  const dataProps = useData<T>(data, children);

  return (
    <AutoSizer className={className}>
      {(sizeProps) => {
        return (
          <ArrowKeyStepper className="key-stepper" isControlled={true} mode="cells" {...scrollTo} {...dataProps}>
            {(scrollProps) => {
              const allTableProps = {
                ...scrollProps,
                ...sizeProps,
                ...dataProps,
                ...tableProps,
                ...rowActions,
                ...layout
              };
              return (
                <Table className="data-view-list" {...allTableProps}>
                  {children}
                </Table>
              );
            }}
          </ArrowKeyStepper>
        );
      }}
    </AutoSizer>
  );
};

export default VirtualizedTable;
