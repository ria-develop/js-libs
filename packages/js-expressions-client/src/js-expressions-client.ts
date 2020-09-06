import _ from 'lodash';
import evaluator, {Processor, TokenProvider, TokenResolver} from '@ria-develop/js-expressions-core';

/**
 * Optional token that can be used to resolve value
 * TODO: Implement method for resolving this kind of token
 * @type {RegExp}
 */
export const CONTENT_ONLY_TOKEN = /([^{]+(?=}))/g;

/**
 * Optional token that can be used to resolve value
 * @type {RegExp}
 */
export const TOKEN = /{[^[}]+}/g;

/**
 * Default implementation of TokenProvider
 * @returns {RegExp}
 */
export const tokenProvider: TokenProvider = (): RegExp => TOKEN;

/**
 * Default implementation of token cleanup while to see only token value e.g for '{token}' returns 'token'
 * @param {string} token
 * @returns {string}
 */
export const tokenExtractor = (token: string): string => token.replace(/[{}]/g, '');

/**
 * Default TokenResolver implementations which uses {#tokenExtractor}
 * @param data
 * @param token
 * @returns {any}
 */
export const tokenResolver: TokenResolver = (data, token) => _.get(data, tokenExtractor(token));

export default <T>(inputData: T): Processor => evaluator(inputData, tokenProvider, tokenResolver);
