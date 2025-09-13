import { useEffect } from 'react';

export const useNoScroll = (condition: boolean | string) => {
  useEffect(() => {
    if (condition) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [condition]);
};
