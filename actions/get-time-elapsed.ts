import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

export const getTimeElapsed = (timestamp: Date): string => {
  const lastOnline = new Date(timestamp);
  const now = new Date();
  const timeElapsed = {
    years: differenceInYears(now, lastOnline),
    months: differenceInMonths(now, lastOnline),
    weeks: differenceInWeeks(now, lastOnline),
    days: differenceInDays(now, lastOnline),
    hours: differenceInHours(now, lastOnline),
    minutes: differenceInMinutes(now, lastOnline),
  };

  if (timeElapsed.years > 0) {
    return `${timeElapsed.years}y`;
  } else if (timeElapsed.months > 0) {
    return `${timeElapsed.months}m`;
  } else if (timeElapsed.weeks > 0) {
    return `${timeElapsed.weeks}w`;
  } else if (timeElapsed.days > 0) {
    return `${timeElapsed.days}d`;
  } else if (timeElapsed.hours > 0) {
    return `${timeElapsed.hours}h`;
  } else if (timeElapsed.minutes > 0) {
    return `${timeElapsed.minutes}m`;
  } else {
    return "Less than a minute ago";
  }
};