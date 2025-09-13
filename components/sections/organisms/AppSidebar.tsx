import TopBar from '../molecules/TopBar';
import NavDashboardPanelContent from '../molecules/NavDashboardPanelContent';
import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/Sidebar';

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent
        className="bg-[#FFFFFF]"
        style={{ height: '100%', overflowY: 'scroll', scrollbarWidth: 'none' }}
      >
        <SidebarGroup className="h-[inherit] px-4">
          <TopBar />
          <NavDashboardPanelContent />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
