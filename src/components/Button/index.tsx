import * as React from "react";

import * as s from "./styles";

type ButtonProps = {
  children: React.ReactChild;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const Button = ({ children, variant = "primary", onClick }: ButtonProps) => {
  return (
    <s.Wrapper onClick={onClick} variant={variant}>
      {children}
    </s.Wrapper>
  );
};

export default Button;
