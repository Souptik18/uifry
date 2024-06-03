import React from "react";
import FinanceSection from "./FinanceSection";
import PhoneDisplay from "./PhoneDisplay";
import GetStarted from "./GetStarted";

function LandingPage() {
  return (
    <>
      <div className="w-[1090px] h-[480px] relative grid grid-cols-1 lg:grid-cols-2  px-4 sm:px-6 lg:px-8">
        <GetStarted />
        <PhoneDisplay />
        <FinanceSection />
      </div>
    </>
  );
}

export default LandingPage;
