import React, { FC, memo } from 'react';

import { compose } from 'redux';

import parse from 'html-react-parser';

import highLight from 'highlight.js';
import 'highlight.js/styles/default.css';

import { CommunityPost } from '../../../../../../../types';

import Translation from '../../../../../../../components/translation';

import SC from './styled';
import User from '../../../../../../../components/community/user';
import { formatDateTime } from '../../../../../../../utils/date';
import { CommunityTemplateTag } from '../../../../../../../types/enums';

import CalendarDate from '../../../../../../../components/community/calendar-date';

import env from '../../../../../../../env';

import {
  isCalendarPost,
  parseCalendarDate
} from '../../../../../../../utils/community/utils';

interface ExternalProps {
  post: CommunityPost;
}

interface Props extends ExternalProps {}

const Post: FC<Props> = ({ post: { content, user, timestampISO } }) => {
  const parsePost = () => {
    const { COMMUNITY_API_HOST } = env;
    return parse(
      content.replaceAll(
        'src="/assets/',
        `crossorigin="" src="${COMMUNITY_API_HOST}/assets/`
      ),
      {
        replace: (domNode: any) => {
          if (
            domNode.attribs &&
            domNode.attribs.class === 'plugin-calendar-event-date'
          ) {
            const timeElement: any = domNode.children[3];
            return (
              <CalendarDate
                {...parseCalendarDate(timeElement.attribs.title ?? '')}
              />
            );
          }

          if (domNode.name === 'code' && domNode.parent.name === 'pre') {
            const code = domNode.children[0]?.data;
            return <code>{parse(highLight.highlightAuto(code).value)}</code>;
          }

          return domNode;
        }
      }
    );
  };

  return (
    <SC.Post $calendarPost={isCalendarPost(content)}>
      <SC.UserInfo>
        <User user={user} />
        {formatDateTime(new Date(timestampISO))}
      </SC.UserInfo>
      <SC.Content>
        {content === `[[${CommunityTemplateTag.POST_DELETED}]]` ? (
          <Translation id='community.postDeleted' />
        ) : (
          parsePost()
        )}
      </SC.Content>
    </SC.Post>
  );
};

export default compose<FC<ExternalProps>>(memo)(Post);
