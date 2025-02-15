import React, { useEffect } from "react";
import { Footer, Header } from "../../layout";
// import { disableDevTools, getTheme } from "../../utils";
import { Toaster } from "react-hot-toast";

const MainOutlet = ({ children }) => {
  //   let theme = getTheme();
  //   const rootElement = document.documentElement;
  //   rootElement.setAttribute("class", theme);

  //   useEffect(() => {
  // disableDevTools();
  //   }, []);

  return (
    <main className="!bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`">
      <Header />
      {children}
      <Footer />
      <Toaster />
    </main>
  );
};

export default MainOutlet;
