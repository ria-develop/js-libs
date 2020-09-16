export declare type TokenProvider = () => string | RegExp;
export declare type TokenResolver = <T>(inputData: T, token: string) => string;
export declare type Processor = (key: string, value: ValueType) => ValueType;
export declare type ValueType = string | Handler;
export declare type Handler = <T>(T: any) => string;
/**
 * Generates scope for resolving values by tokens, and returns simple callback which can be used while processing data structure.
 * @param {T} inputData - any structure which is passing to resolver when matched the expression or to function provided as a value in target structure
 * @param {TokenProvider} tokenProvider a function that provides token to search in the target value
 * @param {TokenResolver} tokenResolver a function that provides value for given token
 * @return {function(*, *=): *}
 * @template T
 */
declare const evaluator: <T>(inputData: T, tokenProvider: TokenProvider, tokenResolver: TokenResolver) => Processor;
export default evaluator;
