import React, { ChangeEvent, FC, memo } from 'react';

import ThemeBox from '../../../../../../../components/theme-box';
import ThemePopulationIcon from '../../../../../../../images/theme-population.inline.svg';
import ThemePowerIcon from '../../../../../../../images/theme-power.inline.svg';
import ThemePublicIcon from '../../../../../../../images/theme-public.inline.svg';
import ThemeHealthIcon from '../../../../../../../images/theme-health.inline.svg';
import ThemeInternationalIcon from '../../../../../../../images/theme-international.inline.svg';
import ThemeAgricultureIcon from '../../../../../../../images/theme-agriculture.inline.svg';
import ThemeJusticeIcon from '../../../../../../../images/theme-justice.inline.svg';
import ThemeEnvironmentIcon from '../../../../../../../images/theme-environment.inline.svg';
import ThemeRegionsIcon from '../../../../../../../images/theme-regions.inline.svg';
import ThemeTransportationIcon from '../../../../../../../images/theme-transportation.inline.svg';
import ThemeEducationIcon from '../../../../../../../images/theme-education.inline.svg';
import ThemeFinanceIcon from '../../../../../../../images/theme-finance.inline.svg';
import ThemeTechIcon from '../../../../../../../images/theme-science.inline.svg';

import SC from './styled';

interface Props {
  onFilterTheme: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Themes: FC<Props> = ({ onFilterTheme }) => (
  <>
    <SC.ThemesRow>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='SOCI'
        label='Befolkning og samfunn'
      >
        <ThemePopulationIcon />
      </ThemeBox>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='ENER'
        label='Energi'
      >
        <ThemePowerIcon />
      </ThemeBox>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='GOVE'
        label='Forvaltning og offentlig sektor'
      >
        <ThemePublicIcon />
      </ThemeBox>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='HEAL'
        label='Helse'
      >
        <ThemeHealthIcon />
      </ThemeBox>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='INTR'
        label='Internasjonale temaer'
      >
        <ThemeInternationalIcon />
      </ThemeBox>
    </SC.ThemesRow>
    <SC.ThemesRow>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='AGRI'
        label='Jordbruk, fiskeri, skogbruk og mat'
      >
        <ThemeAgricultureIcon />
      </ThemeBox>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='JUST'
        label='Justis, rettssystem og almenn sikkerhet'
      >
        <ThemeJusticeIcon />
      </ThemeBox>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='ENVI'
        label='Miljø'
      >
        <ThemeEnvironmentIcon />
      </ThemeBox>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='REGI'
        label='Regioner og byer'
      >
        <ThemeRegionsIcon />
      </ThemeBox>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='TRAN'
        label='Transport'
      >
        <ThemeTransportationIcon />
      </ThemeBox>
    </SC.ThemesRow>
    <SC.ThemesRow>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='EDUC'
        label='Utdanning, kultur og sport'
      >
        <ThemeEducationIcon />
      </ThemeBox>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='TECH'
        label='Vitenskap og Teknologi'
      >
        <ThemeTechIcon />
      </ThemeBox>
      <ThemeBox
        handleChange={onFilterTheme}
        filterName='theme'
        value='ECON'
        label='Økonomi og finans'
      >
        <ThemeFinanceIcon />
      </ThemeBox>
    </SC.ThemesRow>
  </>
);

export default memo(Themes);
