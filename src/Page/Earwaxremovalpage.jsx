// App.jsx
// src/App.jsx


import HeroMicroSuction from "../components/Service/Earwaxremovalpage/HeroMicroSuction";
import MicroSuctionInfo from "../components/Service/Earwaxremovalpage/MicroSuctionInfo";
import WaxBuildUpReasons from "../components/Service/Earwaxremovalpage/WaxBuildUpReasons";
import ProcessSection from "../components/Service/Earwaxremovalpage/ProcessSection";
import SafetySection from "../components/Service/Earwaxremovalpage/SafetySection";
import AppointmentExpectations from "../components/Service/Earwaxremovalpage/AppointmentExpectations";

function Earwax() {
  return (
    <>
      <HeroMicroSuction />
      <MicroSuctionInfo />
      <WaxBuildUpReasons />
      <ProcessSection />
      <SafetySection />
      <AppointmentExpectations />

    </>
  );
}

export default Earwax;
