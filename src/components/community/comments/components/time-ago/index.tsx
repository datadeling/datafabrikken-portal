import React, { FC } from 'react';
import translations from '../../../../../services/translations';

interface Props {
  startTime: number;
  cutOff?: number;
  lowercase?: boolean;
}

const timeAgoString = (startTime: number, cutOff?: number): string => {
  const millis = Date.now() - startTime;
  const minutes = Math.floor(millis / (60 * 1000));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (cutOff && millis > cutOff) {
    return new Date(startTime).toLocaleString([], {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  if (years) {
    return years > 1
      ? `${years} ${
          translations.translate(
            'detailsPage.community.timeago.plural.years'
          ) as string
        }`
      : (translations.translate(
          'detailsPage.community.timeago.singular.years'
        ) as string);
  }
  if (months) {
    return months > 1
      ? `${months} ${
          translations.translate(
            'detailsPage.community.timeago.plural.months'
          ) as string
        }`
      : (translations.translate(
          'detailsPage.community.timeago.singular.months'
        ) as string);
  }
  if (days) {
    return days > 1
      ? `${days} ${
          translations.translate(
            'detailsPage.community.timeago.plural.days'
          ) as string
        }`
      : (translations.translate(
          'detailsPage.community.timeago.singular.days'
        ) as string);
  }
  if (hours) {
    return hours > 1
      ? `${hours} ${
          translations.translate(
            'detailsPage.community.timeago.plural.hours'
          ) as string
        }`
      : (translations.translate(
          'detailsPage.community.timeago.singular.hours'
        ) as string);
  }
  if (minutes) {
    return minutes > 1
      ? `${minutes} ${translations.translate(
          'detailsPage.community.timeago.plural.minutes'
        )}`
      : (translations.translate(
          'detailsPage.community.timeago.singular.minutes'
        ) as string);
  }
  return translations.translate(
    'detailsPage.community.timeago.singular.seconds'
  ) as string;
};

const TimeAgo: FC<Props> = ({ startTime, lowercase, cutOff }) => (
  <span>
    {lowercase
      ? timeAgoString(startTime, cutOff).toLowerCase()
      : timeAgoString(startTime, cutOff)}
  </span>
);

export default TimeAgo;
