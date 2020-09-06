import evaluator, {TokenProvider, TokenResolver} from '../src/js-expressions-core';

const TestToken = 'MyTestToken';
const TestValue = 'MyTestValue';

type MyData = {
  [TestToken]: string;
};

const input: MyData = {[TestToken]: TestValue};

const TargetKey = 'targetKey';

describe('@ria-develop/js-expressions-core', () => {
  it(`should evaluate nothing and return given ${TestValue}`, function () {
    expect(
      evaluator(
        {},
        () => '',
        () => ''
      )(TargetKey, TestValue)
    ).toEqual(TestValue);
  });

  it(`should evaluate ${TestToken} and return ${TestValue} from given input data`, function () {
    const tokenProvider: TokenProvider = () => TestToken;
    const tokenResolver: TokenResolver = <MyData>(data: MyData, token: string) => data[token];
    expect(evaluator<MyData>(input, tokenProvider, tokenResolver)(TargetKey, TestToken)).toEqual(TestValue);
  });
});
