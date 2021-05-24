import {CellsSelectionHandler, ICellSelection, ISelectionController, SelectionMode} from '../api';
import {KeyboardEvent, MouseEvent, useCallback} from 'react';
import {updateSelection} from '../utils/updateSelection';

export function useSelectionController(
  onSelect: CellsSelectionHandler,
  selection: ICellSelection[],
  mode: SelectionMode
): ISelectionController {
  const onClick = useCallback(
    (event: MouseEvent) => {
      updateSelection(event, selection, onSelect, mode);
    },
    [selection]
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        updateSelection(event, selection, onSelect, mode);
      }
    },
    [selection]
  );

  return {
    onClick,
    onKeyDown
  };
}
