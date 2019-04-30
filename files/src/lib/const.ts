/**
 * Created by user on 2019/1/13/013.
 */

// @ts-ignore
export const production: boolean = process.env.NODE_ENV === 'production';
export const development = !production;
