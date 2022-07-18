import { FC } from "react";

interface TextProps {
  innerText: string;
}

const Text: FC<TextProps> = (props: TextProps) => {
  return <h2>상태는 :{props.innerText}</h2>;
};

export default Text;
