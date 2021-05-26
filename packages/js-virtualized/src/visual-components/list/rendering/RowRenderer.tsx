import {IRowViewProps} from '../../api';
import {RowView} from './RowView';
import React from 'react';

export const RowRenderer = <T extends any>({
  isVisible,
  ...props
}: IRowViewProps<T>): JSX.Element | boolean | undefined => isVisible && <RowView {...props} />;
