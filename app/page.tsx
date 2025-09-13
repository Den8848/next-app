'use client';

import BackArrow from '@/components/icons/BackArrow';
import BurgerMenu from '@/components/sections/molecules/BurgerMenu';
import BurgerMenuButton from '@/components/sections/molecules/BurgerMenuButton';
import TopBar from '@/components/sections/molecules/TopBar';
import Checkout from '@/components/sections/organisms/Checkout';
import DatacenterProxies from '@/components/sections/organisms/DatacenterProxies';
import Plans from '@/components/sections/organisms/Plans';
import { Button } from '@/components/ui/Button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNoScroll } from '@/hooks/useNoScroll';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isMobile = useIsMobile();

  useNoScroll(isOpen);

  return (
    <div className="w-full p-4 pb-10">
      <div className="fixed top-0 left-0 right-0 md:hidden">
        <div className="px-4 py-4 flex justify-between bg-white border-b-[1px] border-[#E5E7EB]">
          <TopBar className="w-full" />
          <BurgerMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <BurgerMenu
          burgerMenuState={isOpen}
          closeBurgerMenu={() => setIsOpen(false)}
        />
      </div>
      <Button
        className={`rounded-[4px] hover:cursor-pointer mb-6 ${isMobile && 'mt-20'} `}
        variant="outline"
      >
        <BackArrow /> Back to all
      </Button>
      <div className="flex flex-wrap gap-4">
        <DatacenterProxies />
        <Checkout />
        <Plans />
      </div>
    </div>
  );
}
