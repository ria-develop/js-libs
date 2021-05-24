import React from 'react';
import {render} from '@testing-library/react';
import {List, AutoSizer} from 'react-virtualized';

function ViewData({data}: any) {
  return (
    <div style={{width: '100px', height: '100px'}}>
      <AutoSizer disableHeight>
        {({width, height}) => (
          <List
            data={data}
            rowCount={data.length}
            width={width}
            height={height}
            rowHeight={30}
            rowRenderer={({index, key, style}) => (
              <div key={key} style={style}>
                {data[index]}
              </div>
            )}
          />
        )}
      </AutoSizer>
    </div>
  );
}

describe('given I have flat data list', () => {
  let data: any[] | undefined;
  beforeAll(() => {
    data = ['A', 'B', 'C'];
  });
  afterAll(() => {
    data = undefined;
  });
  describe('and list of grouping fields', () => {
    it('should get a deep grouping structure', () => {
      const {container, debug} = render(<ViewData data={data} />);
      debug(container);
    });
  });
});
