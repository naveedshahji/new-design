import * as path from 'path';
import {configure as configureLoggers, getLogger as _getLogger, Logger} from 'log4js';

export const ROOT_PATH = path.resolve(__dirname + '../..');

export function getFilePath(relPath: string) {
    return path.resolve(ROOT_PATH + relPath);
}

export function* iterateMutable(obj: any) {
    if (_.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            yield {value: obj[i], key: i};
        }
    } else if (_.isObject(obj)) {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                yield {value: obj[prop], key: prop};
            }
        }
    } else {
        throw new Error('Wrong argument type in iterateMutable(). Should be array or object');
    }
}

export async function asyncForEach<T>(array: T[], callback: (this: void, value: T, index: number, array: T[]) => void) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

declare global {
    interface Number {
        pad(size?: number): string;
    }
}

Number.prototype.pad = function (size = 2) {
    let s = String(this);
    while (s.length < (size || 2)) {
        s = '0' + s;
    }
    return s;
};

export function delayPromise<T>(value: T | Promise<T>, delay: number): Promise<T> {
    return new Promise((resolve) => setTimeout(() => {
        if (value instanceof Promise) {
            (<Promise<T>>value).then((result: T) => {
                resolve(result);
            });
        } else {
            resolve(value);
        }
    }, delay));
}

export class DataHelper {
    static genId(): string {
        return Math.random().toString(36).slice(2);
    }

    static genBoolean(trueStrengthening = 1): boolean {
        return _.sample(_.concat(_.fill(Array(trueStrengthening || 1), 1), 0)) ? true : false;
    }

    static genDate(forward = 0 ): Date {
        const date = new Date();
        return new Date(date.getFullYear(),
            date.getMonth() + _.random(-24, forward),
            date.getDate() + _.random(-10, forward ? 10 : 0),
                _.random(23), _.random(59), _.random(59));
    }

    static dateOnlyFromDate(date = new Date()): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    static lastDayDate(date = new Date()) {
        return DataHelper.dateOnlyFromDate(new Date(date.getFullYear(), date.getMonth() + 1, 0, 1, 0, 0, 0));
    }

    static genDateOnly(forward = 0): Date {
        return this.dateOnlyFromDate(this.genDate(forward));
    }

    static addMonths(date: Date, v: number): Date {
        const _date = new Date(date.getTime());
        _date.setMonth(date.getMonth() + v);
        return _date;
    }

    static addDays(date: Date, v: number): Date {
        const _date = new Date(date.getTime());
        _date.setDate(date.getDate() + v);
        return _date;
    }

    static addHours(date: Date, v: number): Date {
        const _date = new Date(date.getTime());
        _date.setHours(date.getHours() + v);
        return _date;
    }

    static addMinutes(date: Date, v: number): Date {
        const _date = new Date(date.getTime());
        _date.setMinutes(date.getMinutes() + v);
        return _date;
    }

    static genPct(base = 100, fractionDigits = 2): number {
        let val = _.random(1, 100, true);
        if (base !== 100) {
            val /= 100;
        }
        return +val.toFixed(fractionDigits);
    }

    static genCurrency(): number {
        return _.random(10000, 100000);
    }

    static genYesNo(): 'Yes' | 'No' {
        return _.random(0, 1) ? 'No' : 'Yes';
    }

    static yearQuarterArray(years: number) {
        return _.range(4 * years).map((n) => (2018 - years + Math.floor(n / 4)) + ' - ' + 'Q' + (n % 4 + 1));
    }

    static genCount(m = 100) {
        return _.random(m, m * 10);
    }

    static getPeriodFromDate(date: Date) {
        const m = Math.ceil((date.getMonth() + 1) / 3);
        const y = date.getFullYear();
        return `${y}-Q${m}`;
    }
}

configureLoggers({
    appenders: {out: {type: 'stdout'}},
    categories: {default: {appenders: ['out'], level: 'trace'}}
});

export function getLogger(category?: string): Logger {
    return _getLogger(category);
}
