import {IViewController, IVirtualizedDataViewControllerProps} from '../../api';
import {useCallback} from 'react';
import {ListRowRenderer, RenderedRows} from 'react-virtualized/dist/es/List';
import {RowRenderer} from '../rendering/RowRenderer';

export function useViewController<T>({
  fields,
  onClick,
  onKeyDown,
  onMouseOver,
  onFocus,
  data,
  selection
}: IVirtualizedDataViewControllerProps<T>): IViewController {
  const columnCount = fields.length;
  const rowCount = data.length;

  const onRowRendered = useCallback(
    (onSectionRendered) =>
      ({
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex,
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex
      }: RenderedRows) => {
        onSectionRendered({
          rowStartIndex,
          rowStopIndex,
          rowOverscanStartIndex,
          rowOverscanStopIndex,
          columnOverscanStartIndex: 0,
          columnOverscanStopIndex: 0,
          columnStartIndex: 0,
          columnStopIndex: columnCount - 1
        });
      },
    []
  );

  const rowRendererFactory = useCallback(
    ({scrollToRow, scrollToColumn}): ListRowRenderer =>
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({index, isScrolling, parent, ...props}) => {
        //console.debug(isScrolling);
        return RowRenderer<T>({
          ...props,
          data: data[index],
          focusedRowIndex: scrollToRow,
          focusedColumnIndex: scrollToColumn,
          index,
          onClick,
          onKeyDown,
          onMouseOver,
          onFocus,
          fields,
          selection
        });
      },
    [data, onClick, onMouseOver, onFocus, onKeyDown, fields, selection]
  );

  return {
    rowCount,
    columnCount,
    onRowRendered,
    rowRendererFactory
  };
}
