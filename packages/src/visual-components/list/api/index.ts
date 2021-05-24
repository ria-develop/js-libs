import {FocusEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react';
import {ListRowProps} from 'react-virtualized';
import {ChildProps} from 'react-virtualized/dist/es/ArrowKeyStepper';
import {ListRowRenderer, RenderedRows} from 'react-virtualized/dist/es/List';

export interface ISelectionController {
  onClick: MouseEventHandler;
  onKeyDown: KeyboardEventHandler;
}

export interface IInteractive {
  onMouseOver: MouseEventHandler;
  onFocus: FocusEventHandler;
}

export enum SelectionMode {
  SINGLE = 'single',
  MULTIPLE = 'multiple'
}

export interface IRowViewProps<T> extends Partial<ListRowProps>, IInteractive, ISelectionController {
  data: T;
  focusedRowIndex: number;
  focusedColumnIndex: number;
  fields: (keyof T)[];
  selection: ICellSelection[];
}

export interface ICellViewProps extends IInteractive {
  highlighted: boolean;
  selected: boolean;
  'aria-colindex': number;
  'aria-rowindex': number;
}

export interface ICellSelection {
  rowIndex: number;
  colIndex: number;
}

export interface IVirtualizedDataViewProps<T> {
  rowHeight?: number;
  data: T[];
  selection: ICellSelection[];
  fields: (keyof T)[] | any;
  onSelect: CellsSelectionHandler;
  selectionMode?: SelectionMode;
  className?: string;
}

export type onRowRendererCallback = (
  onSectionRendered: ChildProps['onSectionRendered']
) => ({startIndex, stopIndex, overscanStartIndex, overscanStopIndex}: RenderedRows) => void;

export interface IVirtualizedDataViewControllerProps<T>
  extends IVirtualizedDataViewProps<T>,
    IInteractive,
    ISelectionController {}

export type ListRowRendererFactory = (params: {
  scrollToColumn: ChildProps['scrollToColumn'];
  scrollToRow: ChildProps['scrollToRow'];
}) => ListRowRenderer;

export interface IViewController {
  rowCount: number;
  columnCount: number;
  onRowRendered: onRowRendererCallback;
  rowRendererFactory: ListRowRendererFactory;
}

export type CellsSelectionHandler = (cells: ICellSelection[]) => void;

export interface IScrollController {
  focusedRowIndex: number;
  focusedColIndex: number;
  onMouseOver: MouseEventHandler;
  onFocus: FocusEventHandler;
  onScrollChange: ({scrollToRow, scrollToColumn}: {scrollToRow: number; scrollToColumn: number}) => void;
}
