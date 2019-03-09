import React from 'react';
import {render} from 'ink';
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
				return	{color: prevState.color + 0x00010};
			});
		}

		setTimeout(() => {
			this.changeStyle();
		}, 1);
	}

	render() {
		const {color} = this.state;
		const modifiers = ['bold', 'underline', 'reverse', 'italic', 'strikethrough'];

		return (
			<ColorPipe styles={`#${toHex(color)}.${modifiers[color % modifiers.length]}`}>
				#{toHex(this.state.color)}
			</ColorPipe>
		);
	}
}

render(<Unicorn/>);
