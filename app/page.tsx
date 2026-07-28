import dynamic from "next/dynamic";
import LazySection from "@/components/LazySection";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Courses from "@/components/sections/Courses";

// Lazy-loaded sections
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="h-20" />,
});

const Results = dynamic(() => import("@/components/sections/Results"), {
  loading: () => <div className="h-20" />,
});

const Faculty = dynamic(() => import("@/components/sections/Faculty"), {
  loading: () => <div className="h-20" />,
});

const Facilities = dynamic(() => import("@/components/sections/Facilities"), {
  loading: () => <div className="h-20" />,
});

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  {
    loading: () => <div className="h-20" />,
  }
);

const Gallery = dynamic(() => import("@/components/sections/Gallery"), {
  loading: () => <div className="h-20" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="h-20" />,
});

const CTA = dynamic(() => import("@/components/sections/CTA"), {
  loading: () => <div className="h-20" />,
});

const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading: () => <div className="h-20" />,
});

export default function Home() {
  return (
    <>
      <AnnouncementBar />

      <Navbar />

      {/* First screen */}
      <Hero />

<Courses />

<LazySection placeholderHeight={700}>
  <About />
</LazySection>

<LazySection placeholderHeight={900}>
  <Results />
</LazySection>

<LazySection placeholderHeight={700}>
  <Faculty />
</LazySection>

<LazySection placeholderHeight={700}>
  <Facilities />
</LazySection>

<LazySection placeholderHeight={600}>
  <Testimonials />
</LazySection>

<LazySection placeholderHeight={900}>
  <Gallery />
</LazySection>

<Contact />

<LazySection placeholderHeight={250}>
  <CTA />
</LazySection>

<LazySection placeholderHeight={300}>
  <Footer />
</LazySection>
   </>
  );
}