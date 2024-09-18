import React from "react";
import * as S from "./header-component.styles";

type HeaderComponentProps = React.HTMLProps<HTMLDivElement> & {
  children?: React.ReactNode;
};

const HeaderComponent = React.forwardRef<HTMLDivElement, HeaderComponentProps>(
  ({ children, ...props }, ref) => (
    <S.HeaderContainer ref={ref} {...props}>
      {children}
    </S.HeaderContainer>
  )
);

HeaderComponent.displayName = "Header";

export default HeaderComponent;
