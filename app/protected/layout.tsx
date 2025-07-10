import Footer from "../_components/footer";
import Header from "../_components/header/page";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
