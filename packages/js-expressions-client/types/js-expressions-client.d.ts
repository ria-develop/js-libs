import {Processor, TokenProvider, TokenResolver} from '@ria-develop/js-expressions-core';
/**
 * Optional token that can be used to resolve value
 * TODO: Implement method for resolving this kind of token
 * @type {RegExp}
 */
export declare const CONTENT_ONLY_TOKEN: RegExp;
/**
 * Optional token that can be used to resolve value
 * @type {RegExp}
 */
export declare const TOKEN: RegExp;
/**
 * Default implementation of TokenProvider
 * @returns {RegExp}
 */
export declare const tokenProvider: TokenProvider;
/**
 * Default implementation of token cleanup while to see only token value e.g for '{token}' returns 'token'
 * @param {string} token
 * @returns {string}
 */
export declare const tokenExtractor: (token: string) => string;
/**
 * Default TokenResolver implementations which uses {#tokenExtractor}
 * @param data
 * @param token
 * @returns {*}
 */
export declare const tokenResolver: TokenResolver;
declare const _default: <T>(inputData: T) => Processor;
export default _default;
