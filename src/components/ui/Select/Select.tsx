'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  fullWidth?: boolean;
}

export default function Select({ 
  label, 
  options,
  placeholder = 'Select one',
  error, 
  fullWidth = true,
  className = '',
  id,
  ...props 
}: SelectProps) {
  const selectId = id || `select-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`flex flex-col justify-start items-start gap-2 ${fullWidth ? 'self-stretch' : ''}`}>
      {label && (
        <label 
          htmlFor={selectId}
          className="self-stretch justify-start text-neutral-800 text-sm font-normal font-inter leading-tight"
        >
          {label}
        </label>
      )}
      <div className="relative self-stretch">
        <select
          id={selectId}
          className={`w-full px-3 py-2 pr-10 bg-black-alpha-1/5 rounded-md outline outline-1 outline-black-alpha-2/20 
            appearance-none text-neutral-800 text-base font-normal font-source-sans-pro leading-normal
            focus:outline-2 focus:outline-primary-500 focus:bg-white
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
            ${error ? 'outline-red-500 focus:outline-red-500' : ''}
            ${className}`}
          {...props}
        >
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown className="w-5 h-5 text-black-alpha-2/40" />
        </div>
      </div>
      {error && (
        <span className="text-red-500 text-xs font-normal font-source-sans-pro leading-tight">
          {error}
        </span>
      )}
    </div>
  );
}
