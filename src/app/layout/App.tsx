import type { FC } from "react";
import "../style/App.css";
import Landing from "../../components/Landing/ui/Landing";
import { TextBlock } from "../../components/TextBlock";
import Services from "./../../components/Services/ui/Services";
import { CallToAction } from "../../components/CallToAction";
import { Studies } from "../../components/Studies";
import { Process } from "../../components/Process";
import { Team } from "../../components/Team";
import { Testimonials } from "../../components/Testimonials";
import { ContactUs } from "../../components/ContactUs";
import { Footer } from "../../components/Footer";

const App: FC = () => {
  return (
    <div className="App">
      <Landing />
      <TextBlock
        title="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <Services />
      <CallToAction />
      <TextBlock
        title="Case Studies"
        text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <Studies />
      <TextBlock title="Our Working Process" text="Step-by-Step Guide to Achieving Your Business Goals" />
      <Process />
      <TextBlock
        title="Team"
        text="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <Team />
      <TextBlock
        title="Testimonials"
        text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <Testimonials />
      <TextBlock title="Contact Us" text="Connect with Us: Let's Discuss Your Digital Marketing Needs" />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
