import React from 'react';
import {ArrowKeyStepper, AutoSizer, List} from 'react-virtualized';
import {IVirtualizedDataViewProps, SelectionMode} from '../api';
import {useScrollController, useSelectionController, useViewController} from '../hooks';

const VirtualizedDataView = <T extends unknown>({
  rowHeight = 28,
  onSelect,
  selection,
  className,
  selectionMode = SelectionMode.SINGLE,
  ...props
}: IVirtualizedDataViewProps<T>): JSX.Element => {
  const {onScrollChange, focusedRowIndex, focusedColIndex, ...handlers} = useScrollController();
  const {onRowRendered, rowRendererFactory, columnCount, rowCount} = useViewController<T>({
    selection,
    onSelect,
    ...handlers,
    ...props,
    ...useSelectionController(onSelect, selection, selectionMode)
  });

  return (
    <AutoSizer className={className}>
      {({width, height}) => {
        return (
          <ArrowKeyStepper
            className="key-stepper"
            scrollToColumn={focusedColIndex}
            columnCount={columnCount}
            rowCount={rowCount}
            isControlled={true}
            mode="cells"
            scrollToRow={focusedRowIndex}
            onScrollToChange={onScrollChange}
          >
            {({onSectionRendered, scrollToRow, scrollToColumn}) => {
              return (
                <List
                  className="data-view-list"
                  rowCount={rowCount}
                  rowHeight={rowHeight}
                  width={width}
                  height={height || 5 * rowHeight}
                  scrollToIndex={scrollToRow}
                  onRowsRendered={onRowRendered(onSectionRendered)}
                  rowRenderer={rowRendererFactory({scrollToRow, scrollToColumn})}
                />
              );
            }}
          </ArrowKeyStepper>
        );
      }}
    </AutoSizer>
  );
};

export default VirtualizedDataView;
