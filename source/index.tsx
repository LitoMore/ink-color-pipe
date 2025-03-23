import React, {type ReactNode} from 'react';
import {Transform} from 'ink';
import chalkPipe from 'chalk-pipe';

export {default as chalkPipe} from 'chalk-pipe';
export * from 'chalk-pipe';

// eslint-disable-next-line unicorn/prevent-abbreviations
export type ColorProps = {
	readonly styles?: string;
	readonly children?: ReactNode;
};

function Color({
	styles = '',
	children,
}: ColorProps) {
	return <Transform transform={text => chalkPipe(styles)(text)}>{children}</Transform>;
}

export default Color;
