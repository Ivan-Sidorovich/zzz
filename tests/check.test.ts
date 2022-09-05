import { describe, expect, test } from '@jest/globals';
import Check from "../src/check";


describe("Check сlass", () => {

    const invalidUa = [" ", "123", "qwerety", "UA", "абв"];

    const uaListIos = [
        "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1",
        "AppleCoreMedia/1.0.0.19F77 (iPhone; U; CPU OS 15_5 like Mac OS X; nl_nl)",
        "Mozilla/5.0 (iPad; CPU OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/103.0.5060.63 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPad; CPU OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/16A366 Safari/E7FBAF",
        "Mozilla/5.0 (iPad; CPU OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.3 Mobile/18C66 Safari/E7FBAF",
        "AppleCoreMedia/1.0.0.16H62 (iPod touch; U; CPU OS 12_5_5 like Mac OS X; nl_nl)",
        "AppleCoreMedia/1.0.0.19F77 (iPod touch; U; CPU OS 15_5 like Mac OS X; en_gb)",
        "Mozilla/5.0 (iPod touch; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_25.3.0 JsSdk/2.0 NetType/WIFI Channel/App Store ByteLocale/en Region/US ByteFullLocale/en isDarkMode/0 WKWebView/1 BytedanceWebview/d8a21c6 FalconTag/",
        "Mozilla/5.0 (iPod touch; CPU iPhone OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12F69 (iPod5,1) OKiOS/6.30.2 OKApp",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 245.0.0.13.110 (iPhone11,8; iOS 15_5; en_US; en-US; scale=2.00; 828x1792; 384816942) NW/3",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/19G71 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/15.6;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5]",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 243.1.0.14.111 (iPhone9,3; iOS 15_5; pt_BR; pt-BR; scale=2.00; 750x1334; 382468104)"
    ];

    const uaListAndroid = [
        "Mozilla/5.0 (Linux; Android 9; BDL8051C Build/BDL3552T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.158 Safari/537.36",
        "Mozilla/5.0 (Linux; Android 12; SM-G991U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 12; moto g stylus 5G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 7.1.2; Redmi 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.101 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 10; PPA-LX2; HMSCore 6.6.0.331) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.105 HuaweiBrowser/12.1.0.303 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 5.1.1; Lenovo A6020a40) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36",
        "CastBox/9.1.4-220711225 (Linux;Android 12) ExoPlayerLib/2.10.4",
        "Mozilla/5.0 (Linux; Android 8.0.0; SAMSUNG SM-A520F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/17.0 Chrome/96.0.4664.104 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 11; Redmi Note 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36",
        "Mozilla/5.0 (Android 9; Mobile; rv:102.0) Gecko/102.0 Firefox/102.0",
        "Mozilla/5.0 (Linux; Android 11; ONEPLUS A6013) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 11; moto g pure) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36"
    ];

    test("number", () => {
        expect(Check.type.number(new Number(5))).toBe(false);
        expect(Check.type.number("5")).toBe(false);
        expect(Check.type.number(null)).toBe(false);
        expect(Check.type.number({})).toBe(false);
        expect(Check.type.number([])).toBe(false);
        expect(Check.type.number(5)).toBe(true);
        expect(Check.type.number(-5)).toBe(true);
        expect(Check.type.number(5.5)).toBe(true);
        expect(Check.type.number(-5.5)).toBe(true);
    });

    test("string", () => {
        expect(Check.type.string("")).toBe(true);
        expect(Check.type.string(" ")).toBe(true);
        expect(Check.type.string("qwerty")).toBe(true);
        expect(Check.type.string(5)).toBe(false);
        expect(Check.type.string([])).toBe(false);
        expect(Check.type.string({})).toBe(false);
        expect(Check.type.string(new String("123"))).toBe(false);
    });

    test("function", () => {
        expect(Check.type.function(function () { })).toBe(true);
        expect(Check.type.function(function x() { })).toBe(true);
        expect(Check.type.function(() => { })).toBe(true);
        expect(Check.type.function(new Function(""))).toBe(true);
        expect(Check.type.function(null)).toBe(false);
        expect(Check.type.function({})).toBe(false);
        expect(Check.type.function([])).toBe(false);
    });

    test("null", () => {
        expect(Check.type.null(null)).toBe(true);
        expect(Check.type.null(undefined)).toBe(true);
        expect(Check.type.null("")).toBe(false);
        expect(Check.type.null(NaN)).toBe(false);
        expect(Check.type.null(0)).toBe(false);
        expect(Check.type.null([])).toBe(false);
        expect(Check.type.null({})).toBe(false);
        expect(Check.type.null(false)).toBe(false);
    });

    test("object", () => {
        expect(Check.type.object({})).toBe(true);
        expect(Check.type.object({ a: 1 })).toBe(true);
        expect(Check.type.object(new Object())).toBe(true);
        expect(Check.type.object(new String())).toBe(true);
        expect(Check.type.object(new Number())).toBe(true);
        expect(Check.type.object([])).toBe(false);
        expect(Check.type.object("")).toBe(false);
        expect(Check.type.object(1)).toBe(false);
        expect(Check.type.object(null)).toBe(false);
    });

    test("array", () => {
        expect(Check.type.array([])).toBe(true);
        expect(Check.type.array([1, 2])).toBe(true);
        expect(Check.type.array(new Array())).toBe(true);
        expect(Check.type.array(Array())).toBe(true);
        expect(Check.type.array({})).toBe(false);
        expect(Check.type.array("")).toBe(false);
    });

    test("strict object", () => {
        expect(Check.type.strictObject({})).toBe(true);
        expect(Check.type.strictObject({ a: 1 })).toBe(true);
        expect(Check.type.strictObject(new Object())).toBe(true);
        expect(Check.type.strictObject(new Number())).toBe(false);
        expect(Check.type.strictObject(new String())).toBe(false);
        expect(Check.type.strictObject([])).toBe(false);
        expect(Check.type.strictObject(null)).toBe(false);
    });

    test("html element", () => {
        expect(Check.type.htmlElement(document.createElement("div"))).toBe(true);
        expect(Check.type.htmlElement(document.createElement("video"))).toBe(true);
        expect(Check.type.htmlElement(document.createElement("span"))).toBe(true);
        expect(Check.type.htmlElement(document.createElement("iframe"))).toBe(true);
        expect(Check.type.htmlElement(document.body)).toBe(true);
        expect(Check.type.htmlElement(document)).toBe(true);
        expect(Check.type.htmlElement({})).toBe(false);
        expect(Check.type.htmlElement(null)).toBe(false);
        expect(Check.type.htmlElement(undefined)).toBe(false);
        expect(Check.type.htmlElement(document.createComment("qwerty"))).toBe(false);
    });

    test("empty object", () => {
        expect(Check.data.isEmptyObject({})).toBe(true);
        expect(Check.data.isEmptyObject({ a: 1 })).toBe(false);
        expect(Check.data.isEmptyObject(new Object())).toBe(true);
        expect(Check.data.isEmptyObject([])).toBe(false);
        expect(Check.data.isEmptyObject([1, 2, 3])).toBe(false);
        expect(Check.data.isEmptyObject(function () { })).toBe(false);
    });

    test("empty string", () => {
        expect(Check.data.isEmptyString("")).toBe(true);
        expect(Check.data.isEmptyString(" ")).toBe(false);
        expect(Check.data.isEmptyString("\n")).toBe(false);
        expect(Check.data.isEmptyString(new String())).toBe(true);
        expect(Check.data.isEmptyString(new String("1"))).toBe(true);
        expect(Check.data.isEmptyString({})).toBe(true);
        expect(Check.data.isEmptyString([])).toBe(true);
        expect(Check.data.isEmptyString(1)).toBe(true);
    });

    test("check ios ua", () => {

        for (const ua of uaListIos)
            expect(Check.os.IOS(ua)).toBe(true);

        for (const ua of uaListAndroid)
            expect(Check.os.IOS(ua)).toBe(false);

        for (const ua of invalidUa)
            expect(Check.os.IOS(ua)).toBe(false);

    });

    test("check android ua", () => {

        for (const ua of uaListAndroid)
            expect(Check.os.android(ua)).toBe(true);

        for (const ua of uaListIos)
            expect(Check.os.android(ua)).toBe(false);

        for (const ua of invalidUa)
            expect(Check.os.android(ua)).toBe(false);

    });

});
