import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";

// Pages
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import GetQuote from "../pages/GetQuote.jsx";
import ServicesPage from "../pages/ServicesPage.jsx"; // NEW: Create this file
import NotFound from "../pages/NotFound.jsx";

// Service Detail Pages
import SEO from "../pages/Services/Seo.jsx";
import SocialMedia from "../pages/Services/SocialMedia.jsx";
import Webdesign from "../pages/Services/Webdesign.jsx";
import Frontend from "../pages/Services/Frontend.jsx";
import Backend from "../pages/Services/Backend.jsx";
import Fullstack from "../pages/Services/Fullstack.jsx";
import EmailMarketing from "../pages/Services/EmailMarketing.jsx";
import UIUX from "../pages/Services/UIUX.jsx";
import LogoDesign from "../pages/Services/LogoDesign.jsx";
import PPC from "../pages/Services/PPC.jsx"; // NEW
import WhatsAppMarketing from "../pages/Services/WhatsAppMarketing.jsx"; // NEW
import ContentMarketing from "../pages/Services/ContentMarketing.jsx"; // NEW
import AffiliateMarketing from "../pages/Services/AffiliateMarketing.jsx"; // NEW
import GraphicDesign from "../pages/Services/GraphicDesign.jsx"; // NEW

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
      { path: "services", element: <ServicesPage /> }, // Services main page
      
      // Individual Service Pages
      { path: "services/seo", element: <SEO /> },
      { path: "services/social-media", element: <SocialMedia /> },
      { path: "services/web-design", element: <Webdesign /> },
      { path: "services/frontend", element: <Frontend /> },
      { path: "services/backend", element: <Backend /> },
      { path: "services/fullstack", element: <Fullstack /> },
      { path: "services/email", element: <EmailMarketing /> },
      { path: "services/uiux", element: <UIUX /> },
      { path: "services/logo", element: <LogoDesign /> },
      { path: "services/ppc", element: <PPC /> },
      { path: "services/whatsapp", element: <WhatsAppMarketing /> },
      { path: "services/content", element: <ContentMarketing /> },
      { path: "services/affiliate", element: <AffiliateMarketing /> },
      { path: "services/graphic", element: <GraphicDesign /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);