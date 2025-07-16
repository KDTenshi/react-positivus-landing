import type { FC } from "react";
import "../style/App.css";
import Landing from "../../components/Landing/ui/Landing";
import { TextBlock } from "../../components/TextBlock";
import Services from "./../../components/Services/ui/Services";
import { CallToAction } from "../../components/CallToAction";

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
    </div>
  );
};

export default App;
