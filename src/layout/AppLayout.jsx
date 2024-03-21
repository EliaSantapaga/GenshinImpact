import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar";

function AppLayout({ children }) {
  return (
    <>
      <AppNavbar />
      {children}
      <AppFooter />
    </>
  );
}

export default AppLayout;
