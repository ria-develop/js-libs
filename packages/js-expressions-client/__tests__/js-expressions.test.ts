import replacer from '../src/js-expressions-client';
import {input, outputShape} from '../__mocks__/test-data';

describe(`given ${JSON.stringify(input)}`, () => {
  it('should match snapshot', () => {
    expect(JSON.stringify(outputShape, replacer(input))).toMatchSnapshot();
  });
});