'use client'
import ColleagueSection from "@/app/sections/HomePage/ColleagueSection";
import ExperienceClinicSection from "@/app/sections/HomePage/ExperienceClinicSection";
import FeatureSection from "@/app/sections/HomePage/FeatureSection";
import HomeSection from "@/app/sections/HomePage/HomeSection";
import MapSection from "@/app/sections/HomePage/MapSection";
import PartnerSection from "@/app/sections/HomePage/PartnerSection";
import FooterSection from "@/app/sections/HomePage/FooterSection";
import RoadMapSection from "@/app/sections/HomePage/RoadMapSection";
import ScienceBaseSection from "@/app/sections/HomePage/ScienceBaseSection";
import { KinisToolSection } from "@/app/sections/HomePage/KinisToolSection";



export default function Home() {


  return (
      // <AnimatePresence>
        <main>
          <div className="h-[400vh]">
            <HomeSection />
          </div>
          <PartnerSection />
          <MapSection />
          <ScienceBaseSection />
          <FeatureSection />
          <KinisToolSection />
          <ExperienceClinicSection />
          <ColleagueSection />
          <RoadMapSection />
          <FooterSection />
        </main>
      // </AnimatePresence>
  );
}

