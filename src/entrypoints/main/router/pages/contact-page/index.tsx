import React, { FC, memo } from 'react';
import { compose } from 'redux';

import Root from '../../../../../components/root';
import env from '../../../../../env';
import {
  ComponentBasicContact,
  useGetContactsQuery
} from '../../../../../services/api/generated/cms/graphql';
import SC from './styled';

const { STRAPI_API_HOST } = env;

const FindDataPage: FC = () => {
  const { data: { contactPage } = {} } = useGetContactsQuery();

  const ingress =
    contactPage?.content?.[0]?.__typename === 'ComponentBasicParagraph'
      ? contactPage.content[0].content
      : undefined;

  const contacts = (contactPage?.content?.filter(
    contact => contact && contact.__typename === 'ComponentBasicContact'
  ) ?? []) as Partial<ComponentBasicContact>[];

  return (
    <Root>
      <SC.Header>
        <SC.Container>
          <SC.Title>{contactPage?.title}</SC.Title>
          {ingress && <SC.Ingress>{ingress}</SC.Ingress>}
        </SC.Container>
      </SC.Header>
      <SC.Container>
        <SC.ContactCardContainer>
          {contacts.map(({ image, name, jobTitle, phoneNumber, email }) => (
            <SC.ContactCard>
              {image?.[0]?.url && (
                <SC.ContactImage src={`${STRAPI_API_HOST}${image[0].url}`} />
              )}
              <SC.TopInfo>
                <SC.ContactName>{name}</SC.ContactName>
                <p>{jobTitle}</p>
              </SC.TopInfo>
              <p>{phoneNumber}</p>
              <SC.ContactEmail href={`mailto:${email}`}>
                {email}
              </SC.ContactEmail>
            </SC.ContactCard>
          ))}
        </SC.ContactCardContainer>
      </SC.Container>
    </Root>
  );
};

export default compose<FC>(memo)(FindDataPage);
