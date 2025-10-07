'use client';

import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export default function Textarea({ 
  label, 
  error, 
  fullWidth = true,
  className = '',
  id,
  rows = 6,
  ...props 
}: TextareaProps) {
  const textareaId = id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`flex flex-col justify-start items-start gap-2 ${fullWidth ? 'self-stretch' : ''}`}>
      {label && (
        <label 
          htmlFor={textareaId}
          className="self-stretch justify-start text-neutral-800 text-sm font-normal font-inter leading-tight"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        className={`self-stretch p-3 bg-black-alpha-1/5 rounded-md outline outline-1 outline-black-alpha-2/20 
          text-neutral-800 text-base font-normal font-source-sans-pro leading-normal
          placeholder:text-black-alpha-2/20
          focus:outline-2 focus:outline-primary-500 focus:bg-white
          disabled:opacity-50 disabled:cursor-not-allowed
          resize-none
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
