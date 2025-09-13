import Eye from '@/components/icons/navigation/Eye';
import Monitor from '@/components/icons/navigation/Monitor';
import Summary from '@/components/icons/navigation/Summary';
import ProxyList from '@/components/icons/navigation/ProxyList';
import UserSettings from '@/components/icons/navigation/UserSettings';
import Products from '@/components/icons/navigation/Products';
import APIKeys from '@/components/icons/navigation/APIKeys';
import APIRequests from '@/components/icons/navigation/APIRequests';
import Resellers from '@/components/icons/navigation/Resellers';
import AffiliateProgram from '@/components/icons/navigation/AffiliateProgram';

export const navDashboardData = [
  {
    title: 'System Overview',
    items: [
      { component: Eye, label: 'Observability Overview', href: '#' },
      { component: Monitor, label: 'Live Log Monitor', href: '#' },
    ],
  },
  {
    title: 'My Services',
    items: [
      { component: Summary, label: 'Summary', href: '#' },
      { component: ProxyList, label: 'Proxy List', href: '#' },
      { component: UserSettings, label: 'User Settings', href: '#' },
      { component: Products, label: 'All Products', href: '#' },
    ],
  },
  {
    title: 'Developer Section',
    items: [
      { component: APIKeys, label: 'API Keys', href: '#' },
      { component: APIRequests, label: 'API Requests', href: '#' },
    ],
  },
  {
    title: 'Affiliate Programs',
    items: [
      { component: Resellers, label: 'Resellers Statistics', href: '#' },
      { component: AffiliateProgram, label: 'Affiliate Program', href: '#' },
    ],
  },
];
