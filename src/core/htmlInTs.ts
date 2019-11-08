export const raw = (a: TemplateStringsArray, ...values: any[]): string => {
    const len = a.length - 1;
    let outstr = a[0];
    for (let i = 0; i < len; i++) {
        outstr += values[i] + a[i + 1];
    }
    return outstr;
};

export const html = (a: TemplateStringsArray, ...values: any[]): HTMLDivElement => {
    const div = document.createElement('div');
    div.innerHTML = raw(a, values);
    return div;
};
