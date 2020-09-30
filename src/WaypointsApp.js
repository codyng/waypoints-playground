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
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CssBaseline, Box, Backdrop, AppBar, Toolbar, IconButton, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';

import { Config } from './common';
import { SideBar, GoogleMap } from './containers';
import Alert from './components/Alert';
import { routeIsCritialError, routeGetToken, routeGetWaypoints } from './services/routes';
import { rootActions } from './redux/RootRedux';
import { breakPointsInit } from './utils/breakPoints';

const App = () => {
    return (
        <div>WaypointsApp</div>
    );
};

export default App;

const useStyles = makeStyles(theme => ({
}));
