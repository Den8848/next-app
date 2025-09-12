import Typography from '../ui/Typography';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Separator } from '../ui/Separator';
import Visa from '../icons/Visa';
import MasterCard from '../icons/MasterCard';
import AmericanExpress from '../icons/AmericanExpress';
import Diners from '../icons/Diners';
import UnionPay from '../icons/UnionPay';
import List from './molecules/List';

const orderData = [
  { text: 'Quantity of IP', value: '100 IPs' },
  { text: 'Location', value: 'United Kingdom' },
  { text: 'Price per IP', value: '$2.50' },
  { text: 'Subscription period', value: '12 months' },
];

const benefits = ['3-day Trial', 'Customer Success Manager'];

const Checkout = () => {
  return (
    <div>
      <div className="p-6 border border-[#E5E7EB] rounded-[8px]">
        <Typography as="h5" variant="heading5">
          Order summary
        </Typography>
        <Typography variant="paragraphSmall" className="mt-4">
          Datacenter Proxies
        </Typography>

        <List items={benefits} />

        <div className="mt-4">
          {orderData.map(({ text, value }, index) => (
            <div key={index} className="flex justify-between">
              <Typography
                variant="paragraphMedium"
                className="font-medium text-[#4D5761]"
              >
                {text}
              </Typography>
              <Typography variant="paragraphMedium">{value}</Typography>
            </div>
          ))}
        </div>

        <div className="flex w-full max-w-sm items-center gap-2 mt-7">
          <Input
            type="text"
            placeholder="Add discount code"
            className="rounded-[4px]"
          />
          <Button
            type="submit"
            variant="outline"
            className="rounded-[4px] hover:cursor-pointer"
          >
            Apply
          </Button>
        </div>

        <Separator className="mt-4" />

        <div className="flex justify-between items-center mt-4">
          <Typography variant="paragraphExtraSmall">Total</Typography>
          <Typography variant="heading4">$140.00</Typography>
        </div>
      </div>

      <Button className="w-full text-white bg-[#5547EB] mt-4 hover:cursor-pointer">
        Continue to checkout
      </Button>
      <div className="flex justify-center mt-4">
        <Visa />
        <MasterCard />
        <AmericanExpress />
        <Diners />
        <UnionPay />
      </div>
    </div>
  );
};

export default Checkout;
