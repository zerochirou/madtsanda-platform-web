import z from "zod";

export interface UserDTO {
  id: string;
  username: string;
  email: string;
  initials: string;
  role: "admin" | "super_user" | "student" | "teacher";
  createdAt: string;
  updatedAt: string;
}

export interface UserResponseDTO {
  data: UserDTO;
}

export const loginSchema = z.object({
  email: z.email("Format email tidak valid"),
  password: z.string().min(6, "Password minimal harus 6 karakter"),
});
