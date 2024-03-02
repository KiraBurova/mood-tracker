import React, { forwardRef } from 'react';

interface InputComponentProps extends React.HTMLAttributes<HTMLInputElement> {}

const InputComponent = forwardRef((props: InputComponentProps) => {
  return <input className="rounded border-2 p-1 border-gray-300" {...props} />;
});

export default InputComponent;
