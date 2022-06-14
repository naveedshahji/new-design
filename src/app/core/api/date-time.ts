
export class DateTime {
    static nowDateOnly() {
        let date = new Date();
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return date;
    }


    static dateOnly(date: Date): Date {
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return date;
    }

    static convertOutputDate(date: Date, fmt: 'full' | 'dateOnly' | 'usDate' = 'full'): string {
        const pad = (n: number, size = 2) => {
            let s = String(n);
            while (s.length < (size || 2)) {
                s = '0' + s;
            }
            return s;
        };
        let dateAsStr: string;
        if (fmt === 'dateOnly') {
            dateAsStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
        } else if (fmt === 'usDate') {
            dateAsStr = `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()}`;
        } else {
            let d = date;
            if (date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0) { // Date part only
                d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
            }
            dateAsStr = d.toISOString();
        }
        // console.warn('OUT:', date, dateAsStr);
        return dateAsStr;
    }
}
