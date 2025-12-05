import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import React from "react";

// Lazy load pages for loader support
const Home = React.lazy(() => import("../pages/Home.jsx"));
const About = React.lazy(() => import("../pages/About.jsx"));
const Contact = React.lazy(() => import("../pages/Contact.jsx"));
const Portfolio = React.lazy(() => import("../pages/Portfolio.jsx"));
const GetQuote = React.lazy(() => import("../pages/GetQuote.jsx"));
const ServicesPage = React.lazy(() => import("../pages/ServicesPage.jsx"));
const NotFound = React.lazy(() => import("../pages/NotFound.jsx"));

// Service Detail Pages
const SEO = React.lazy(() => import("../pages/Services/Seo.jsx"));
const SocialMedia = React.lazy(() =>
  import("../pages/Services/SocialMedia.jsx")
);
const Webdesign = React.lazy(() => import("../pages/Services/Webdesign.jsx"));
const Frontend = React.lazy(() => import("../pages/Services/Frontend.jsx"));
const Backend = React.lazy(() => import("../pages/Services/Backend.jsx"));
const Fullstack = React.lazy(() => import("../pages/Services/Fullstack.jsx"));
const EmailMarketing = React.lazy(() =>
  import("../pages/Services/EmailMarketing.jsx")
);
const UIUX = React.lazy(() => import("../pages/Services/UIUX.jsx"));
const LogoDesign = React.lazy(() => import("../pages/Services/LogoDesign.jsx"));
const PPC = React.lazy(() => import("../pages/Services/PPC.jsx"));
const WhatsAppMarketing = React.lazy(() =>
  import("../pages/Services/WhatsAppMarketing.jsx")
);
const ContentMarketing = React.lazy(() =>
  import("../pages/Services/ContentMarketing.jsx")
);
const AffiliateMarketing = React.lazy(() =>
  import("../pages/Services/AffiliateMarketing.jsx")
);
const GraphicDesign = React.lazy(() =>
  import("../pages/Services/GraphicDesign.jsx")
);

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
      { path: "services", element: <ServicesPage /> },

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
