'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Pencil from '../icons/Pencil';
import Typography from '../ui/Typography';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

import UKFlag from '../icons/flags/UKFlag';
import USFlag from '../icons/flags/USFlag';
import DEFlag from '../icons/flags/DEFlag';
import FRFlag from '../icons/flags/FRFlag';
import CAFlag from '../icons/flags/CAFlag';
import ESFlag from '../icons/flags/ESFlag';
import CNFlag from '../icons/flags/CNFlag';
import AUFlag from '../icons/flags/AUFlag';
import BRFlag from '../icons/flags/BRFlag';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

import { Label } from '@/components/ui/Label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

type InputMode = 'slider' | 'manual';

const ticks = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const [MIN, MAX] = [10, 1000];

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

const options = [
  { value: 'one', label: '1 month' },
  { value: 'three', label: '3 months' },
  { value: 'twelve', label: '12 months', badge: 'Save 20%' },
];

const DatacenterProxies = () => {
  const [value, setValue] = useState(MIN);

  const [selected, setSelected] = useState('three');

  const [inputMode, setInputMode] = useState<InputMode>('slider');

  const percentage = useMemo(
    () => ((value - MIN) / (MAX - MIN)) * 100,
    [value],
  );

  const inputModeHanlder = useCallback(
    () => setInputMode((prev) => (prev === 'slider' ? 'manual' : 'slider')),
    [],
  );

  return (
    <div className="p-6 mt-6 border border-[#E5E7EB] rounded-[8px]">
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
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="">
              <AccordionTrigger className="max-w-[max-content] hover:cursor-pointer p-0 hover:no-underline gap-0">
                <Typography variant="paragraphExtraSmall" className="mr-1">
                  Bundle discounts
                </Typography>
              </AccordionTrigger>
              <AccordionContent className="mt-2 p-0">
                <Table className="border border-[#E5E7EB] rounded-[4px] border-separate border-spacing-0">
                  <TableHeader>
                    <TableRow className="bg-[#F3F4F6] hover:bg-[#F3F4F6]">
                      <TableHead className="text-left text-[#6C737F]">
                        IPs
                      </TableHead>
                      <TableHead className="text-right text-[#6C737F]">
                        10–24
                      </TableHead>
                      <TableHead className="text-right text-[#6C737F]">
                        25–49
                      </TableHead>
                      <TableHead className="text-right text-[#6C737F]">
                        50–99
                      </TableHead>
                      <TableHead className="text-right text-[#6C737F]">
                        100+
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow>
                      <TableCell className="text-left">Price per IP</TableCell>
                      <TableCell className="text-right">$3.00</TableCell>
                      <TableCell className="text-right">$2.75</TableCell>
                      <TableCell className="text-right">$2.50</TableCell>
                      <TableCell className="text-right">$2.25</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {inputMode === 'slider' && (
          <div className="w-full mx-auto mt-11">
            <div className="relative mb-4">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#0078D7] text-white text-sm px-2 py-1 rounded">
                {value} IP
              </div>
            </div>

            <input
              type="range"
              min={10}
              max={1000}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              style={{
                background: `linear-gradient(to right, #0078D7 ${percentage}%, #E5E7EB ${percentage}%)`,
              }}
              className="w-full h-2 rounded-lg appearance-none"
            />

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              {ticks.map((tick) => (
                <span key={tick}>{tick}</span>
              ))}
            </div>
          </div>
        )}

        {inputMode === 'manual' && (
          <div className="mt-6">
            <Typography variant="paragraphMedium">Custom quantity</Typography>
            <Input
              type="number"
              step={1}
              value={value}
              placeholder="Enter number"
              onChange={(e) => setValue(Number(e.target.value))}
              className="mt-1 rounded-[4px] appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance:textfield]"
            />
          </div>
        )}

        <Button
          onClick={inputModeHanlder}
          className="mt-6 rounded-[4px] hover:cursor-pointer text-[#5547EB] hover:text-[#5547EB]"
          variant="outline"
        >
          {inputMode === 'manual' ? (
            'Select from the range'
          ) : (
            <>
              <Pencil /> Enter a custom quantity
            </>
          )}
        </Button>

        <div className="mt-6">
          <Typography variant="paragraphMedium">
            Select subscription cycle
          </Typography>

          <RadioGroup
            value={selected}
            onValueChange={setSelected}
            className="mt-2 flex flex-col gap-2"
          >
            {options.map((option) => (
              <label
                key={option.value}
                className={`
                    flex items-center p-3 rounded-[4px] border-2 cursor-pointer
                    ${
                      selected === option.value
                        ? 'bg-[#EEEDFD] border-[#5547EB]'
                        : 'bg-white border-[#D2D6DB]'
                    }
                `}
              >
                <RadioGroupItem
                  value={option.value}
                  className={`
          relative w-4 h-4 mr-2 rounded-full flex-shrink-0
          ${selected === option.value ? 'bg-[#5547EB] border-[#5547EB]' : 'bg-white border-gray-400'}
          flex items-center justify-center
        `}
                >
                  {/* TODO - add white dot (pointer) */}
                  {selected === option.value && (
                    <div className="absolute w-2 h-2 bg-[#6BD893] rounded-full"></div>
                  )}
                </RadioGroupItem>

                <span className="flex-1">{option.label}</span>

                {option.badge && (
                  <span className="text-[#136C34] px-1.5 py-0.5 rounded-[4px] border border-[#6BD893] bg-[#E9F9EF] text-sm">
                    {option.badge}
                  </span>
                )}
              </label>
            ))}
          </RadioGroup>
        </div>

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
      </div>
    </div>
  );
};

export default DatacenterProxies;
