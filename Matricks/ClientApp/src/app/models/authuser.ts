import { User } from "./users";

export interface AuthUser {
  tokenString: string;
  user: User;
};
