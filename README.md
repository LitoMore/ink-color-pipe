# ink-color-pipe

> [chalk-pipe](https://github.com/LitoMore/chalk-pipe) component for [Ink 3](https://github.com/vadimdemedes/ink)

Create color text with simpler style strings in Ink

![](https://raw.githubusercontent.com/LitoMore/ink-color-pipe/master/screenshot.svg?sanitize=true)

For Ink 2, check [ink-color-pipe@1.0.0](https://www.npmjs.com/package/ink-color-pipe/v/1.0.0)

## Install

```bash
$ npm i ink-color-pipe
```

## Usage

This brings you a convenient way to use some color schemes.

<img src="https://raw.githubusercontent.com/LitoMore/ink-color-pipe/master/media/demo.jpg" width="105px"/>

```javascript
import React from 'react';
import {render, Text} from 'ink';
import Color from 'ink-color-pipe';

const link = 'blue.underline';
const error = 'bgRed.white';

render(
	<Text>
		<Color styles={link}>Unicorn</Color>
		<Color styles={error}>{' Error '}</Color>
	</Text>
);
```

## API

### `<Color>`

`<Color>` is using [`<Transfrom>`](https://github.com/vadimdemedes/ink#transform) for text rendering.

#### styles

Type: `string`

Use dot `.` to separeate multiple styles.

## Valid Styles

- [Modifiers](https://github.com/chalk/chalk#modifiers)
- [Colors](https://github.com/chalk/chalk#colors)
- [Background colors](https://github.com/chalk/chalk#background-colors)
- [Hex triplet](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet)
- [CSS keywords](https://www.w3.org/wiki/CSS/Properties/color/keywords)

## Related

- [chalk-pipe](https://github.com/LitoMore/chalk-pipe) - Create chalk style schemes with simpler style strings

## License

MIT © [LitoMore](https://github.com/LitoMore)
