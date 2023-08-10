import months from '../objects/months';
import getDaySuffix from './getDaySuffix';

export default function convertISODate(isoDate: string): string {
    const articleDate: Date = new Date(isoDate);
    const day: number = articleDate.getDate();
    const month: string = months[articleDate.getMonth()];
    const year: number = articleDate.getFullYear();
    const daySuffix: string = getDaySuffix(day); 
    return `${day}${daySuffix} ${month} ${year}`;
}