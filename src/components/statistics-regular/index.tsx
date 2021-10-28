import React, { FC, ReactElement } from 'react';
import SC from './styled';

interface StatisticsProps {
  icon: ReactElement;
  count: string | number;
  description: string | ReactElement;
}

interface ExternalProps extends StatisticsProps {
  to?: string;
}

const Statistics: FC<StatisticsProps> = ({ icon, count, description }) => (
  <SC.StatisticsContainer>
    <SC.IconWithCount>
      {icon}
      {count}
    </SC.IconWithCount>
    {description}
  </SC.StatisticsContainer>
);

const StatisticsRegular: FC<ExternalProps> = ({ to, ...props }) =>
  to ? (
    <SC.LinkWrapper to={to}>
      <Statistics {...props} />
    </SC.LinkWrapper>
  ) : (
    <Statistics {...props} />
  );

export default StatisticsRegular;
