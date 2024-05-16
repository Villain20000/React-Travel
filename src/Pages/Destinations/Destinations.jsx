import React from "react";
import "./Destinations.scss";
import SecondHeroSection from "../../Components/SecondHeroSection/SecondHeroSection";
import EuropeDestinationsSection from "../../Components/DestinationsSection/EuropeDestinationsSection";
import HolidayPlanSection from "../../Components/HolidayPlanSection/HolidayPlanSection";
import AsiaDestinationsSection from "../../Components/DestinationsSection/AsiaDestinationsSection";
import RecommendedSection from "../../Components/RecommendedSection/RecommendedSection";

function Destinations() {
  return (
    <div className="destinations-page">
      <SecondHeroSection SecondHeroTitle="Beautiful Destinations" />
      <EuropeDestinationsSection />
      <HolidayPlanSection itemHolidayPlanTitle="Find your Perfect Holiday Plan" />
      <AsiaDestinationsSection />
      <div className="mt-4 mt-sm-5">
        <RecommendedSection itemRecommendedTitle="Recommended for you" />
      </div>
    </div>
  );
}
export default Destinations;
