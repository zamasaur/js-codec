/**
* A package to encode and decode strings.
* @module @zamasaur/js-codec
*/

import { CoDec } from "./CoDec.js";

/**
* Represents a base64 CoDec to encode and decode strings.
* As specified here: {@link http://jb64.org}.
*
* @extends CoDec
*/
export class Base64CoDec extends CoDec {
	
	constructor() {
		super();
		Object.seal(this);
		this.encode.bind(this);
		this.decode.bind(this);
	}
	
	/**
	* Returns an encoded string.
	*
	* @param {string} string
	*/
	encode(string) {
		string = Base64CoDec._b64EncodeUnicode(string);
		string = string.replace("+", "-", string);
		string = string.replace("/", "_", string);
		string = string.replace("=", "", string);
		return string;
	}
	
	/**
	* Returns a decoded string.
	*
	* @param {string} string
	*/
	decode(string) {
		string = string.replace(" ", "", string);
		string = string.replace("_", "/", string);
		string = string.replace("-", "+", string);
		string = Base64CoDec._b64DecodeUnicode(string);
		return string;
	}
	
	static _b64EncodeUnicode(string) {
		return btoa(encodeURIComponent(string).replace(/%([0-9A-F]{2})/g,
		function toSolidBytes(match, p1) {
			return String.fromCharCode('0x' + p1);
		}));
	}
	
	static _b64DecodeUnicode(string) {
		return decodeURIComponent(atob(string).split('').map(function (c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
	}
}
