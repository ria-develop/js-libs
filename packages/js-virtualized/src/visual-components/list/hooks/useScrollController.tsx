import {IScrollController} from '../../api';
import {FocusEvent, MouseEvent, useCallback, useState} from 'react';
import {getCellIndices} from '../../utils/getCellIndices';

export function useScrollController(): IScrollController {
  const [focusedRowIndex, setFocusedRowIndex] = useState<number>(0);
  const [focusedColIndex, setFocusedColIndex] = useState<number>(0);
  const onMouseOver = useCallback((event: MouseEvent) => {
    const {rowIndex, colIndex} = getCellIndices(event);
    setFocusedRowIndex(rowIndex);
    setFocusedColIndex(colIndex);
  }, []);
  const onFocus = useCallback(
    (event: FocusEvent) => {
      const {rowIndex, colIndex} = getCellIndices(event);
      setFocusedRowIndex(rowIndex);
      setFocusedColIndex(colIndex);
    },
    [setFocusedRowIndex, setFocusedColIndex]
  );
  const onScrollChange = useCallback(({scrollToRow, scrollToColumn}) => {
    setFocusedColIndex(scrollToColumn);
    setFocusedRowIndex(scrollToRow);
  }, []);

  return {
    focusedRowIndex,
    focusedColIndex,
    onMouseOver,
    onFocus,
    onScrollChange
  };
}
