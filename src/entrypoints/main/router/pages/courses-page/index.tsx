import React, { memo, FC } from 'react';
import { compose } from 'redux';

import SC from './styled';
import Translation from '../../../../../components/translation';
import ErrorPage from '../../../../../components/error-page';
import withErrorBoundary from '../../../../../components/with-error-boundary';
import Root from '../../../../../components/root';

import { courses } from './courses';
import CourseCard from './components/course-card';
import Markdown from '../../../../../components/markdown';
import translations from '../../../../../services/translations';
import { Variant } from '../../../../../components/container';
import LinkBox from './components/link-box';

const getTranslateString = (reference: string) =>
  translations.translate(reference) as string;

const CoursesPage: FC<any> = () => (
  <Root>
    <SC.Header>
      <SC.Container variant={Variant.WIDTH_720}>
        <SC.Title>
          <Translation id='coursesPage.title' />
        </SC.Title>
        <SC.Subtitle>
          <Translation id='coursesPage.subtitle' />
        </SC.Subtitle>
      </SC.Container>
    </SC.Header>
    <SC.CourseSection>
      <SC.Container>
        <SC.CourseCardContainer>
          {courses.map(course => (
            <CourseCard course={course} />
          ))}
        </SC.CourseCardContainer>
      </SC.Container>
    </SC.CourseSection>
    <SC.Content>
      <SC.Container>
        <SC.Body variant={Variant.WIDTH_720}>
          <Markdown>{getTranslateString('coursesPage.accessSection')}</Markdown>
        </SC.Body>
        <SC.LinkBoxContainer>
          <LinkBox
            titleHref='https://datafabrikken.norge.no/finn-data/veiledere-og-kompetanse/juridiske-rammer-bruk-av-data'
            title={getTranslateString('coursesPage.boxes.legalTitle')}
            body={getTranslateString('coursesPage.boxes.legal')}
          />
          <LinkBox
            titleHref='https://einnsyn.no/'
            title={getTranslateString('coursesPage.boxes.eInnsynTitle')}
            body={getTranslateString('coursesPage.boxes.eInnsyn')}
          />
        </SC.LinkBoxContainer>
        <SC.Body variant={Variant.WIDTH_720}>
          <Markdown>
            {translations.translate('coursesPage.publicDataSection') as string}
          </Markdown>
        </SC.Body>
        <SC.LinkBoxContainer>
          <LinkBox
            titleHref='https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/behandlingsgrunnlag/veileder-om-behandlingsgrunnlag/'
            title={getTranslateString('coursesPage.boxes.learnMoreTitle')}
            body={getTranslateString('coursesPage.boxes.learnMore')}
            column
          />
        </SC.LinkBoxContainer>
        <SC.Body variant={Variant.WIDTH_720}>
          <Markdown>
            {
              translations.translate(
                'coursesPage.restrictedDataSection'
              ) as string
            }
          </Markdown>
        </SC.Body>
        <SC.LinkBoxContainer>
          <LinkBox
            titleHref='https://www.digdir.no/digitalisering-og-samordning/fordeling-av-roller-og-ansvar-nar-dere-skal-dele-data/2068'
            title={getTranslateString('coursesPage.boxes.roleGuideTitle')}
            body={getTranslateString('coursesPage.boxes.roleGuide')}
            column
          />
          <LinkBox
            titleHref='https://www.anskaffelser.no/verktoy/maler-ogsa-kontrakt-og-avtalemaler/databehandleravtale-og-sjekkliste'
            title={getTranslateString('coursesPage.boxes.dataHandlingTitle')}
            body={getTranslateString('coursesPage.boxes.dataHandling')}
            column
          />
        </SC.LinkBoxContainer>
        <SC.Body variant={Variant.WIDTH_720}>
          <Markdown>
            {
              translations.translate(
                'coursesPage.technicalSolutinsSection'
              ) as string
            }
          </Markdown>
        </SC.Body>
        <SC.LinkBoxContainer>
          <LinkBox
            titleHref='https://www.digdir.no/digitalisering-og-samordning/nasjonalt-ressurssenter-deling-av-data/1914'
            title={getTranslateString('coursesPage.boxes.nationalToolboxTitle')}
            body={getTranslateString('coursesPage.boxes.nationalToolbox')}
          />
        </SC.LinkBoxContainer>
      </SC.Container>
    </SC.Content>
  </Root>
);

export default compose<FC>(memo, withErrorBoundary(ErrorPage))(CoursesPage);
