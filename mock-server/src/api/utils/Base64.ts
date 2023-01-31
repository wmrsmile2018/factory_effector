import {Buffer} from 'buffer';

export const Base64 = {
    /**
     * Кодирует строку в base64
     * @param input
     */
    btoa: (input = ''): string => Buffer.from(input, 'utf8').toString('base64'),

    /**
     * декодирует строку из base64
     * @param input
     */
    atob: (input = ''): string => Buffer.from(input, 'base64').toString('utf8'),
};
