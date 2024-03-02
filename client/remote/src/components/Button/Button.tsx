import React from 'react';

interface ButtonComponentProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const ButtonComponent = ({ children, ...props }: ButtonComponentProps) => {
  return (
    <button
      className="flex justify-center items-center p-4 m-2 flex-1 h-12 text-white bg-purple-800 hover:bg-purple-500 rounded-lg cursor-pointer transition-colors ease-in-out delay-150"
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
