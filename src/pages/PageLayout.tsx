import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navigation/NavigationBar";
import Footer from "../components/footer/Footer";

function PageLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageLayout;
