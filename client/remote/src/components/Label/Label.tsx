import React from 'react';

interface LabelComponentProps extends React.HTMLProps<HTMLLabelElement> {}

const LabelComponent = ({ children, htmlFor }: LabelComponentProps) => {
  return (
    <label htmlFor={htmlFor} className="text-xs">
      {children}
    </label>
  );
};

export default LabelComponent;
