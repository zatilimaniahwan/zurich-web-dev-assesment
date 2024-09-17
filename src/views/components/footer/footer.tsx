import * as S from "./footer.styles";

const Footer = () => (
  <S.FooterContainer>
    <p>© {new Date().getFullYear()} Zurich Malaysia</p>
  </S.FooterContainer>
);

export default Footer;
