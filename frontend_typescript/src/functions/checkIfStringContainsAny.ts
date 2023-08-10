export default function checkIfStringContainsAny(stringToCheck: string, arrayToCheckFrom: Array<string>): boolean {
    let containsAny: boolean = false;
    arrayToCheckFrom.forEach((item) => {
        if(stringToCheck.includes(`/news/${item}/`)) containsAny = true;
    })
    return containsAny;
}