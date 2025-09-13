import Image from 'next/image';
import Typography from '../../ui/Typography';
import CountrySelector from '../molecules/CountrySelector';
import SubscriptionSelector from '../molecules/SubscriptionSelector';
import BundleDiscountTable from '../molecules/BundleDiscountTable';
import IpQuantitySelector from '../molecules/IpQuantitySelector';

const DatacenterProxies = () => {
  return (
    <div className="w-full xl:max-w-[65%] p-6 border border-[#E5E7EB] rounded-[8px] bg-[#FFFFFF] pointer-events-auto">
      <div className="flex gap-4">
        <Image
          src="/images/service.png"
          alt="Datacenter proxies icon"
          className="w-14 h-14 object-contain"
          width={56}
          height={56}
          priority
        />
        <div>
          <Typography as="h4" variant="heading4">
            Datacenter Proxies
          </Typography>
          <Typography variant="paragraphMedium" className="mt-1 text-[#6C737F]">
            High-speed, reliable proxies sourced from data centers, ideal for
            managing high-volume, concurrent requests.
          </Typography>
        </div>
      </div>

      <div className="mt-6">
        <Typography variant="paragraphMedium">Select number of IPs</Typography>
        <Typography variant="paragraphMedium" className="text-[#6C737F]">
          Choose the perfect quantity of IPs for your needs effortlessly
        </Typography>
      </div>

      <div className="mt-6">
        <BundleDiscountTable />
        <IpQuantitySelector />
        <SubscriptionSelector />
        <CountrySelector />
      </div>
    </div>
  );
};

export default DatacenterProxies;
