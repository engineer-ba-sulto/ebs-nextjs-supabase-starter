import Footer from "../_components/footer";
import { Header } from "../_components/header/page";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header />
      <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
        {children}
      </div>
      <Footer />
    </main>
  );
}
