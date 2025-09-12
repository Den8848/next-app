'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/Sidebar';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    // icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    // icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    // icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    // icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    // icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(({ title, url }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={url}
                    //   className="block p-2 hover:bg-gray-100 rounded"
                    >
                      {/* <item.icon /> */}
                      <span>{title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
