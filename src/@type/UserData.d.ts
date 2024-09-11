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
