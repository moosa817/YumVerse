import React from "react";
import { MainOutlet } from "../components/outlets";

const AboutUs = () => {
  return (
    <MainOutlet>
      <div className="my-14 text-black dark:text-white">
        <h1 className="text-center">Our Purpose</h1>
        <br />
        <div className="w-[95%] 800px:w-[85%] m-auto">
          <p className="text-[18px]">
            At YUMVERSE, we understand that human psychology is driven by the
            desire to try new things, learn from experiences, and create
            something unique. With this in mind, we aim to address the growing
            need for better diet plans for people living in unhealthy,
            fast-paced environments. YUMVERSE offers a solution by providing an
            innovative platform that surprises your taste buds through our
            personalized food algorithm. The YUMVERSE community allows users to
            explore recipes from all corners of the world, created and
            customized by individuals based on their personal preferences. It
            serves as a space to showcase cooking talents, share unique recipes,
            or simply store them for future use. Whether you’re seeking
            nutrition or flavor fulfillment, YUMVERSE offers everything you need
            to improve your daily eating habits.
          </p>
          <br />
          <h1>Who are we?</h1>
          <p>
            YUMVERSE was founded by three students, each bringing their unique
            expertise, who recognized the need to create a project that would
            address both the enjoyment of food and the importance of maintaining
            a healthy diet. Together, we wanted to take a step toward a better
            future, offering not just a burst of savory flavor but also ensuring
            nutritional fulfillment for optimal health. Inspired by the wisdom
            of our elders, who often say, "You are what you eat," we aim to put
            this theory to the test with the creation of this web app.{" "}
          </p>
          <br />
          <h1>What we offer:</h1>
          <ul>
            <li>A diverse collection of recipes</li>
            <li>AI-driven user health profiles</li>
            <li>Personalized recipe recommendations and creations</li>
            <li>Recipe ratings and feedback for users</li>
          </ul>
        </div>
      </div>
    </MainOutlet>
  );
};

export default AboutUs;
