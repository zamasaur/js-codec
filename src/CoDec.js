/**
* A package to encode and decode strings.
* @module @zamasaur/js-codec
*/

/**
* Represents a CoDec to encode and decode strings.
*/
export class CoDec {

	constructor() {
		Object.seal(this);
		if (this.constructor.name === "CoDec") {
			throw new Error("Cannot instantiate an interface.");
		}
		this.encode.bind(this);
		this.decode.bind(this);
	}

	/**
	* Returns an encoded string.
	*
	* @param {string} string
	*/
	encode(string) {
		return "";
	}

	/**
	* Returns a decoded string.
	*
	* @param {string} string
	*/
	decode(string) {
		return "";
	}
}
