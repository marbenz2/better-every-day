import { benefits, platform } from "./data/benefits.json";

import CallToAction from "./components/action/CallToAction";
import Benefits from "./components/benefits/Benefits";
import Companies from "./components/companies/Companies";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Reviews from "./components/reviews/Reviews";
import More from "./components/more/More";
import TakeAction from "./components/action/TakeAction";
import Pricing from "./components/pricing/Pricing";

function App() {
  return (
    <main className="flex flex-col gap-24 overflow-x-clip [&>*]:scroll-mt-24">
      <Navigation />
      <CallToAction />
      <Companies />
      <Benefits id="benefits" data={benefits} />
      <Pricing />
      <Reviews />
      <Benefits id="platform-benefits" data={platform} />
      <More />
      <TakeAction />
      <Footer />
    </main>
  );
}

export default App;
