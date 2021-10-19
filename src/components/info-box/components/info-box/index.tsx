import React, {
  Children,
  ComponentType,
  ComponentPropsWithoutRef,
  FC,
  isValidElement,
  memo,
  PropsWithChildren
} from 'react';

import InfoBoxImage from '../info-box-image';
import InfoBoxIcon from '../info-box-icon';
import InfoBoxTitle from '../info-box-title';
import InfoBoxBody from '../info-box-body';

import SC from './styled';

interface Props extends ComponentPropsWithoutRef<'a'> {
  invertColor?: boolean;
  to?: string;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
}

const InfoBox: FC<PropsWithChildren<Props>> = ({
  invertColor,
  children,
  as,
  ...props
}) => {
  const renderInfoBoxImage = () =>
    Children.map(children, child =>
      isValidElement(child) && child.type === InfoBoxImage ? (
        <SC.ImageWrapper>{child}</SC.ImageWrapper>
      ) : null
    )?.shift();
  const renderInfoBoxIcon = () =>
    Children.map(children, child =>
      isValidElement(child) && child.type === InfoBoxIcon ? (
        <SC.IconWrapper>{child}</SC.IconWrapper>
      ) : null
    )?.shift();

  const renderInfoBoxTitle = () =>
    Children.map(children, child =>
      isValidElement(child) && child.type === InfoBoxTitle ? child : null
    )?.shift();

  const renderInfoBoxBody = () =>
    Children.map(children, child =>
      isValidElement(child) && child.type === InfoBoxBody ? child : null
    )?.shift();

  return (
    <SC.InfoBox $invertColor={invertColor} as={as} {...props}>
      <SC.InfoBoxHeader>{renderInfoBoxImage()}</SC.InfoBoxHeader>
      <SC.InfoBoxRow>
        {renderInfoBoxIcon()}
        <SC.ContentWrapper>
          {renderInfoBoxTitle()}
          {renderInfoBoxBody()}
        </SC.ContentWrapper>
      </SC.InfoBoxRow>
    </SC.InfoBox>
  );
};

export default memo(InfoBox);
