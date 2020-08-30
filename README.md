# js-codec

A package to encode and decode strings.

## Requirements

JS >=ES6

## Installation

Let the folder structure of your project look like the one described below.

```
root/
	bin/
	config/
	docs/
	public/
	resources/
	src/
		index.js
	tests/
	node_modules/
```

To install this package via npm you must add it to your `package.json` file in the root of your project. 

```json
/* package.json */
{
	"name": "@myname/myproject",
	"type": "module",
	"dependencies": {
		"@zamasaur/js-codec": "https://github.com/zamasaur/js-codec.git"
	}
}
```

You can now install the dependencies by running nmp's install command.
```
$ npm install
```

To use it you must include this line inside your `index.js`:

```js
import { CoDec } from "../node_modules/@zamasaur/js-codec/src/CoDec.js";
import { IdentityCoDec } from "../node_modules/@zamasaur/js-codec/src/IdentityCoDec.js";
import { Base64CoDec } from "../node_modules/@zamasaur/js-codec/src/Base64CoDec.js";
import { UrlCoDec } from "../node_modules/@zamasaur/js-codec/src/UrlCoDec.js";
```

## Usage

You can use classes that implement `CoDec` interface to encode and decode strings.
Some implementation are already provided with this package:

* `UrlCoDec`

* `Base64CoDec`

Example:

```js
/* index.js */
import { CoDec } from "../node_modules/@zamasaur/js-codec/src/CoDec.js";
import { IdentityCoDec } from "../node_modules/@zamasaur/js-codec/src/IdentityCoDec.js";
import { Base64CoDec } from "../node_modules/@zamasaur/js-codec/src/Base64CoDec.js";
import { UrlCoDec } from "../node_modules/@zamasaur/js-codec/src/UrlCoDec.js";

urlCoDec = new UrlCoDec();
urlEncodedString = urlCoDec.encode("Hello World!");
urlDecodedString = urlCoDec.decode("Hello%20World%21");

base64CoDec = new Base64CoDec();
base64EncodedString = base64CoDec.encode("Hello World!");
base64DecodedString = base64CoDec.decode("SGVsbG8gV29ybGQh");
```

## UnitTest

This package comes with a series of UnitTest, to run them you must use the following command in a terminal.

```
$ "start """" http://path/to/tests/SpecRunner.html" | cmd
```

## JSDoc

This package comply with the JSDoc standard, to generate them you must use the following command in a terminal opened in the root folder.

```
$ ./node_modules/.bin/jsdoc -r ./src/ -d ./docs/api
```
