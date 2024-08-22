import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LayOut = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100, // Duration of animations
      easing: "ease-in-out", // Easing function
      once: true,
      // Whether animation should happen only once
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <NavBar></NavBar>

      <div className=" overflow-hidden container mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default LayOut;
