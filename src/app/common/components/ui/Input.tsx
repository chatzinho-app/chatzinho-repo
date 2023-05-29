import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
    startDecorator?: React.ReactNode;
    endDecorator?: React.ReactNode;
}

export default function Input({hasError,startDecorator, endDecorator,className,...props}: InputProps) {
  const inputClassName = twMerge(
    'block bg-white description-text text-dark-gray placeholder-gray border border-light-gray rounded-full focus:ring-2 focus:outline-none focus:ring-light-blue focus:border-light-blue block w-full px-2 py-1',
    hasError &&
      'border-error text-error placeholder-error focus:ring-error/50 focus:border-error/50',
      !!startDecorator && 'pl-6'
  );

  return (
    <div className={twMerge("relative", className)}>
      {!!startDecorator && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {startDecorator}
        </div>
      )}
        <input className={inputClassName} {...props} />
        <div className={twMerge("absolute right-3 bottom-1.5", hasError ? "text-error" : "text-gray")}>
          {endDecorator}
        </div>
    </div>
  )
}
