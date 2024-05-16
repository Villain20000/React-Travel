import React from "react";
import "./CityBreaks.scss";
import SecondHeroSection from "../../Components/SecondHeroSection/SecondHeroSection";
import AmsterdamCityBreakSection from "../../Components/CityBreakSection/AmsterdamCityBreakSection";
import LondonCityBreakSection from "../../Components/CityBreakSection/LondonCityBreakSection";
import HolidayPlanSection from "../../Components/HolidayPlanSection/HolidayPlanSection";
import RecommendedSection from "../../Components/RecommendedSection/RecommendedSection";
import ParisCityBreaksSection from "../../Components/CityBreakSection/ParisCityBreakSection";
import NeedInspirationSection from "../../Components/NeedInspiration/NeedInspirationSection";

function CityBreaks() {
  return (
    <div className="city-breaks-page">
      <SecondHeroSection SecondHeroTitle="City Break for you" />
      <AmsterdamCityBreakSection />
      <HolidayPlanSection itemHolidayPlanTitle="Find your perfect summer holiday" />
      <LondonCityBreakSection />
      <div className="my-4 my-sm-5">
        <RecommendedSection itemRecommendedTitle="Your Dream Holiday" />
      </div>
      <ParisCityBreaksSection />
      <NeedInspirationSection />
    </div>
  );
}
export default CityBreaks;
