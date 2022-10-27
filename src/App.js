import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import FlippingPage from "./pages/FlippingPage";
import Test from "./pages/Test";
import HappyAniPage from "./pages/HappyAniPage";
import Album from "./pages/Album";
import Protected from "./components/Protected";

function App() {
  localStorage.setItem("isLogin", false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/hint" element={<FlippingPage />} />

        <Route
          path="/screen1"
          element={
            <Protected>
              <LandingPage />
            </Protected>
          }
        />

        <Route
          path="/screen2"
          element={
            <Protected>
              <HappyAniPage />
            </Protected>
          }
        />

        <Route
          path="/screen3"
          element={
            <Protected>
              <Album />
            </Protected>
          }
        />

        <Route path="/test" element={<Test />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
