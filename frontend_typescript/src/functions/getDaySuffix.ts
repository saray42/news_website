import daySuffixes from "../objects/daySuffixes";

export default function getDateSuffix(day: number): string {
    switch (day.toString().length) {
        case 1:
            return daySuffixes[day];
            break;
        case 2:

            break;
        default:
            break;
    }
}