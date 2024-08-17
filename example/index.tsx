import React from 'react';
import {render, Text} from 'ink';
import Color from '../source/index.js';

const link = 'blue.underline';
const error = 'bgRed.white';

render(
	<Text>
		<Color styles={link}>Unicorn</Color>
		<Color styles={error}>{' Error '}</Color>
	</Text>,
);
