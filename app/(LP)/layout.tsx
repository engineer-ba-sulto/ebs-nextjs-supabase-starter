import Footer from "../_components/footer";
import Header from "../_components/header/page";
import Hero from "./_components/hero";

export default function LPLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />
      <Hero />
      {children}
      <Footer />
    </div>
  );
}
