'use client';

import React from 'react';

export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  label?: string;
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  columns?: 1 | 2;
  className?: string;
}

export default function RadioGroup({ 
  label,
  name,
  options,
  value,
  onChange,
  error,
  columns = 2,
  className = ''
}: RadioGroupProps) {
  const handleChange = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div className={`self-stretch py-4 flex flex-col justify-start items-start gap-4 ${className}`}>
      {label && (
        <div className="justify-center text-neutral-800 text-sm font-normal font-inter leading-tight">
          {label}
        </div>
      )}
      <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
        {columns === 2 ? (
          // Two columns layout
          <>
            {options.reduce((rows: RadioOption[][], option, index) => {
              if (index % 2 === 0) {
                rows.push([option]);
              } else {
                rows[rows.length - 1].push(option);
              }
              return rows;
            }, []).map((row, rowIndex) => (
              <div key={rowIndex} className="self-stretch h-6 flex justify-start items-start gap-6">
                {row.map((option) => (
                  <label
                    key={option.value}
                    className="flex-1 flex justify-start items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name={name}
                      value={option.value}
                      checked={value === option.value}
                      onChange={() => handleChange(option.value)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 relative rounded-full outline outline-1 transition-all
                      ${value === option.value 
                        ? 'bg-primary-600 outline-primary-600' 
                        : 'bg-black-alpha-1/5 outline-black-alpha-2/20 group-hover:outline-primary-300'
                      }`}
                    >
                      {value === option.value && (
                        <div className="absolute inset-0 m-auto w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="justify-center text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">
                      {option.label}
                    </div>
                  </label>
                ))}
                {row.length === 1 && <div className="flex-1" />}
              </div>
            ))}
          </>
        ) : (
          // Single column layout
          <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
            {options.map((option) => (
              <label
                key={option.value}
                className="flex justify-start items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={() => handleChange(option.value)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 relative rounded-full outline outline-1 transition-all
                  ${value === option.value 
                    ? 'bg-primary-600 outline-primary-600' 
                    : 'bg-black-alpha-1/5 outline-black-alpha-2/20 group-hover:outline-primary-300'
                  }`}
                >
                  {value === option.value && (
                    <div className="absolute inset-0 m-auto w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <div className="justify-center text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">
                  {option.label}
                </div>
              </label>
            ))}
          </div>
        )}
      </div>
      {error && (
        <span className="text-red-500 text-xs font-normal font-source-sans-pro leading-tight">
          {error}
        </span>
      )}
    </div>
  );
}
