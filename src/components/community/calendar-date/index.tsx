import React, { FC } from 'react';

import SC from './styled';

import type { CommunityCalendarDate } from '../../../types';
import { formatDate, formatDateTime } from '../../../utils/date';

import CalendarIcon from '../../../images/icon-calendar-small.inline.svg';

const CalendarDate: FC<CommunityCalendarDate> = ({
  startDate,
  endDate,
  allDay
}) => {
  if (startDate && allDay) {
    return (
      <SC.CalendarDate>
        <CalendarIcon />
        {formatDate(startDate)}
      </SC.CalendarDate>
    );
  }

  if (startDate && endDate) {
    return (
      <SC.CalendarDate>
        <CalendarIcon />
        {formatDateTime(startDate)} - {formatDateTime(endDate)}
      </SC.CalendarDate>
    );
  }

  return null;
};

export default CalendarDate;
