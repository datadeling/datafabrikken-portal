import React, { useEffect, useState } from 'react';

import UpIcon from '../icons/up-icon';

import SC from './styled';
import Translation from '../translation';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <SC.ScrollToTop>
      {isVisible && (
        <SC.ScrollButton onClick={scrollToTop}>
          <Translation id='toTop' />
          <UpIcon />
        </SC.ScrollButton>
      )}
    </SC.ScrollToTop>
  );
}
