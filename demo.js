import React from 'react';
import {render} from 'ink';
import {normalColors} from 'chalk-pipe/styles';
import ColorPipe from '.';

function toHex(i) {
	return (i).toString(16).substr(-6).padStart(6, '0');
}

class Unicorn extends React.Component {
	constructor() {
		super();
		this.state = {
			color: 0x000000
		};
	}

	componentDidMount() {
		this.changeStyle();
	}

	changeStyle() {
		if (this.state.color < 0xFFFFFF) {
			this.setState(prevState => {
				return	{color: prevState.color + 0x00011};
			});
		}

		setTimeout(() => {
			this.changeStyle();
		}, 500);
	}

	render() {
		const {color} = this.state;
		const modifiers = ['bold', 'underline', 'reverse', 'italic', 'strikethrough'];
		const styles = [
			`#${toHex(color)}`,
			`${modifiers[color % modifiers.length]}`,
			`bg${normalColors[color % normalColors.length]}`
		].join('.');

		return (
			<ColorPipe styles={styles}>
				{styles.padEnd(40, ' ').padStart(50, ' ')}
			</ColorPipe>
		);
	}
}

render(<Unicorn/>);
