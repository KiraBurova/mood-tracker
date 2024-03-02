interface FormErrorMessageProps {
  message: string;
}

const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
  return <p className="text-red-500 text-xs">{message}</p>;
};

export default FormErrorMessage;
