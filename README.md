# ink-color-pipe

> [chalk-pipe](https://github.com/LitoMore/chalk-pipe) component for [Ink 5](https://github.com/vadimdemedes/ink)

Create color text with simpler style strings in Ink

![](https://raw.githubusercontent.com/LitoMore/ink-color-pipe/master/screenshot.svg?sanitize=true)

## Install

```bash
$ npm i ink-color-pipe
```

## Usage

This brings you a convenient way to use some color schemes.

<img src="https://raw.githubusercontent.com/LitoMore/ink-color-pipe/master/media/demo.jpg" width="105px"/>

```javascript
import React from "react";
import { render, Text } from "ink";
import Color from "ink-color-pipe";

const link = "blue.underline";
const error = "bgRed.white";

render(
	<Text>
		<Color styles={link}>Unicorn</Color>
		<Color styles={error}>{" Error "}</Color>
	</Text>,
);
```

## Built-in Chalk

All Chalk and `chalk-pipe` exported functions, variables, and declarations are exposed for convenience.

This can be useful if you want to use `chalk` directly.

```js
import { Chalk, chalk, chalkPipe } from "ink-color-pipe";

const customChalk = new Chalk({ level: 0 });

console.log(chalk.blue("Hello"));
console.log(customChalk.green("World"));

console.log(chalkPipe("blue.bgGreen.italic")("Hello World"));
```

## API

### `<Color>`

`<Color>` is using [`<Transform>`](https://github.com/vadimdemedes/ink#transform) for text rendering.

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

MIT
