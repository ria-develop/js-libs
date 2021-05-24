import {ICellSelection} from '../api';

export const exists = (list: ICellSelection[], {colIndex, rowIndex}: ICellSelection): boolean => {
  return list.find(({colIndex: x, rowIndex: y}) => colIndex === x && rowIndex === y) != undefined;
};
