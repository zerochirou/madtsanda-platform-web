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
import { getUserProfile, getUsersProfile } from "@/features/dashboard/profile/services";
import { redirect } from "next/navigation";

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
  const currentUser = await getUserProfile();
  if (!currentUser || (currentUser.data.role !== "admin" && currentUser.data.role !== "super_user")) {
    redirect("/dashboard");
  }

  const usersResponse: UserResponseDTO | null = await getUsersProfile();

  // Redirect if there's no user data or if the API call fails
  if (!usersResponse || !usersResponse.data) {
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
          {/* Mobile View: Card List (<640px) */}
          <div className="sm:hidden space-y-3">
            {users.map((user, index) => (
              <div
                key={user.id}
                className="flex flex-col gap-2 rounded-lg border border-border/60 bg-muted/20 p-3.5 text-sm transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 font-medium text-foreground">
                    <span className="flex size-6 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                      {index + 1}
                    </span>
                    {user.username}
                  </span>
                  <Badge className={`capitalize ${getColorForRole(user.role)}`}>
                    {user.role}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground break-all pl-8">
                  {user.email}
                </div>
              </div>
            ))}
          </div>

          {/* Tablet & Desktop View: Structured Table (>=640px) */}
          <div className="hidden sm:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">ID</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="w-32">Role</TableHead>
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
