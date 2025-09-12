import Typography from '../ui/Typography';
import List from '../ui/List';
import { Button } from '../ui/Button';
import BackArrow from '../icons/BackArrow';
import Logo from '../ui/Logo';
import { Sidebar } from '../ui/Sidebar';

const plansLeft = [
  'Unlimited Concurrent Sessions',
  'Automatic Proxy Potation',
  'Proxy Servers in 195+ Countries',
  'API access',
];

const plansRight = [
  'Country, Region, City, or ISP Targeting',
  'HTTP, SOCKS5, and UDP support',
  'Email and Chat Support',
  'Custom Responses for Your Proxy Roquests',
];

const Plans = () => {
  return (
    <div className="p-6 mt-6 border border-[#E5E7EB] rounded-[8px]">
      <Typography as="h6" variant="heading6" className="mb-2">
        All plans include
      </Typography>

      <div className="flex gap-4">
        <div className="flex-1">
          <List items={plansLeft} />
        </div>
        <div className="flex-1">
          <List items={plansRight} />
        </div>
      </div>

      {/* <Logo /> */}

      {/* <Sidebar /> */}
    </div>
  );
};

export default Plans;
