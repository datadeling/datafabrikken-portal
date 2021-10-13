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
  [Entity.DATASET]: `${PATHNAME.FIND_DATA}${PATHNAME.DATASETS}`
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
}) => (
  <SC.Themes>
    {isOpenData && (
      <Link to={`${rootPaths[entity]}?opendata=true`} className='open-data'>
        <Translation id='openData' />
      </Link>
    )}
    {isPublicData && (
      <Link
        to={`${rootPaths[entity]}?accessrights=PUBLIC`}
        className='public-data'
      >
        <Translation id='publicData' />
      </Link>
    )}
    {isRestrictedData && (
      <Link
        to={`${rootPaths[entity]}?accessrights=RESTRICTED`}
        className='restricted-data'
      >
        <Translation id='restrictedData' />
      </Link>
    )}
    {isNonPublicData && (
      <Link
        to={`${rootPaths[entity]}?accessrights=NON_PUBLIC`}
        className='non-public-data'
      >
        <Translation id='nonPublicData' />
      </Link>
    )}
    {themes.map(theme => {
      if (isEuTheme(theme)) {
        const { id, title: themeTitle, code } = theme;
        return (
          <Link key={id} to={`${rootPaths[entity]}?theme=${code}`}>
            {(code && themeIconMap[code]) ?? null}
            <Translation text={themeTitle} />
          </Link>
        );
      }

      return null;
    })}
  </SC.Themes>
);

export default Themes;
