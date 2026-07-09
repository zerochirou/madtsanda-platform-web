import { redirect } from "next/navigation";

export default function ExtracurricularRedirectPage() {
  redirect("/organizations/extracurricular");
  return null;
}
