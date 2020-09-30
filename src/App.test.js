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
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import GoogleMap from './components/GoogleMap';

import { Config } from './common';
import { get, postJSON } from './utils/requests';
import { routeGetToken, routeGetWaypoints } from './services/routes';
import { geocodeAddress, geocodeLatLng } from './utils/googlemap';

const kHost = Config.routeAPI;
const origin = 'Innocentre, Hong Kong';
const destination = 'Hong Kong International Airport Terminal 1';

it('mock api POST /mock/route/500', () => {
    const url = `${kHost}/mock/route/500`;
    return expect(postJSON(url, origin, destination)).resolves.toEqual('Internal Server Error');
});

it('mock api POST /mock/route/success', () => {
    const url = `${kHost}/mock/route/success`;
    return expect(postJSON(url, origin, destination)).resolves.toEqual({ token: '9d3503e0-7236-4e47-a62f-8b01b5646c16' });
});

it('mock api GET /mock/route/500', () => {
    const url = `${kHost}/mock/route/500`;
    return expect(get(url)).resolves.toEqual('Internal Server Error');
});

it('mock api GET /mock/route/inprogress', () => {
    const url = `${kHost}/mock/route/inprogress`;
    return expect(get(url)).resolves.toEqual({ status: 'in progress' });
});

it('mock api GET /mock/route/failure', () => {
    const url = `${kHost}/mock/route/failure`;
    return expect(get(url)).resolves.toEqual({ status: 'failure', error: 'Location not accessible by car' });
});

it('mock api GET /mock/route/success', () => {
    const url = `${kHost}/mock/route/success`;
    return expect(get(url)).resolves.toEqual({
        status: 'success',
        path: [
            ['22.372081', '114.107877'],
            ['22.326442', '114.167811'],
            ['22.284419', '114.159510']
          ],
          total_distance: 20000,
          total_time: 1800
    });
});
