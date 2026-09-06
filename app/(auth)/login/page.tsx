import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LoginLayout } from "@/features/auth/components/layout";
import { LoginForm } from "@/features/auth/components/login-form";

export default async function Login() {
  const cookieStore = await cookies();
  if (cookieStore.get("auth_token")) {
    redirect("/dashboard");
  }

  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
}
