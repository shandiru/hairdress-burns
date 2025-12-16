// App.jsx
// src/App.jsx


import Hero from "../components/Homepage/Hero";
import OurWorkSection from "../components/Homepage/OurWorkSection"
import MeetHarrietSection from "../components/Homepage/MeetHarrietSection"
import TestimonialsSection from "../components/Homepage/TestimonialsSection"
import ServicesPricingSection from "../components/Homepage/ServicesPricingSection"
import ContactSection from "../components/Homepage/ContactSection"
import Products from "../components/Homepage/products";
import Gallery from "../components/Homepage/Gallery";
function Home() {
  return (
    <>

      <Hero />
      <MeetHarrietSection />
      <OurWorkSection />
      <TestimonialsSection />
      <ServicesPricingSection />
      <Gallery />
      <Products />
      <ContactSection />
    
    </>
  );
}

export default Home;
