export interface TeacherDTO {
  id: string;
  academicTitle: string;
  academicHandles: string;
  gender: string;
  profileUrl: string;
  profileKey: string;
  address: string;
  phone: string;
  secondaryEmail: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface TeacherResponseDTO {
  data: TeacherDTO
}