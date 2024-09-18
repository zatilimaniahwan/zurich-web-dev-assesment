import React, { forwardRef, Ref } from "react";
import * as S from "./footer-component.styles";

const FooterComponent = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref: Ref<HTMLDivElement>) => (
  <S.FooterContainer ref={ref} {...props}>
    {props.children}
  </S.FooterContainer>
));

FooterComponent.displayName = "Footer";

export default FooterComponent;
