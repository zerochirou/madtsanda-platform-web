import { VineError } from "./error";
import { UserDTO } from "./user";

export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  data: {
    token: string
    user: UserDTO;
  };
}

export interface LoginFailedResponseDTO {
  errors: VineError[]
}
