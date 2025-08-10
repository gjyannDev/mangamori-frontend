import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container-custom text-base-black">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
