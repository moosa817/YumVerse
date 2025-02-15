import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { MainOutlet } from "../components/outlets";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <MainOutlet>
      <main className="grid place-items-center px-6 py-20 pb-24 lg:px-8 dark:bg-dark">
        <div className="text-center">
          <h2 className="font-semibold !text-lightpurple">404</h2>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-grey-900 sm:text-5xl dark:text-white">
            Page Not Found
          </h1>
          <p className="mt-6 text-base leading-7 text-grey-600 dark:text-white">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={() => navigate(-1)}
              icon={<FaArrowLeft className="text-base -ml-1 mr-2" />}
              label="Go Back"
              className="btnLight"
            />
            <Button
              label="Home"
              icon={<MdDashboard className="text-xl mr-1" />}
              className="btnDark"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
      </main>
    </MainOutlet>
  );
};

export default PageNotFound;
