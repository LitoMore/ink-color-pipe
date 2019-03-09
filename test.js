import test from 'ava';
import React from 'react';
import {render} from 'ink-testing-library';
import ColorPipe from '.';

test('render', t => {
	const {lastFrame} = render(
		<ColorPipe styles="dim.green.italic">
			Unicorn
		</ColorPipe>
	);
	console.log(lastFrame());
	t.snapshot(lastFrame());
});
