import React from "react";
import "./Holidays.scss";
import SecondHeroSection from "../../Components/SecondHeroSection/SecondHeroSection";
import EveryoneHolidays from "../../Components/EveryoneHolidays/EveryoneHolidays";
import NeedInspirationSection from "../../Components/NeedInspiration/NeedInspirationSection";
import NextHoliday from "../../Components/NextHoliday/NextHoliday";
import HolidayPlanSection from "../../Components/HolidayPlanSection/HolidayPlanSection";
import RecommendedSection from "../../Components/RecommendedSection/RecommendedSection";

function Holidays() {
  return (
    <div className="holidays-page">
      <SecondHeroSection SecondHeroTitle="Your Perferct Holiday" />
      <EveryoneHolidays />
      <NeedInspirationSection />
      <NextHoliday />
      <HolidayPlanSection itemHolidayPlanTitle="Plan you summer holidays" />
      <div className="mt-4 mt-sm-5">
        <RecommendedSection itemRecommendedTitle="Recommended for you" />
      </div>
    </div>
  );
}
export default Holidays;
