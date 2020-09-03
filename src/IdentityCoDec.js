/**
* A package to encode and decode strings.
* @module @zamasaur/js-codec
*/

import { CoDec } from "./CoDec.js";

/**
* Represents CoDec that doens't alter the string.
* @extends CoDec
*/
export class IdentityCoDec extends CoDec {
	
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		Object.seal(this);
	}
	
	/** @inheritdoc */
	encode(string) {
		return string;
	}
	
	/** @inheritdoc */
	decode(string) {
		return string;
	}
};