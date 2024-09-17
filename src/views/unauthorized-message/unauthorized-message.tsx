import * as S from "./unauthorized-message.styles";
type UnauthorizedMessageProps = {
  handleRedirect: () => void;
};
/**
 * The UnauthorizedMessage component is used to display an unauthorized access
 * message to users who do not have permission to access the system.
 *
 * @param {UnauthorizedMessageProps} props - The component props.
 * @returns {JSX.Element} The JSX element representing the UnauthorizedMessage component.
 */
const UnauthorizedMessage = ({ handleRedirect }: UnauthorizedMessageProps) => (
  <S.UnauthorizedContainer>
    <S.UnauthorizedTitle>Unauthourized Access</S.UnauthorizedTitle>
    <S.UnauthorizedMessage>
      You do not have permission to access this system.
    </S.UnauthorizedMessage>
    <S.BackButton onClick={handleRedirect}>Back</S.BackButton>
  </S.UnauthorizedContainer>
);

export default UnauthorizedMessage;
