import * as S from "./user-list.styles";

type UserListProps = {
  userInfo?: UserInfo;
};
const UserList = ({ userInfo }: UserListProps) => (
  <S.UserListContainer>
    <S.UserListContent>Hello! </S.UserListContent>
  </S.UserListContainer>
);

export default UserList;
