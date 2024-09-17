import React from "react";
import * as S from "./button.styles";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => (
  <S.Button ref={ref} {...props}>
    {children}
  </S.Button>
));

export default Button;
