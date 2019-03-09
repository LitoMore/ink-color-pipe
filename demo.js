import React from 'react';
import {render} from 'ink';
import ColorPipe from '.';

function toHex(i) {
	return (i + 0x000001).toString(16).substr(-6).padStart(6, '0');
}

class Unicorn extends React.Component {
	constructor() {
		super();
		this.state = {
			color: 0x000000
		};
	}

	componentDidMount() {
		this.changeColor();
	}

	changeColor() {
		if (this.state.color < 0xFFFFFF) {
			this.setState(prevState => {
				return	{color: prevState.color + 1};
			});
		}

		setTimeout(() => {
			this.changeColor();
		}, 1);
	}

	render() {
		const {color} = this.state;

		return (
			<ColorPipe styles={`#${toHex(color)}`}>
				#{toHex(this.state.color)}
			</ColorPipe>
		);
	}
}

render(<Unicorn/>);
