import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserDTO, UserResponseDTO } from "@/types/dto/user";
import { getUsersProfile } from "@/features/dashboard/profile/services";

// Helper function to get color class based on role
const getColorForRole = (role: UserDTO["role"]): string => {
  switch (role) {
    case "admin":
      return "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700";
    case "super_user":
      return "bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700";
    case "teacher":
      return "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700";
    case "student":
      return "bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700";
    default:
      return "bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700";
  }
};

export default async function UserProfileTablePage() {
  const usersResponse: UserResponseDTO | null = await getUsersProfile();

  // Redirect if there's no user data or if the API call fails
  if (!usersResponse || !usersResponse.data) {
    // Optionally redirect to a login page or show an error
    // If this page requires authentication, redirecting to login might be more appropriate.
    // redirect("/login"); // Uncomment if redirection is desired for no data
    return (
      <div className="flex flex-col items-center justify-center p-4 min-h-screen">
        <p className="text-zinc-500 dark:text-zinc-400">
          No user data available or failed to fetch users.
        </p>
      </div>
    );
  }

  // Ensure users is an array. If getUsersProfile returns a single UserDTO for data,
  // we wrap it in an array to maintain consistency for mapping.
  const users: UserDTO[] = Array.isArray(usersResponse.data)
    ? usersResponse.data
    : [usersResponse.data];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Manajemen Pengguna</CardTitle>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Daftar semua pengguna dalam sistem.
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">ID</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        className={`capitalize ${getColorForRole(user.role)}`}
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
