import {IRowViewProps} from '../api';
import {CellView} from './CellView';
import React, {isValidElement, ReactNode} from 'react';
import {exists} from '../utils/exists';

export function RowView<T extends unknown>({
  data,
  style,
  focusedRowIndex,
  focusedColumnIndex,
  index,
  fields,
  selection,
  ...cellProps
}: IRowViewProps<T>): JSX.Element {
  const isRowHighlighted = index === focusedRowIndex;
  const rowIndex = index || 0;
  return (
    <div style={style} className={(isRowHighlighted && 'is-highlighted') || ''}>
      {isValidElement(data as ReactNode) ? (
        <CellView
          key={index}
          highlighted={isRowHighlighted}
          selected={false}
          aria-colindex={0}
          aria-rowindex={rowIndex}
          {...cellProps}
        >
          {data as JSX.Element}
        </CellView>
      ) : (
        fields.map((field, colIndex) => {
          return (
            <CellView
              key={field.toString()}
              highlighted={isRowHighlighted && colIndex === focusedColumnIndex}
              selected={exists(selection, {colIndex, rowIndex})}
              aria-colindex={colIndex}
              aria-rowindex={rowIndex}
              {...cellProps}
            >
              {data[field]}
            </CellView>
          );
        })
      )}
    </div>
  );
}
