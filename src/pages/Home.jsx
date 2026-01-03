import Announcement from "../component/Announcement";
import BulkPickup from "../component/BulkPickup";
import { ElectronicsGadgets } from "../component/ElectronicsGadgets";
import FAQ from "../component/FAQ";
import Hero from "../component/Hero";
import { LargeAppliances } from "../component/LargeAppliances";
import OurJourney from "../component/OurJourney";
import OurPartners from "../component/OurPartners";
import SellSteps from "../component/SellSteps";
import { SmallAppliances } from "../component/SmallAppliances";
import StayUpdated from "../component/StayUpdated";
import Whyus from "../component/Whyus";

const Home = () => {
  return (
    <div>
      <Announcement />
      {/* <Hero /> */}
      <LargeAppliances />
      <SmallAppliances />
      <ElectronicsGadgets />
      <SellSteps />
      <OurPartners />
      <Whyus />
      <OurJourney />
      <BulkPickup />
      <FAQ />
      <StayUpdated />
    </div>
  );
};

export default Home;
