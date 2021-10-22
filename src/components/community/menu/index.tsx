import React, { FC } from 'react';

import Translation from '../../translation';

import FolderIcon from '../../../images/icon-folder.inline.svg';
import ClockIcon from '../../../images/icon-clock.inline.svg';
import FlameIcon from '../../../images/icon-flame.inline.svg';
import InfoIcon from '../../../images/icon-info.inline.svg';
import LoginIcon from '../../../images/icon-login.inline.svg';

import SC from './styled';
import { PATHNAME } from '../../../enums';

import env from '../../../env';

const { COMMUNITY_API_HOST } = env;

interface Props {}

const CommunityMenu: FC<Props> = () => (
  <SC.Menu>
    <li>
      <SC.Link to={PATHNAME.COMMUNITY}>
        <FolderIcon />
        <Translation id='community.header.categories' />
      </SC.Link>
    </li>
    <li>
      <SC.Link to={PATHNAME.COMMUNITY_TAGS}>
        <SC.TopicIcon />
        <Translation id='community.header.tags' />
      </SC.Link>
    </li>
    <li>
      <SC.Link to={PATHNAME.COMMUNITY_RECENT}>
        <ClockIcon />
        <Translation id='community.header.recent' />
      </SC.Link>
    </li>
    <li>
      <SC.Link to={PATHNAME.COMMUNITY_POPULAR}>
        <FlameIcon />
        <Translation id='community.header.popular' />
      </SC.Link>
    </li>
    {false && (
      <li>
        <SC.Link to={PATHNAME.COMMUNITY_ABOUT}>
          <InfoIcon />
          <Translation id='community.header.about' />
        </SC.Link>
      </li>
    )}
    {false && (
      <li>
        <SC.ExternalLink href={`${COMMUNITY_API_HOST}/login`} target='_self'>
          <LoginIcon />
          <Translation id='community.header.login' />
        </SC.ExternalLink>
      </li>
    )}
  </SC.Menu>
);

export default CommunityMenu;
