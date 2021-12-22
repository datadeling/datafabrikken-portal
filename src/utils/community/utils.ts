import {
  CommunityCalendarDate,
  CommunityCategory,
  CommunityPost,
  CommunityTopic
} from '../../types/domain.d';
import { CommunityTemplateTag } from '../../types/enums';

export const categorySorter = (
  { order: orderFirst }: CommunityCategory,
  { order: orderSecond }: CommunityCategory
) => {
  if (orderFirst < orderSecond) {
    return -1;
  }
  if (orderFirst > orderSecond) {
    return 1;
  }
  return 0;
};

export const postSorter = (first: CommunityPost, second: CommunityPost) => {
  if (Date.parse(first.timestampISO) > Date.parse(second.timestampISO)) {
    return 1;
  }
  if (Date.parse(first.timestampISO) < Date.parse(second.timestampISO)) {
    return -1;
  }
  return 0;
};

export const compareTopics = (
  first: CommunityTopic,
  second: CommunityTopic,
  sortByDateAsc: boolean,
  sortByDateDesc: boolean
) => {
  if (sortByDateAsc) {
    if (first.timestamp > second.timestamp) {
      return 1;
    }
    if (first.timestamp < second.timestamp) {
      return -1;
    }
    return 0;
  }
  if (sortByDateDesc) {
    if (first.timestamp > second.timestamp) {
      return -1;
    }
    if (first.timestamp < second.timestamp) {
      return 1;
    }
    return 0;
  }
  if (first.index < second.index) {
    return -1;
  }
  if (first.index > second.index) {
    return 1;
  }
  return 0;
};

export const pruneNodebbTemplateTags = (
  raw_text: string,
  translationsService: any
) =>
  raw_text.replace(
    /(?:\|\s)(?:\[{2})(.*?)(?:\]{2}:)(.*?)(?:\s\|)/g,
    (_substring, tagCapture, valueCapture) => {
      if (tagCapture === CommunityTemplateTag.CALENDAR_EVENT_TITLE) {
        return `${translationsService.translate(
          'community.calendarEvent'
        )}${valueCapture}`;
      }
      return valueCapture;
    }
  );

export const parseCalendarDate = (
  raw_text: string
): CommunityCalendarDate | null => {
  const matches = raw_text.match(
    /moment:time-date-view,\sutc,\s(\d+),\s(\d+),\s(true|false)/m
  );

  if (matches) {
    const start: number = +matches[1];
    const end: number = +matches[2];
    return {
      startDate: new Date(start),
      endDate: new Date(end),
      allDay: matches[3] === 'true'
    };
  }

  return null;
};

export const isCalendarPost = (post: string) =>
  post.includes('plugin-calendar-event-name');
