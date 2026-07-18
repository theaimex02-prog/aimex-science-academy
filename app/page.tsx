import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import CourseFAQ from "@/components/courses/CourseFAQ";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Courses from "@/components/sections/Courses";
import Results from "@/components/sections/Results";
import Faculty from "@/components/sections/Faculty";
import Facilities from "@/components/sections/Facilities";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <Hero />

      <About />

      <Courses />

      <Results />

      <Faculty />

      <Facilities />

      <Testimonials />

      <Gallery />

      <Contact />

      <CTA />

      <Footer />
    </>
  );
}