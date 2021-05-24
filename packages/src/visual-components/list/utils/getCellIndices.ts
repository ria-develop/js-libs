import {FocusEvent, KeyboardEvent, MouseEvent} from 'react';
import {ICellSelection} from '../api';

export const getCellIndices = ({currentTarget}: MouseEvent | KeyboardEvent | FocusEvent): ICellSelection => {
  return {
    rowIndex: parseInt(currentTarget.getAttribute('aria-rowindex') || ''),
    colIndex: parseInt(currentTarget.getAttribute('aria-colindex') || '')
  };
};
