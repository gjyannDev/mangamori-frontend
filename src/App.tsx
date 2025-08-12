import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container-custom text-base-black">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
