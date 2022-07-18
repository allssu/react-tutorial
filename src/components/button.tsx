import { FC } from "react";

interface ButtonProps {
  setInnerText: Function;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      onClick={() => {
        props.setInnerText("hello react!");
      }}
    >
      버튼
    </button>
  );
};

export default Button;
