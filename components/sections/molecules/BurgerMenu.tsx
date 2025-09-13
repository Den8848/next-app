'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import NavDashboardPanelContent from './NavDashboardPanelContent';

interface BurgerMenuProps {
  burgerMenuState?: boolean;
  closeBurgerMenu?: () => void;
}

const BurgerMenu = ({ burgerMenuState, closeBurgerMenu }: BurgerMenuProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <nav
      className={`
        ${burgerMenuState ? 'block' : 'hidden'} 
        fixed top-[69px] left-0 w-full h-[calc(100vh-69px)] bg-white 
        overflow-y-auto transition-[max-height] duration-300 ease-in-out 
        z-[999] md:hidden px-4 isolate
      `}
    >
      <NavDashboardPanelContent closeBurgerMenu={closeBurgerMenu} />
    </nav>,
    document.body,
  );
};

export default BurgerMenu;
