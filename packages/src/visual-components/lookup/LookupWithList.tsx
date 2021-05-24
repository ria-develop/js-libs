import React, {ChangeEvent} from 'react';
import Lookup from './Lookup';
import DataView from './DataView';
import useBookSearch from '../../components/useBookSearch';

const LookupWithList = (): JSX.Element => {
  const {search, nextPage, ...dataProps} = useBookSearch();

  return (
    <div>
      <Lookup
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          search(e.target.value);
        }}
      />
      <DataView {...dataProps} nextPage={nextPage} />
    </div>
  );
};

export default LookupWithList;
