# ink-color-pipe [![](https://img.shields.io/travis/LitoMore/ink-color-pipe/master.svg)](https://travis-ci.org/LitoMore/ink-color-pipe)

> [chalk-pipe](https://github.com/LitoMore/chalk-pipe) component for [Ink](https://github.com/vadimdemedes/ink)

Create color text with simpler style strings in Ink

![](https://raw.githubusercontent.com/LitoMore/ink-color-pipe/master/screenshot.svg?sanitize=true)

## Install

```bash
$ npm i ink-color-pipe
```

## Usage

```javascript
import React from 'react';
import {render} from 'ink';
import ColorPipe from 'ink-color-pipe';

render(
	<ColorPipe styles="orange.bold.underline">
		Unicorn
	</ColorPipe>
);
```

## API

### `<ColorPipe>`

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
