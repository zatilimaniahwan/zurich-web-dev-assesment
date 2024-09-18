import FooterComponent from "../components/footer-component/footer-component";

/**
 * The Footer component renders a simple footer with the current year.
 *
 * @returns {JSX.Element} The JSX element representing the Footer component.
 */
const Footer = () => (
  <FooterComponent>
    <p>© {new Date().getFullYear()} Zurich Malaysia</p>
  </FooterComponent>
);
export default Footer;
