/**
* A package to encode and decode strings.
* @module @zamasaur/js-codec
*/

/**
* Represents a CoDec to encode and decode strings.
*/
export class CoDec {
	
	constructor() {
		if (this.constructor.name === "CoDec") {
			throw new Error("Cannot instantiate an interface.");
		}
	}
	
	/**
	* Returns an encoded string.
	*
	* @param {string} string
	*
	* @returns {string}
	*/
	encode(string) {}
	
	/**
	* Returns a decoded string.
	*
	* @param {string} string
	*
	* @returns {string}
	*/
	decode(string) {}
}
