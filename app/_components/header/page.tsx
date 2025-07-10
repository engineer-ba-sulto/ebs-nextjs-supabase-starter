import Link from "next/link";
import { ThemeSwitcher } from "./_components/theme-switcher";
import { AuthButton } from "./_components/auth-button/page";

export function Header() {
  return (
    <header className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <nav className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"}>Engineer BA-Sulto Next.js Supabase Starter</Link>
        </div>
        <div className="flex gap-5 items-center">
          <AuthButton />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
