import ImagesSliderDemo from "@/components/Hero";
import Service from "@/components/Service";
import CallToAction from "@/components/CallToAction"
import Features from "@/components/Features"
import Statistics from "@/components/Statistics";
import LatestBLog from "@/components/ui/Blogs";
import Benefits from "@/components/Benifits";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/testimonials";
import Courses from "@/components/Courses";
import HeroCopy from "@/components/HeroCopy";
export default function Home() {
  return (
    <main className="flex  flex-col justify-center items-center ">

      {/* <ImagesSliderDemo /> */}
      <HeroCopy />
      {/* <Service /> */}
      {/* <RecomendedVideo/> */}
      <Features />
      <Benefits />
      <Courses />
      <CallToAction />
      <Statistics />
      <Testimonials />
      <ContactForm />
      <LatestBLog />
    </main>
  );
}
