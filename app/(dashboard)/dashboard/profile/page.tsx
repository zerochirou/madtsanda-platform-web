import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { getUserProfile } from "@/features/dashboard/profile/services";
import { getStudentByToken } from "@/features/dashboard/student/services";
import { redirect } from "next/navigation";

export default async function Page() {
  const [user, student] = await Promise.all([
    getUserProfile(),
    getStudentByToken(),
  ]);

  if (!user) {
    redirect("/login");
  }

  const isStudent = student?.data;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardHeader className="flex flex-col items-center text-center p-6 border-b">
          <Avatar className="w-32 h-32 p-1 border-2 border-primary-500 mb-4">
            <AvatarImage
              src={isStudent ? student?.data.profileUrl : undefined}
              alt={user.data.username}
            />
            <AvatarFallback className="text-4xl">
              {user.data.initials}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl font-bold mb-1">
            {user.data.username}
          </CardTitle>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-2">
            {user.data.email}
          </p>
          <Badge className="text-md px-3 py-1 capitalize">
            {user.data.role}
          </Badge>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-2">
              <Label htmlFor="userId">User ID</Label>
              <Input id="userId" value={user.data.id} readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="createdAt">Joined On</Label>
              <Input
                id="createdAt"
                value={new Date(user.data.createdAt).toLocaleDateString()}
                readOnly
              />
            </div>

            {isStudent && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="nis">NIS</Label>
                  <Input id="nis" value={student.data.nis} readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nisn">NISN</Label>
                  <Input id="nisn" value={student.data.nisn} readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Input
                    id="gender"
                    value={
                      student.data.gender === "L" ? "Laki-laki" : "Perempuan"
                    }
                    readOnly
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value={student.data.phone} readOnly />
                </div>
                <div className="space-y-2 col-span-1 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" value={student.data.address} readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="grade">Grade</Label>
                  <Input id="grade" value={student.data.grade} readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="class">Class</Label>
                  <Input id="class" value={student.data.class} readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Input
                    id="status"
                    value={student.data.status}
                    readOnly
                    className="capitalize"
                  />
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
