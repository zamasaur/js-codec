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
	
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		Object.seal(this);
	}
	
	/** @inheritdoc */
	encode(string) {
		string = this._b64EncodeUnicode(string);
		string = string.replace(/\+/gm, "-", string);
		string = string.replace(/\//gm, "_", string);
		string = string.replace(/=/gm, "", string);
		return string;
	}
	
	/** @inheritdoc */
	decode(string) {
		string = string.replace(/ /gm, "", string);
		string = string.replace(/_/gm, "/", string);
		string = string.replace(/-/gm, "+", string);
		string = this._b64DecodeUnicode(string);
		return string;
	}
	
	_b64EncodeUnicode(string) {
		var string = string.replace(/"/g,'\\"');
		return btoa(encodeURIComponent(string).replace(/%([0-9A-F]{2})/g,
		function toSolidBytes(match, p1) {
			return String.fromCharCode('0x' + p1);
		}));
	}
	
	_b64DecodeUnicode(string) {
		return decodeURIComponent(atob(string).split('').map(function (c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
	}
}
