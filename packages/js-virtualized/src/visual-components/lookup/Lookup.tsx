import React, {ChangeEventHandler} from 'react';

const Lookup = ({onChange}: {onChange?: ChangeEventHandler<HTMLInputElement>}): JSX.Element => (
  <input type="text" onChange={onChange} />
);
export default Lookup;
