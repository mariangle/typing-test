import { differenceInYears, differenceInMonths, differenceInWeeks, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';


export const getTimeElapsed = (timestamp: Date) => {
    const lastOnline = new Date(timestamp);
    const now = new Date();
    const years = differenceInYears(now, lastOnline);
    const months = differenceInMonths(now, lastOnline);
    const weeks = differenceInWeeks(now, lastOnline);
    const days = differenceInDays(now, lastOnline);
    const hours = differenceInHours(now, lastOnline);
    const minutes = differenceInMinutes(now, lastOnline);

    if (years > 0) {
        return `${years}y`;
    } else if (months > 0) {
        return `${months}m`;
    } else if (weeks > 0) {
        return `${weeks}w`;
    } else if (days > 0) {
        return `${days}d`;
    } else if (hours > 0) {
        return `${hours}h`;
    } else if (minutes > 0) {
        return `${minutes}m`;
    } else {
        return "Less than a minute ago";
    }
};