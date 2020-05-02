export function dateValidation(row: any, date: {[key: string]: number}) {
    const restrictions: any = {
        year: {
            min: 2015,
            max: 2099
        },
        month: {
            min: 1,
            max: 12
        },
        day: {
            min: 1,
            max: 31
        }
    }

    Object.keys(date).forEach((key: string) => {
        const val = date[key];
        const min = restrictions[key].min;
        const max = restrictions[key].max;
        const validation = min <= val && val <= max 
        if(!validation) {
            throw new Error(`Received invalid ${key} value: ${val}. Must not be less than ${min} or higher than ${max}. \n\nRow with error:\n${JSON.stringify(row)}`);
        }
    })
}