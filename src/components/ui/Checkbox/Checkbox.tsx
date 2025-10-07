'use client';

import React from 'react';
import { Check } from 'lucide-react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export default function Checkbox({ 
  label, 
  error,
  checked,
  onChange,
  className = '',
  id,
  ...props 
}: CheckboxProps) {
  const checkboxId = id || `checkbox-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`flex flex-col justify-start items-start gap-2 ${className}`}>
      <label 
        htmlFor={checkboxId}
        className="pb-4 flex justify-start items-center gap-2 cursor-pointer group"
      >
        <input
          type="checkbox"
          id={checkboxId}
          checked={checked}
          onChange={onChange}
          className="sr-only"
          {...props}
        />
        <div className={`w-4 h-4 relative rounded-sm outline outline-1 transition-all flex items-center justify-center
          ${checked 
            ? 'bg-primary-600 outline-primary-600' 
            : 'bg-black-alpha-1/5 outline-black-alpha-2/20 group-hover:outline-primary-300'
          }`}
        >
          {checked && (
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          )}
        </div>
        {label && (
          <div className="justify-center text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">
            {label}
          </div>
        )}
      </label>
      {error && (
        <span className="text-red-500 text-xs font-normal font-source-sans-pro leading-tight">
          {error}
        </span>
      )}
    </div>
  );
}
