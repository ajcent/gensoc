import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navigation/NavigationBar";
import Footer from "../components/footer/Footer";
import Banner from "./homepage/homeBanner";

function PageLayout() {
  return (
    <>
      <Banner />
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageLayout;
