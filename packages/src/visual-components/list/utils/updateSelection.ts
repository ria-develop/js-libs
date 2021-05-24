import {MouseEvent, KeyboardEvent} from 'react';
import {ICellSelection, SelectionMode} from '../api';
import {exists} from './exists';
import {getCellIndices} from './getCellIndices';

export function updateSelection(
  event: MouseEvent | KeyboardEvent,
  selection: ICellSelection[],
  onSelect: (cells: ICellSelection[]) => void,
  mode: SelectionMode
): void {
  const item = getCellIndices(event);
  if (mode === SelectionMode.SINGLE) {
    onSelect([item]);
  } else {
    if (exists(selection, item)) {
      onSelect(selection.filter(({colIndex, rowIndex}) => !(colIndex === item.colIndex && rowIndex === item.rowIndex)));
    } else {
      onSelect([...selection, item]);
    }
  }
}
