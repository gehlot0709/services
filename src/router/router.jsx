// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";

// Pages
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import GetQuote from "../pages/GetQuote.jsx";
import NotFound from "../pages/NotFound.jsx";

// Services
import SEO from "../pages/Services/Seo.jsx";
import SocialMedia from "../pages/Services/SocialMedia.jsx";
import WebDev from "../pages/Services/WebDev.jsx";
import Frontend from "../pages/Services/Frontend.jsx";
import Backend from "../pages/Services/Backend.jsx";
import Fullstack from "../pages/Services/Fullstack.jsx";
import EmailMarketing from "../pages/Services/EmailMarketing.jsx";
import UIUX from "../pages/Services/UIUX.jsx";
import LogoDesign from "../pages/Services/LogoDesign.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "get-quote", element: <GetQuote /> },

      // Services
      { path: "services/seo", element: <SEO /> },
      { path: "services/social-media", element: <SocialMedia /> },
      { path: "services/web-dev", element: <WebDev /> },
      { path: "services/frontend", element: <Frontend /> },
      { path: "services/backend", element: <Backend /> },
      { path: "services/fullstack", element: <Fullstack /> },
      { path: "services/email", element: <EmailMarketing /> },
      { path: "services/uiux", element: <UIUX /> },
      { path: "services/logo", element: <LogoDesign /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
