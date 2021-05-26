import {FocusEvent, KeyboardEvent, MouseEvent} from 'react';
import {ICellSelection} from '../api';

export const getCellIndices = ({currentTarget}: MouseEvent | KeyboardEvent | FocusEvent): ICellSelection => {
  return {
    rowIndex: parseInt(currentTarget.parentElement?.parentElement?.getAttribute('aria-rowindex') || '') - 1,
    colIndex: parseInt(currentTarget.parentElement?.getAttribute('aria-colindex') || '') - 1
  };
};
