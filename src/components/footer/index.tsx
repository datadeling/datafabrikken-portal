import React, { FC, memo } from 'react';

import SC from './styled';

import Translation from '../translation';
import { PATHNAME } from '../../enums';

interface Props {}

const Footer: FC<Props> = () => (
  <SC.Footer>
    <SC.Container>
      <SC.ByLine>
        <SC.Title>
          <Translation id='title' />
        </SC.Title>
        <p>
          <Translation id='footer.byLine' />
        </p>
        <p>
          <Translation id='footer.contact.text' />
          <SC.PlainLink
            href='mailto:datafabrikken@norge.no'
            rel='noopener noreferrer'
          >
            datafabrikken@norge.no
          </SC.PlainLink>
        </p>
      </SC.ByLine>
      <SC.LinkSection>
        <div>
          <SC.LinkTitle>
            <Translation id='footer.linkSection.headings.about' />
          </SC.LinkTitle>
          <SC.LinkList>
            <li>
              <SC.LinkItem to={PATHNAME.MAIN}>
                <Translation id='footer.linkSection.links.home' />
              </SC.LinkItem>
            </li>
            <li>
              <SC.LinkItem to={PATHNAME.ABOUT}>
                <Translation id='footer.linkSection.links.about' />
              </SC.LinkItem>
            </li>
            <li>
              <SC.LinkItem to={PATHNAME.COMMUNITY_ABOUT}>
                <Translation id='footer.linkSection.links.communityAbout' />
              </SC.LinkItem>
            </li>
            <li>
              <SC.LinkItem to={PATHNAME.NEWS}>
                <Translation id='footer.linkSection.links.news' />
              </SC.LinkItem>
            </li>
          </SC.LinkList>
        </div>

        <div>
          <SC.LinkTitle>
            <Translation id='footer.linkSection.headings.usage' />
          </SC.LinkTitle>
          <SC.LinkList>
            <li>
              <SC.LinkItem to={PATHNAME.FIND_DATA}>
                <Translation id='footer.linkSection.links.findData' />
              </SC.LinkItem>
            </li>
            <li>
              <SC.LinkItem to={PATHNAME.COURSES}>
                <Translation id='footer.linkSection.links.courses' />
              </SC.LinkItem>
            </li>
            <li>
              <SC.LinkItem to={PATHNAME.GUIDANCE}>
                <Translation id='footer.linkSection.links.guidance' />
              </SC.LinkItem>
            </li>
            <li>
              <SC.LinkItem to={PATHNAME.COMMUNITY}>
                <Translation id='footer.linkSection.links.community' />
              </SC.LinkItem>
            </li>
            <li>
              <SC.LinkItem to={PATHNAME.ORGANIZATION}>
                <Translation id='footer.linkSection.links.organizations' />
              </SC.LinkItem>
            </li>
          </SC.LinkList>
        </div>

        <div>
          <SC.LinkTitle>
            <Translation id='footer.linkSection.headings.site' />
          </SC.LinkTitle>
          <SC.LinkList>
            <li>
              <SC.LinkItem to={PATHNAME.CONTACT}>
                <Translation id='footer.linkSection.links.contact' />
              </SC.LinkItem>
            </li>
            <li>
              <SC.PlainLink href='https://www.digdir.no/om-oss/personvernerklaering/706'>
                <Translation id='footer.linkSection.links.privacy' />
              </SC.PlainLink>
            </li>
            <li>
              <SC.PlainLink href='https://www.digdir.no/om-oss/informasjonskapsler/707'>
                <Translation id='footer.linkSection.links.cookies' />
              </SC.PlainLink>
            </li>
            <li>
              <SC.PlainLink href='/sitemap.xml'>
                <Translation id='footer.linkSection.links.sitemap' />
              </SC.PlainLink>
            </li>
          </SC.LinkList>
        </div>
      </SC.LinkSection>
    </SC.Container>
  </SC.Footer>
);

export default memo(Footer);
