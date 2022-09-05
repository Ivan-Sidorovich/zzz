class Types {

    public static number(something: any): boolean {
        return typeof something === "number";
    }

    public static string(something: any): boolean {
        return typeof something === "string";
    }

    public static function(something: any): boolean {
        return typeof something === "function";
    }

    public static null(something: any): boolean {
        return something === null || something === undefined;
    }

    public static object(something: any): boolean {
        return (
            typeof something === "object" &&
            !Types.array(something) &&
            !Types.null(something)
        );
    }

    public static array(something: any): boolean {
        return Array.isArray(something);
    }

    public static strictObject(something: any): boolean {
        return Object.prototype.toString.call(something) === "[object Object]";
    }

    public static htmlElement(htmlObj: any): boolean {
        try {
            return htmlObj instanceof HTMLElement || htmlObj instanceof HTMLDocument;
        } catch (e) {
            return (
                (typeof htmlObj === "object") &&
                (htmlObj.nodeType === 1) &&
                (typeof htmlObj.style === "object") &&
                (typeof htmlObj.ownerDocument === "object")
            );
        }
    }

}

class Data {

    public static isEmptyObject(obj: object): boolean {
        if (!Types.object(obj)) return false;

        for (const _ in obj) {
            return false;
        }
        return true;
    }

    public static isEmptyString(str: any): boolean {
        return (Types.string(str) && str.length > 0) ? false : true;
    }

}

class OS {

    public static IOS(UA?: string): boolean {
        const ua: string = UA || window.navigator.userAgent;
        return /iphone|ipod|ipad/.test(ua.toLowerCase());
    }

    public static android(UA?: string): boolean {
        const ua: string = UA || window.navigator.userAgent;
        return /android/.test(ua.toLowerCase());
    }

}

class Check {

    public static type = Types;
    public static data = Data;
    public static os = OS;

}

export default Check;  