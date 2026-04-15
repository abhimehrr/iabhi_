import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { Contact } from "@/components/sections/Contact";
import { Craft } from "@/components/sections/Craft";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Craft />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
