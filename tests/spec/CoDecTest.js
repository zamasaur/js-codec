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

    it('expect(identityCoDec.encode("Hello World! 可愛的小貓")).toBe("Hello World! 可愛的小貓")', function () {
        expect(identityCoDec.encode("Hello World! 可愛的小貓")).toBe("Hello World! 可愛的小貓");
    });
    it('expect(identityCoDec.decode("Hello World! 可愛的小貓")).toBe("Hello World! 可愛的小貓")', function () {
        expect(identityCoDec.decode("Hello World! 可愛的小貓")).toBe("Hello World! 可愛的小貓");
    });
    it('expect(identityCoDec.decode("Hello World! 可愛的小貓")).toBe(identityCoDec.decode(identityCoDec.encode("Hello World! 可愛的小貓")))', function () {
        expect(identityCoDec.decode("Hello World! 可愛的小貓")).toBe(identityCoDec.decode(identityCoDec.encode("Hello World! 可愛的小貓")));
    });
    it('expect(identityCoDec.encode("Hello World! 可愛的小貓")).toBe(identityCoDec.encode(identityCoDec.decode("Hello World! 可愛的小貓")))', function () {
        expect(identityCoDec.encode("Hello World! 可愛的小貓")).toBe(identityCoDec.encode(identityCoDec.decode("Hello World! 可愛的小貓")));
    });
});

describe("testUrlCoDec", function () {

    var urlCoDec = new UrlCoDec();

    it('expect(urlCoDec.encode("Hello World! 可愛的小貓")).toBe("Hello%20World%21%20%E5%8F%AF%E6%84%9B%E7%9A%84%E5%B0%8F%E8%B2%93")', function () {
        expect(urlCoDec.encode("Hello World! 可愛的小貓")).toBe("Hello%20World%21%20%E5%8F%AF%E6%84%9B%E7%9A%84%E5%B0%8F%E8%B2%93");
    });
    it('expect(urlCoDec.decode("Hello%20World%21%20%E5%8F%AF%E6%84%9B%E7%9A%84%E5%B0%8F%E8%B2%93")).toBe("Hello World! 可愛的小貓")', function () {
        expect(urlCoDec.decode("Hello%20World%21%20%E5%8F%AF%E6%84%9B%E7%9A%84%E5%B0%8F%E8%B2%93")).toBe("Hello World! 可愛的小貓");
    });
    it('expect(urlCoDec.decode("Hello%20World%21%20%E5%8F%AF%E6%84%9B%E7%9A%84%E5%B0%8F%E8%B2%93")).toBe(urlCoDec.decode(urlCoDec.encode("Hello World! 可愛的小貓")))', function () {
        expect(urlCoDec.decode("Hello%20World%21%20%E5%8F%AF%E6%84%9B%E7%9A%84%E5%B0%8F%E8%B2%93")).toBe(urlCoDec.decode(urlCoDec.encode("Hello World! 可愛的小貓")));
    });
    it('expect(urlCoDec.encode("Hello World! 可愛的小貓")).toBe(urlCoDec.encode(urlCoDec.decode("Hello%20World%21%20%E5%8F%AF%E6%84%9B%E7%9A%84%E5%B0%8F%E8%B2%93")))', function () {
        expect(urlCoDec.encode("Hello World! 可愛的小貓")).toBe(urlCoDec.encode(urlCoDec.decode("Hello%20World%21%20%E5%8F%AF%E6%84%9B%E7%9A%84%E5%B0%8F%E8%B2%93")));
    });
});

describe("testBase64CoDec", function () {

    var base64CoDec = new Base64CoDec();

    it('expect(base64CoDec.encode("Hello World! 可愛的小貓")).toBe("SGVsbG8gV29ybGQhIOWPr-aEm-eahOWwj-iykw")', function () {
        expect(base64CoDec.encode("Hello World! 可愛的小貓")).toBe("SGVsbG8gV29ybGQhIOWPr-aEm-eahOWwj-iykw");
    });
    it('expect(base64CoDec.decode("SGVsbG8gV29ybGQhIOWPr-aEm-eahOWwj-iykw")).toBe("Hello World! 可愛的小貓")', function () {
        expect(base64CoDec.decode("SGVsbG8gV29ybGQhIOWPr-aEm-eahOWwj-iykw")).toBe("Hello World! 可愛的小貓");
    });
    it('expect(base64CoDec.decode("SGVsbG8gV29ybGQhIOWPr-aEm-eahOWwj-iykw")).toBe(base64CoDec.decode(base64CoDec.encode("Hello World! 可愛的小貓")))', function () {
        expect(base64CoDec.decode("SGVsbG8gV29ybGQhIOWPr-aEm-eahOWwj-iykw")).toBe(base64CoDec.decode(base64CoDec.encode("Hello World! 可愛的小貓")));
    });
    it('expect(base64CoDec.encode("Hello World! 可愛的小貓")).toBe(base64CoDec.encode(base64CoDec.decode("SGVsbG8gV29ybGQhIOWPr-aEm-eahOWwj-iykw")))', function () {
        expect(base64CoDec.encode("Hello World! 可愛的小貓")).toBe(base64CoDec.encode(base64CoDec.decode("SGVsbG8gV29ybGQhIOWPr-aEm-eahOWwj-iykw")));
    });
});

