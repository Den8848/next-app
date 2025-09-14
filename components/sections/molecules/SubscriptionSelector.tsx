'use client';

import { useState } from 'react';
import Typography from '../../ui/typography';
import { RadioGroup, RadioGroupItem } from '../../ui/RadioGroup';

const options = [
  { value: 'one', label: '1 month' },
  { value: 'three', label: '3 months' },
  { value: 'twelve', label: '12 months', badge: 'Save 20%' },
];

const SubscriptionSelector = () => {
  const [selected, setSelected] = useState('three');

  return (
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
              {selected === option.value && (
                <div className="absolute w-2 h-2 bg-[#6BD893] rounded-full"></div>
              )}
            </RadioGroupItem>

            <span>{option.label}</span>

            {option.badge && (
              <span className="text-[#136C34] px-1.5 py-0.5 ml-2 rounded-[4px] border border-[#6BD893] bg-[#E9F9EF] text-sm">
                {option.badge}
              </span>
            )}
          </label>
        ))}
      </RadioGroup>
    </div>
  );
};

export default SubscriptionSelector;
