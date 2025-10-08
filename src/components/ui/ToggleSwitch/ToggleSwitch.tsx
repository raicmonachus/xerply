
import { useState } from 'react';

interface ToggleSwitchProps {
  label?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  labelClassName?: string;
}

export default function ToggleSwitch({
  label,
  defaultChecked = false,
  onChange,
  className = '',
  labelClassName = ''
}: ToggleSwitchProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div
      data-alternate="False"
      data-selected={isChecked ? "True" : "False"}
      className={`flex justify-start items-center gap-2 cursor-pointer ${className}`}
      onClick={handleToggle}
    >
      {/* Toggle Switch */}
      <div
        className={`w-10 p-1 rounded-[500px] outline outline-1 outline-offset-[-1px] outline-black-alpha-3/25 inline-flex flex-col transition-all duration-300 ${
          isChecked
            ? 'bg-primary-600 justify-end items-end'
            : 'bg-black-alpha-2/20 justify-center items-start'
        }`}
      >
        <div
          className={`w-4 h-4 relative rounded-[50px] transition-all duration-300 ${
            isChecked ? 'bg-neutral-50' : 'bg-neutral-50'
          }`}
        />
      </div>

      {/* Label */}
      {label && (
        <div
          className={`justify-center text-Color-Neutral-Darkest text-base font-normal font-source-sans-pro leading-normal ${labelClassName}`}
        >
          {label}
        </div>
      )}
    </div>
  );
}
