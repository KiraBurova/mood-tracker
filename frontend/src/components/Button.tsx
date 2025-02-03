type Props = {
  text: string;
  id: number;
  className?: string;
  onClick: (id: number) => void;
};

const Button = ({ text, className, id, onClick }: Props) => {
  return (
    <button className={className} onClick={() => onClick(id)}>
      {text}
    </button>
  );
};

export default Button;
