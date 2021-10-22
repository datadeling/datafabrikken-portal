import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';

import { RouteComponentProps } from 'react-router-dom';

import Root from '../../../../../components/root';
import Container from '../../../../../components/container';
import CommunityMenu from '../../../../../components/community/menu';

import SC from './styled';
import withCommunityTags, {
  Props as CommunityTagsProps
} from '../../../../../components/with-community-tags';

import Tag from '../../../../../components/community/tag';

interface Props extends CommunityTagsProps, RouteComponentProps {}

const CommunityTopicPage: FC<Props> = ({
  communityTags: tags,
  communityTagsActions: { getTagsRequested: getTags, resetTags }
}) => {
  useEffect(() => {
    getTags();

    return () => {
      resetTags();
    };
  }, []);

  return (
    <Root>
      <Container>
        <SC.Page>
          <CommunityMenu />
          <SC.Title>Emneord</SC.Title>
          <SC.TagsWrapper>
            {tags?.length > 0 && (
              <SC.Tags>
                {tags
                  ?.sort((tagA, tagB) => tagA.value.localeCompare(tagB.value))
                  .map((tag, index) => (
                    <Tag key={`tag-${index}`} {...tag} />
                  ))}
              </SC.Tags>
            )}
          </SC.TagsWrapper>
        </SC.Page>
      </Container>
    </Root>
  );
};

export default compose<FC>(memo, withCommunityTags)(CommunityTopicPage);
