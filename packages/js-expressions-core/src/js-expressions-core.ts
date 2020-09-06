export type TokenProvider = () => string | RegExp;
export type TokenResolver = <T>(inputData: T, token: string) => string;
export type Processor = (key: string, value: ValueType) => ValueType;
export type ValueType = string | Handler;
export type Handler = <T>(T) => string;
/**
 * Generates scope for resolving values by tokens, and returns simple callback which can be used while processing data structure.
 * @param {T} inputData - any structure which is passing to resolver when matched the expression or to function provided as a value in target structure
 * @param {TokenProvider} tokenProvider a function that provides token to search in the target value
 * @param {TokenResolver} tokenResolver a function that provides value for given token
 * @return {function(*, *=): *}
 * @template T
 */
const evaluator = <T>(inputData: T, tokenProvider: TokenProvider, tokenResolver: TokenResolver): Processor => (
  key: string,
  value: ValueType
): ValueType => {
  if (typeof value === 'function') {
    value = value<T>(inputData);
  }
  if (typeof value === 'string') {
    const result = (tokenProvider && value.match(tokenProvider())) || [];
    if (result.length) {
      result.forEach((matched) => (value = (value as string).replace(matched, tokenResolver(inputData, matched))));
    }
  }
  return value;
};

export default evaluator;
