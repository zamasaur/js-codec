import { CoDec } from "../../src/CoDec.js";
import { IdentityCoDec } from "../../src/IdentityCoDec.js";
import { Base64CoDec } from "../../src/Base64CoDec.js";
import { UrlCoDec } from "../../src/UrlCoDec.js";

describe("testCoDec", function () {

    try {
        var coDec = new CoDec();
    } catch (error) {
        it('expect(error.message).toBe("Cannot instantiate an interface.")', function () {
            expect(error.message).toBe("Cannot instantiate an interface.");
        });
    }
});

describe("testIdentityCoDec", function () {

    var identityCoDec = new IdentityCoDec();

    it('expect(identityCoDec.encode("Hello World!")).toBe("Hello World!")', function () {
        expect(identityCoDec.encode("Hello World!")).toBe("Hello World!");
    });
    it('expect(identityCoDec.decode("Hello World!")).toBe("Hello World!")', function () {
        expect(identityCoDec.decode("Hello World!")).toBe("Hello World!");
    });
    it('expect(identityCoDec.decode("Hello World!")).toBe(identityCoDec.decode(identityCoDec.encode("Hello World!")))', function () {
        expect(identityCoDec.decode("Hello World!")).toBe(identityCoDec.decode(identityCoDec.encode("Hello World!")));
    });
    it('expect(identityCoDec.encode("Hello World!")).toBe(identityCoDec.encode(identityCoDec.decode("Hello World!")))', function () {
        expect(identityCoDec.encode("Hello World!")).toBe(identityCoDec.encode(identityCoDec.decode("Hello World!")));
    });
});

describe("testUrlCoDec", function () {

    var urlCoDec = new UrlCoDec();

    it('expect(urlCoDec.encode("Hello World!")).toBe("Hello%20World%21")', function () {
        expect(urlCoDec.encode("Hello World!")).toBe("Hello%20World%21");
    });
    it('expect(urlCoDec.decode("Hello%20World%21")).toBe("Hello World!")', function () {
        expect(urlCoDec.decode("Hello%20World%21")).toBe("Hello World!");
    });
    it('expect(urlCoDec.decode("Hello%20World%21")).toBe(urlCoDec.decode(urlCoDec.encode("Hello World!")))', function () {
        expect(urlCoDec.decode("Hello%20World%21")).toBe(urlCoDec.decode(urlCoDec.encode("Hello World!")));
    });
    it('expect(urlCoDec.encode("Hello World!")).toBe(urlCoDec.encode(urlCoDec.decode("Hello%20World%21")))', function () {
        expect(urlCoDec.encode("Hello World!")).toBe(urlCoDec.encode(urlCoDec.decode("Hello%20World%21")));
    });
});

describe("testBase64CoDec", function () {

    var base64CoDec = new Base64CoDec();

    it('expect(base64CoDec.encode("Hello World!")).toBe("SGVsbG8gV29ybGQh")', function () {
        expect(base64CoDec.encode("Hello World!")).toBe("SGVsbG8gV29ybGQh");
    });
    it('expect(base64CoDec.decode("SGVsbG8gV29ybGQh")).toBe("Hello World!")', function () {
        expect(base64CoDec.decode("SGVsbG8gV29ybGQh")).toBe("Hello World!");
    });
    it('expect(base64CoDec.decode("SGVsbG8gV29ybGQh")).toBe(base64CoDec.decode(base64CoDec.encode("Hello World!")))', function () {
        expect(base64CoDec.decode("SGVsbG8gV29ybGQh")).toBe(base64CoDec.decode(base64CoDec.encode("Hello World!")));
    });
    it('expect(base64CoDec.encode("Hello World!")).toBe(base64CoDec.encode(base64CoDec.decode("SGVsbG8gV29ybGQh")))', function () {
        expect(base64CoDec.encode("Hello World!")).toBe(base64CoDec.encode(base64CoDec.decode("SGVsbG8gV29ybGQh")));
    });
});

