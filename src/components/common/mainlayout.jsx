import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Page content renders here */}
      <Footer />
    </>
  );
};

export default MainLayout;
