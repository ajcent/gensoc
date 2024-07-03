import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navigation/NavigationBar";

function PageLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default PageLayout;
