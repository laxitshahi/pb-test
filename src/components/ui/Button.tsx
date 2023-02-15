import React from "react";

interface Props {
  text: string;
}
function Button({ text }: Props) {
  return <button>{text}</button>;
}

export { Button };
