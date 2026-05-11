import { Role } from "../access";

export interface StudentDTO {
  id: string;
  nis: string;
  gender: string;
  nisn: string;
  address: string;
  phone: string;
  status: string;
  grade: string;
  class: string;
  profileKey: string;
  profileUrl: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: Role;
    createdAt: string;
    updatedAt: string;
  };
}

export interface StudentResponseDTO {
  data: StudentDTO;
}
