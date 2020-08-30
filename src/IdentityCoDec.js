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
	
	constructor() {
		super();
		this.encode.bind(this);
		this.decode.bind(this);
		Object.seal(this);
	}
	
	/**
	* Returns an encoded string.
	* 
	* @param {string} string 
	*/
	encode(string) {
		return string;
	}
	
	/**
	* Returns a decoded string.
	* 
	* @param {string} string 
	*/
	decode(string) {
		return string;
	}
};