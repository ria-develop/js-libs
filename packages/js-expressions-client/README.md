# `@ria-develop/js-expressions-client`

A Simple module that generates scope for resolving values by tokens, and returns simple callback which can be used while processing data structure.

## Usage

### Installation

`yarn add lodash.get @ria-develop/js-expressions-client`

or 

`npm i -S lodash.get @ria-develop/js-expressions-client`

## Typescript

```typescript
import evaluator, {TokenProvider, TokenResolver} from '@ria-develop/js-expressions-client';

const TestToken = 'MyTestToken';
const TestValue = 'MyTestValue';

type MyData = {
  [TestToken]: string
}

const input: MyData = {[TestToken]: TestValue};

const TargetKey = 'targetKey';

const tokenProvider: TokenProvider = () => TestToken;
const tokenResolver: TokenResolver = <MyData>(data: MyData, token: string) => data[token];
console.log(evaluator<MyData>(input, tokenProvider, tokenResolver)(TargetKey, TestToken));
// output: MyTestValue
```


## Vanilla javascript

```javascript
const evaluator = require('@ria-develop/js-expressions-client');

const TestToken = 'MyTestToken';
const TestValue = 'MyTestValue';

const input = {[TestToken]: TestValue};

const TargetKey = 'targetKey';

console.log(evaluator(input, 
  () => TestToken, 
  (data: MyData, token: string) => data[token])
  (TargetKey, TestToken)
);
// output: MyTestValue
```

## ES6

```javascript
import evaluator from '@ria-develop/js-expressions-client';

const TestToken = 'MyTestToken';
const TestValue = 'MyTestValue';

const input = {[TestToken]: TestValue};

const TargetKey = 'targetKey';

console.log(evaluator(input, 
  () => TestToken, 
  (data: MyData, token: string) => data[token])
  (TargetKey, TestToken)
);
// output: MyTestValue
```
