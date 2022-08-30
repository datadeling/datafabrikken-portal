import React, { FC, memo } from 'react';

import SC from './styled';

import Translation from '../translation';
import { PATHNAME } from '../../enums';

import FacebookIcon from '../../images/social-facebook.inline.svg';
import LinkedinIcon from '../../images/social-linkedin.inline.svg';
import TwitterIcon from '../../images/social-twitter.inline.svg';

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
        <SC.Social>
          <a
            href='https://www.facebook.com/datafabrikken'
            target='_blank'
            rel='noopener noreferrer'
            title='Facebook'
          >
            <FacebookIcon />
          </a>
          <a
            href='https://www.linkedin.com/company/datafabrikken/'
            target='_blank'
            rel='noopener noreferrer'
            title='Linkedin'
          >
            <LinkedinIcon />
          </a>
          <a
            href='https://twitter.com/datafabrikken'
            target='_blank'
            rel='noopener noreferrer'
            title='Twitter'
          >
            <TwitterIcon />
          </a>
        </SC.Social>
      </SC.ByLine>
      <SC.LinkSection>
        <div>
          <SC.LinkTitle>
            <Translation id='footer.linkSection.headings.about' />
          </SC.LinkTitle>
          <SC.LinkList>
            <li>
              <SC.PlainLink href={PATHNAME.MAIN}>
                <Translation id='footer.linkSection.links.home' />
              </SC.PlainLink>
            </li>
            <li>
              <SC.PlainLink href={PATHNAME.ABOUT}>
                <Translation id='footer.linkSection.links.about' />
              </SC.PlainLink>
            </li>
            <li>
              <SC.PlainLink href={PATHNAME.COMMUNITY_ABOUT}>
                <Translation id='footer.linkSection.links.communityAbout' />
              </SC.PlainLink>
            </li>
            <li>
              <SC.PlainLink href={PATHNAME.NEWS}>
                <Translation id='footer.linkSection.links.news' />
              </SC.PlainLink>
            </li>
          </SC.LinkList>
        </div>

        <div>
          <SC.LinkTitle>
            <Translation id='footer.linkSection.headings.usage' />
          </SC.LinkTitle>
          <SC.LinkList>
            <li>
              <SC.LinkItem to={PATHNAME.SEARCH}>
                <Translation id='footer.linkSection.links.search' />
              </SC.LinkItem>
            </li>
            <li>
              <SC.PlainLink href={PATHNAME.COURSES}>
                <Translation id='footer.linkSection.links.courses' />
              </SC.PlainLink>
            </li>
            <li>
              <SC.PlainLink href={PATHNAME.GUIDANCE}>
                <Translation id='footer.linkSection.links.guidance' />
              </SC.PlainLink>
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
              <SC.PlainLink href={PATHNAME.CONTACT}>
                <Translation id='footer.linkSection.links.contact' />
              </SC.PlainLink>
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
              <SC.PlainLink href={PATHNAME.SITEMAP}>
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
