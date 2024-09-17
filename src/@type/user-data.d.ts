type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type UserResponse = {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

type GoogleUserProfile = {
  name: string | null | undefined;
  email: string | null | undefined;
  picture: string | null | undefined;
  sub: string | null | undefined;
  id: string | null | undefined;
  image: string | null | undefined;
  iat: number | null | undefined;
  exp: number | null | undefined;
  jti: string | null | undefined;
  isAuthenticated: boolean;
};
