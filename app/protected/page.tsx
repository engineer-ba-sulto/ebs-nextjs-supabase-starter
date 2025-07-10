import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <main className="w-full flex-1 flex flex-col max-w-5xl p-5">
      <h2 className="font-bold text-2xl text-center">Service Page</h2>
    </main>
  );
}
