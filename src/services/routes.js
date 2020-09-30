/*
The MIT License (MIT)

Written by Cody Ng <codyng1@gmail.com>
Copyright © 2020 Cody Ng

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHE
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import { Config } from '../common';
import { get, postJSON } from '../utils/requests';

const kHost = Config.routeAPI;

// all plain text errors
const kInternalServerError = 'Internal Server Error';
const kCritialErrors = [
    kInternalServerError,
    'Other Critial Error'
];

export const routeIsCritialError = (res) => {
    if (res == null) {
        res = kInternalServerError; // in case of res is null
    }
    if (typeof(res) !== 'string') {
        return false;
    }
    return kCritialErrors.includes(res);
};

export const routeGetToken = async (origin, destination) => {
    const params = {
        origin,
        destination
    };
    const url = `${kHost}/route`;

    // test
    // const url = `${kHost}/mock/route/500`;
    // const url = `${kHost}/mock/route/success`;

    const res = await postJSON(url, params);
    if (routeIsCritialError(res)) {
        return res;
    }
    return res;
};

export const routeGetWaypoints = async (token) => {
    const url = `${kHost}/route/${token}`;

    // test
    // const url = `${kHost}/mock/route/500`;
    // const url = `${kHost}/mock/route/inprogress`;
    // const url = `${kHost}/mock/route/failure`;
    // const url = `${kHost}/mock/route/success`;

    const res = await get(url, { cache: 'no-cache' });
    if (routeIsCritialError(res)) {
        return res;
    }
    return res;
};
