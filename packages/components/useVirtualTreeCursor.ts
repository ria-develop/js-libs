import {useState} from 'react';

export function useVirtualTreeCursor(data: any[], grouping: []) {
  const rawData = useState(data);

  return {
    length,
    getItem(index) {}
  };
}
