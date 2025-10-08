
import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export default function Input({ 
  label, 
  error, 
  fullWidth = false,
  className = '',
  id,
  ...props 
}: InputProps) {
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`flex flex-col justify-start items-start gap-2 ${fullWidth ? 'w-full flex-1' : ''}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className="self-stretch justify-start text-neutral-800 text-sm font-normal font-inter leading-tight"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full px-3 py-2 bg-black-alpha-1/5 rounded-md outline outline-1 outline-black-alpha-2/20 
          flex justify-start items-center gap-2 text-neutral-800 text-base font-normal font-source-sans-pro leading-normal
          placeholder:text-black-alpha-2/40
          focus:outline-2 focus:outline-primary-500 focus:bg-white
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          ${error ? 'outline-red-500 focus:outline-red-500' : ''}
          ${className}`}
        {...props}
      />
      {error && (
        <span className="text-red-500 text-xs font-normal font-source-sans-pro leading-tight">
          {error}
        </span>
      )}
    </div>
  );
}
