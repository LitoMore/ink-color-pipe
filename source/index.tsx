import React, {FunctionComponent, ReactNode} from 'react';
import {Transform} from 'ink';
import chalkPipe from 'chalk-pipe';

export type ColorProps = {
	styles?: string;
	children?: ReactNode;
};

const Color: FunctionComponent<ColorProps> = ({
	styles = '',
	children
}) => {
	return <Transform transform={chalkPipe(styles)}>{children}</Transform>;
};

export default Color;
