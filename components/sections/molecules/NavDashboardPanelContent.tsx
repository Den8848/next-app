'use client';

import TitleBar from './TitleBar';
import PlusIcon from '../../../components/icons/PlusIcon';
import { Button } from '../../ui/button';
import NavDashboardPanel from './NavDashboardPanel';
import { Separator } from '../../ui/separator';
import UserInfoPanel from './UserInfoPanel';
import ActionPanel from './ActionPanel';
import { useState } from 'react';
import { navDashboardData } from '../../../constants/navDashboardData';

interface NavDashboardPanelContentProps {
  closeBurgerMenu?: () => void;
}

const NavDashboardPanelContent = ({
  closeBurgerMenu,
}: NavDashboardPanelContentProps) => {
  const [activeLabel, setActiveLabel] = useState('All Products');

  return (
    <>
      <Button
        className="rounded-[4px] hover:cursor-pointer mt-4"
        variant="outline"
        onClick={closeBurgerMenu}
      >
        <PlusIcon /> Buy new proxies
      </Button>
      <TitleBar />
      {navDashboardData.map((section) => (
        <NavDashboardPanel
          key={section.title}
          data={section}
          activeLabel={activeLabel}
          setActiveLabel={setActiveLabel}
          closeBurgerMenu={closeBurgerMenu}
        />
      ))}
      <Separator className="mt-4" />
      <ActionPanel closeBurgerMenu={closeBurgerMenu} />
      <Separator className="my-4" />
      <UserInfoPanel />
    </>
  );
};

export default NavDashboardPanelContent;
