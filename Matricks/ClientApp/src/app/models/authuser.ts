import { User } from "./users";

export interface AuthUser {
  tokenString: string;
  userName: User; // TEST
};
