import React, {PropsWithChildren} from 'react';
import {ICellViewProps} from '../api';

export function CellView({highlighted, selected, children, ...props}: PropsWithChildren<ICellViewProps>): JSX.Element {
  const classes = [];
  if (highlighted) {
    classes[classes.length] = 'is-focused';
  }
  if (selected) {
    classes[classes.length] = 'is-selected';
  }
  return (
    <div className={classes.join(' ')} role="gridcell" tabIndex={0} {...props}>
      {children}
    </div>
  );
}
