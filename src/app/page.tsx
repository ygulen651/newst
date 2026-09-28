import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import StackedVisuals from "@/components/sections/StackedVisuals";
import Trust from "@/components/home/Trust";
import Scenarios from "@/components/home/Scenarios";
import WhyUs from "@/components/home/WhyUs";
import Brands from "@/components/home/Brands";
import Footer from "@/components/layout/Footer";
import { getSolutions } from "@/lib/firebase/solutions";

// Rendered per request so content edits from the admin panel show up without a rebuild.
export const dynamic = "force-dynamic";

export default async function Home() {
  const solutions = await getSolutions();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StackedVisuals />
        <Trust />
        <Scenarios solutions={solutions} />
        <Brands />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
