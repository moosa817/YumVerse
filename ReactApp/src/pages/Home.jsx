import React from "react";
import { MainOutlet } from "../components/outlets";
import Testimonials from "../components/ui/testimonials/Testimonial";
import { HeroSection } from "../components/ui";

const Home = () => {
  return (
    <MainOutlet>
      <div className="bg-[url(../assets/images/banner1.png)] bg-[center_center] bg-cover bg-no-repeat w-full h-[90vh]"></div>
      <HeroSection />
      <div className="bg-fixed bg-[url(../assets/images/masla-img.jpg)] bg-[center_top] bg-cover bg-no-repeat w-full h-[350px] flex justify-center items-center text-white">
        <h1 className="text-center">
          Food brings people together on many different levels. It's nourishment
          of the soul and body, it's truly love.
        </h1>
      </div>
      <Testimonials />
    </MainOutlet>
  );
};

export default Home;
