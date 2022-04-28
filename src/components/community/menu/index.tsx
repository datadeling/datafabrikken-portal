import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Translation from '../../translation';

import SearchBar from '../../search-bar';
import translations from '../../../services/translations';
import { setParameter } from '../../../utils/location-helper';

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

const CommunityMenu: FC<Props> = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const onSubmit = (searchValue?: string) => {
    if (pathname !== PATHNAME.COMMUNITY_SEARCH) {
      history.push(PATHNAME.COMMUNITY_SEARCH);
    }
    setParameter(history, {
      q: searchValue || null,
      page: null
    });
  };

  const searchClear = () => {
    setParameter(history, {
      q: null,
      page: null
    });
  };

  return (
    <SC.MenuWrapper>
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
            <SC.ExternalLink
              href={`${COMMUNITY_API_HOST}/login`}
              target='_self'
            >
              <LoginIcon />
              <Translation id='community.header.login' />
            </SC.ExternalLink>
          </li>
        )}
      </SC.Menu>
      <SearchBar
        placeholder={
          translations.translate(
            'community.communitySearchPlaceholder'
          ) as string
        }
        onSubmit={e => onSubmit(e.currentTarget.searchBox.value)}
        onClear={searchClear}
      />
    </SC.MenuWrapper>
  );
};

export default CommunityMenu;
