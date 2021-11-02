import React, { FC, ReactElement } from 'react';
import SC from './styled';

interface StatisticsRegularProps {
  icon: ReactElement;
  count: string | number;
  description: string | ReactElement;
}

const StatisticsRegular: FC<StatisticsRegularProps> = ({
  icon,
  count,
  description
}) => (
  <SC.StatisticsContainer>
    <SC.IconWithCount>
      {icon}
      {count}
    </SC.IconWithCount>
    {description}
  </SC.StatisticsContainer>
);

interface ExternalLinkProps extends StatisticsRegularProps {
  to: string;
}

const StatisticsRegularLink: FC<ExternalLinkProps> = ({
  to,
  icon,
  count,
  description
}) => (
  <SC.LinkWrapper to={to}>
    <StatisticsRegular icon={icon} count={count} description={description} />
  </SC.LinkWrapper>
);

interface ExternalButtonProps extends StatisticsRegularProps {
  onClick?: () => void;
}

const StatisticsRegularButton: FC<ExternalButtonProps> = ({
  onClick,
  icon,
  count,
  description
}) => (
  <SC.ButtonWrapper onClick={onClick}>
    <StatisticsRegular icon={icon} count={count} description={description} />
  </SC.ButtonWrapper>
);

export { StatisticsRegular, StatisticsRegularLink, StatisticsRegularButton };
