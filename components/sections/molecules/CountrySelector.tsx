import Typography from '../../ui/typography';

import UKFlag from '../../icons/flags/UKFlag';
import USFlag from '../../icons/flags/USFlag';
import DEFlag from '../../icons/flags/DEFlag';
import FRFlag from '../../icons/flags/FRFlag';
import CAFlag from '../../icons/flags/CAFlag';
import ESFlag from '../../icons/flags/ESFlag';
import CNFlag from '../../icons/flags/CNFlag';
import AUFlag from '../../icons/flags/AUFlag';
import BRFlag from '../../icons/flags/BRFlag';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

const countries = [
  { value: 'uk', label: 'United Kingdom', Flag: UKFlag },
  { value: 'us', label: 'United States', Flag: USFlag },
  { value: 'de', label: 'Germany', Flag: DEFlag },
  { value: 'fr', label: 'France', Flag: FRFlag },
  { value: 'ca', label: 'Canada', Flag: CAFlag },
  { value: 'es', label: 'Spain', Flag: ESFlag },
  { value: 'cn', label: 'China', Flag: CNFlag },
  { value: 'au', label: 'Australia', Flag: AUFlag },
  { value: 'br', label: 'Brazil', Flag: BRFlag },
];

const CountrySelector = () => {
  return (
    <div className="mt-6">
      <Typography variant="paragraphMedium">Select location</Typography>
      <Select>
        <SelectTrigger className="w-full mt-2 rounded-[4px]">
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Countries</SelectLabel>
            {countries.map(({ value, label, Flag }) => (
              <SelectItem key={value} value={value}>
                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-6" /> <span>{label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountrySelector;
