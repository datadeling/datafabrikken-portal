import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Entity } from '../../../../types/enums';

import Translation from '../../../translation';
import { PATHNAME } from '../../../../enums';

import SC from './styled';
import { EuTheme, LosTheme, Theme } from '../../../../types';

import ThemePopulationIcon from '../../../../images/theme-population.inline.svg';
import ThemePowerIcon from '../../../../images/theme-power.inline.svg';
import ThemePublicIcon from '../../../../images/theme-public.inline.svg';
import ThemeHealthIcon from '../../../../images/theme-health.inline.svg';
import ThemeInternationalIcon from '../../../../images/theme-international.inline.svg';
import ThemeAgricultureIcon from '../../../../images/theme-agriculture.inline.svg';
import ThemeJusticeIcon from '../../../../images/theme-justice.inline.svg';
import ThemeEnvironmentIcon from '../../../../images/theme-environment.inline.svg';
import ThemeRegionsIcon from '../../../../images/theme-regions.inline.svg';
import ThemeTransportationIcon from '../../../../images/theme-transportation.inline.svg';
import ThemeEducationIcon from '../../../../images/theme-education.inline.svg';
import ThemeFinanceIcon from '../../../../images/theme-finance.inline.svg';

interface Props {
  entity: Entity;
  isOpenData: boolean;
  isPublicData: boolean;
  isRestrictedData: boolean;
  isNonPublicData: boolean;
  themes: Theme[];
}

const rootPaths = {
  [Entity.DATASET]: PATHNAME.FIND_DATA
};

const themeIconMap: Record<string, JSX.Element> = {
  SOCI: <ThemePopulationIcon />,

  ENER: <ThemePowerIcon />,

  GOVE: <ThemePublicIcon />,

  HEAL: <ThemeHealthIcon />,

  INTR: <ThemeInternationalIcon />,

  AGRI: <ThemeAgricultureIcon />,

  JUST: <ThemeJusticeIcon />,

  ENVI: <ThemeEnvironmentIcon />,

  REGI: <ThemeRegionsIcon />,

  TRAN: <ThemeTransportationIcon />,

  EDUC: <ThemeEducationIcon />,

  ECON: <ThemeFinanceIcon />
};

const isEuTheme = (theme: EuTheme | LosTheme): theme is EuTheme => {
  const { id, title, code } = theme as EuTheme;
  return !!id && !!title && !!code;
};

const Themes: FC<Props> = ({
  entity,
  isOpenData,
  isPublicData,
  isRestrictedData,
  isNonPublicData,
  themes
}) => {
  const euThemesById = themes.reduce((acc, theme) => {
    if (isEuTheme(theme)) {
      return { ...acc, [theme.id]: theme };
    }
    return acc;
  }, {} as Record<string, EuTheme>);

  return (
    <SC.Themes>
      {isOpenData && (
        <Link to={`${rootPaths[entity]}?opendata=true`} className='open-data'>
          <Translation id='detailsPage.openData' />
        </Link>
      )}
      {isPublicData && (
        <Link
          to={`${rootPaths[entity]}?accessrights=PUBLIC`}
          className='public-data'
        >
          <Translation id='detailsPage.publicData' />
        </Link>
      )}
      {isRestrictedData && (
        <Link
          to={`${rootPaths[entity]}?accessrights=RESTRICTED`}
          className='restricted-data'
        >
          <Translation id='detailsPage.restrictedData' />
        </Link>
      )}
      {isNonPublicData && (
        <Link
          to={`${rootPaths[entity]}?accessrights=NON_PUBLIC`}
          className='non-public-data'
        >
          <Translation id='detailsPage.nonPublicData' />
        </Link>
      )}
      {Object.values(euThemesById).map(({ id, code, title: themeTitle }) => (
        <Link key={id} to={`${rootPaths[entity]}?theme=${code}`}>
          {(code && themeIconMap[code]) ?? null}
          <Translation text={themeTitle} />
        </Link>
      ))}
    </SC.Themes>
  );
};

export default Themes;
