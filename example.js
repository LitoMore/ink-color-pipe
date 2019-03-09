'use strict';

const React = require('react');
const {render} = require('ink');
const ColorPipe = require('.');

render(React.createElement(ColorPipe, {styles: 'orange.bold.underline'}, 'Unicorn'));
