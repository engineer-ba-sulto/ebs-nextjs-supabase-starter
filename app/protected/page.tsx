import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <main className="flex-1 w-full flex flex-col gap-12">
      <h2 className="font-bold text-2xl mb-4">Service Page</h2>
    </main>
  );
}
