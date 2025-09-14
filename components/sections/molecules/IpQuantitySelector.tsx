'use client';

import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { useCallback, useMemo, useState } from 'react';
import Pencil from '../../../components/icons/Pencil';
import Typography from '../../../components/ui/Typography';

const [MIN, MAX] = [10, 1000];

const ticks = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

type InputMode = 'slider' | 'manual';

const IpQuantitySelector = () => {
  const [value, setValue] = useState(MIN);
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
    <>
      {inputMode === 'slider' && (
        <div className="w-full mx-auto mt-11">
          <div className="relative w-full">
            <div
              className="absolute -top-8 bg-[#0078D7] text-white text-sm px-2 py-1 rounded transition-all duration-75"
              style={{
                left: `calc(${percentage}% )`,
                transform: 'translateX(-50%)',
              }}
            >
              {value} IP
            </div>

            <input
              type="range"
              min={MIN}
              max={MAX}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              style={{
                background: `linear-gradient(to right, #0078D7 ${percentage}%, #E5E7EB ${percentage}%)`,
              }}
              className="w-full h-2 rounded-lg appearance-none"
            />
          </div>

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
    </>
  );
};

export default IpQuantitySelector;
