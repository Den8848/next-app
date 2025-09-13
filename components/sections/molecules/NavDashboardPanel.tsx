'use client';

import { FC, SVGProps } from 'react';
import {
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/Sidebar';
import Typography from '@/components/ui/Typography';

interface NavItem {
  component: FC<SVGProps<SVGSVGElement>>;
  label: string;
  href?: string;
}

interface NavDashboardPanelProps {
  data: {
    title: string;
    items: NavItem[];
  };
  activeLabel: string;
  setActiveLabel: (label: string) => void;
  closeBurgerMenu?: () => void;
}

const NavDashboardPanel = ({
  data,
  activeLabel,
  setActiveLabel,
  closeBurgerMenu,
}: NavDashboardPanelProps) => {
  const { title, items } = data;

  return (
    <div className="mt-4">
      <SidebarGroupLabel>
        <Typography variant="overline" className="uppercase text-[#384250]">
          {title}
        </Typography>
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(({ component, label, href }) => {
            const NavIcon = component;
            const isActive = activeLabel === label;

            return (
              <SidebarMenuItem key={label}>
                <SidebarMenuButton asChild>
                  <a
                    href={href}
                    onClick={() => {
                      setActiveLabel(label);
                      closeBurgerMenu && closeBurgerMenu();
                    }}
                    className={`
                      flex items-center gap-2 p-2 rounded
                      ${isActive ? 'bg-[#EEEDFD] text-[#5547EB]' : 'text-[#1F2A37]'}
                    `}
                  >
                    <NavIcon />
                    <Typography
                      variant="paragraphExtraSmall"
                      className={isActive ? 'text-[#5547EB]' : 'text-[#1F2A37]'}
                    >
                      {label}
                    </Typography>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </div>
  );
};

export default NavDashboardPanel;
