/**
* A package to encode and decode strings.
* @module @zamasaur/js-codec
*/

import { CoDec } from "./CoDec.js";

/**
* Represents a URL CoDec to encode and decode strings.
* As specified in RFC 3986.
* @extends CoDec
*/
export class UrlCoDec extends CoDec {
	
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		Object.seal(this);
	}
	
	/** @inheritdoc */
	encode(string) {
		var string = string.replace(/"/g,'\\"');
		return encodeURIComponent(string + "")
		.replace(/!/g, '%21')
		.replace(/'/g, '%27')
		.replace(/\(/g, '%28')
		.replace(/\)/g, '%29')
		.replace(/\*/g, '%2A');
	}
	
	/** @inheritdoc */
	decode(string) {
		return decodeURIComponent((string + "")
		.replace(/%(?![\da-f]{2})/gi, function () {
			return '%25'
		}));
	}
}
