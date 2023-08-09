import months from '../objects/months';

export default function convertISODate(isoDate: string): string {
    const articleDate: Date = new Date(isoDate);
    const day: number = articleDate.getDate();
    const month: string = months[articleDate.getMonth()];
    const year: number = articleDate.getFullYear();
    return `${day}. ${month} ${year}`;
}