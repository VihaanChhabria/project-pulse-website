import GrainOverlay from "../components/GrainOverlay";
import Header from "../components/Header";
import LandingFooter from "../components/LandingFooter";
import ClinicsSection from "../components/landing/ClinicsSection";
import DonationsSection from "../components/landing/DonationsSection";
//import ExecutiveBoardSection from "../components/landing/ExecutiveBoardSection";
import GetInTouchSection from "../components/landing/GetInTouchSection";
import MissionSection from "../components/landing/MissionSection";
//import NewsSection from "../components/landing/NewsSection";
// import NewsletterSection from "../components/landing/NewsletterSection";
import VolunteerSection from "../components/landing/VolunteerSection";

export default function LandingPage() {
  return (
    <div className="font-body-md text-body-md">
      <GrainOverlay />
      <Header />

      <main>
        <MissionSection />
        <ClinicsSection />
        {/* <NewsSection /> */}
        {/* <ExecutiveBoardSection /> */}
        <DonationsSection />
        <VolunteerSection />
      </main>

      {/* <NewsletterSection /> */}
      <GetInTouchSection />
      <LandingFooter />
    </div>
  );
}
