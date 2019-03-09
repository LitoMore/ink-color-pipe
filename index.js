import React from 'react';
import {Text} from 'ink';
import PropTypes from 'prop-types';
import chalkPipe from 'chalk-pipe';

const ColorPipe = props => {
	return (
		<Text unstable__transformChildren={children => chalkPipe(props.styles)(children)}>
			{props.children}
		</Text>
	);
};

ColorPipe.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	styles: PropTypes.string
};

ColorPipe.defaultProps = {
	styles: ''
};

module.exports = ColorPipe;
