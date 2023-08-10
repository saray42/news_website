import daySuffixes from "../objects/daySuffixes";

export default function getDaySuffix(day: number): string {
    if (day > 3 && day < 21) return daySuffixes[0];
    switch (day % 10) {
        case 1:
            return daySuffixes[1];
        case 2:
            return daySuffixes[2];
        case 3:
            return daySuffixes[3];
        default:
            return daySuffixes[0];
    }
}