import _ from 'lodash';
import evaluator, {Processor, TokenProvider, TokenResolver} from '@ria-develop/js-expressions-core';

export const CONTENT_ONLY_TOKEN = /([^{]+(?=}))/g;

export const TOKEN = /{[^[}]+}/g;

export const tokenProvider: TokenProvider = (): RegExp => TOKEN;

export const tokenExtractor = (token: string): string => token.replace(/[{}]/g, '');

export const tokenResolver: TokenResolver = (data, token) => _.get(data, tokenExtractor(token));

export default <T>(inputData: T): Processor => evaluator(inputData, tokenProvider, tokenResolver);
