import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLaptopCode, 
  FaBullhorn, 
  FaPaintBrush,
  FaCode,
  FaServer,
  FaLayerGroup,
  FaSearch,
  FaFacebook,
  FaGoogle,
  FaPalette,
  FaWhatsapp,
  FaDesktop,
  FaEnvelope,
  FaEdit,
  FaLink,
  FaEye,
  FaPenNib,
  FaPencilRuler
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css";

export default function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(services[0]);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="services-content">
          {/* Services Navigation */}
          <nav className="services-nav">
            <div className="tabs-container">
              {services.map((service, index) => (
                <motion.button
                  key={service.title}
                  initial={false}
                  animate={{
                    background: selectedService.title === service.title 
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
                      : "#f8fafc",
                    color: selectedService.title === service.title ? "#fff" : "#2d3748",
                    boxShadow: selectedService.title === service.title 
                      ? "0 8px 20px rgba(102, 126, 234, 0.25)" 
                      : "0 3px 6px rgba(0, 0, 0, 0.05)"
                  }}
                  className="service-tab"
                  onClick={() => setSelectedService(service)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="tab-icon-wrapper">
                    {service.icon}
                  </div>
                  <span className="tab-title">{service.title}</span>
                  {selectedService.title === service.title && (
                    <motion.div 
                      className="active-indicator"
                      layoutId="active-indicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Services Grid */}
          <main className="services-grid-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="service-category-card"
              >
                <div className="category-header">
                  <div className="category-icon-wrapper">
                    {selectedService.icon}
                  </div>
                  <h3 className="category-title">{selectedService.title}</h3>
                  <p className="category-description">
                    {selectedService.description}
                  </p>
                </div>

                <div className="services-items-grid">
                  {selectedService.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.04 }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.08)"
                      }}
                      className="service-item-card"
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleItemClick(item.path)}
                    >
                      <div className="service-item-icon">
                        {getIconForService(item.name)}
                      </div>
                      <div className="service-item-content">
                        <h4 className="service-item-title">{item.name}</h4>
                        <p className="service-item-description">
                          {getDescriptionForService(item.name)}
                        </p>
                      </div>
                      <motion.div 
                        className="service-item-hover"
                        initial={false}
                        animate={{
                          opacity: hoveredItem === item.name ? 1 : 0
                        }}
                      />
                      <div className="service-item-cta">
                        <span className="cta-text">Learn More</span>
                        <span className="cta-arrow">→</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

// Icon mapping function
const getIconForService = (serviceName) => {
  const iconMap = {
    "Frontend Development": <FaCode className="text-blue-500" />,
    "Backend Development": <FaServer className="text-green-500" />,
    "Full-Stack Development": <FaLayerGroup className="text-purple-500" />,
    "SEO Services": <FaSearch className="text-orange-500" />,
    "Social Media Marketing": <FaFacebook className="text-blue-600" />,
    "PPC Services": <FaGoogle className="text-red-500" />,
    "Graphic Design Service": <FaPalette className="text-pink-500" />,
    "WhatsApp Marketing": <FaWhatsapp className="text-green-600" />,
    "Website Design Service": <FaDesktop className="text-indigo-500" />,
    "Email Marketing": <FaEnvelope className="text-yellow-500" />,
    "Content Marketing": <FaEdit className="text-teal-500" />,
    "Affiliate Marketing": <FaLink className="text-amber-500" />,
    "UI/UX Design": <FaEye className="text-cyan-500" />,
    "Logo Design": <FaPenNib className="text-rose-500" />,
    "Graphic Design": <FaPencilRuler className="text-emerald-500" />,
  };
  return iconMap[serviceName] || <FaLaptopCode className="text-gray-500" />;
};

// Description mapping function
const getDescriptionForService = (serviceName) => {
  const descriptionMap = {
    "Frontend Development": "Build responsive, interactive user interfaces with modern frameworks",
    "Backend Development": "Robust server-side solutions and API development",
    "Full-Stack Development": "End-to-end web application development",
    "SEO Services": "Improve search rankings and organic traffic",
    "Social Media Marketing": "Engage audiences across social platforms",
    "PPC Services": "Targeted advertising for immediate results",
    "Graphic Design Service": "Visual content creation and branding",
    "WhatsApp Marketing": "Direct customer engagement through WhatsApp",
    "Website Design Service": "Custom website design and development",
    "Email Marketing": "Effective email campaigns and automation",
    "Content Marketing": "Content strategy and creation",
    "Affiliate Marketing": "Performance-based marketing partnerships",
    "UI/UX Design": "User-centered interface and experience design",
    "Logo Design": "Memorable brand identity creation",
    "Graphic Design": "Visual communication and design solutions",
  };
  return descriptionMap[serviceName] || "Professional service solution";
};

// Services data
const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    description: "Custom web solutions and applications built with cutting-edge technologies",
    items: [
      { name: "Frontend Development", path: "/services/frontend" },
      { name: "Backend Development", path: "/services/backend" },
      { name: "Full-Stack Development", path: "/services/fullstack" },
    ],
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    description: "Strategic marketing solutions to grow your online presence and drive results",
    items: [
      { name: "SEO Services", path: "/services/seo" },
      { name: "Social Media Marketing", path: "/services/social-media" },
      { name: "PPC Services", path: "/services/ppc" },
      { name: "Graphic Design Service", path: "/services/graphic" },
      { name: "WhatsApp Marketing", path: "/services/whatsapp" },
      { name: "Website Design Service", path: "/services/web-design" },
      { name: "Email Marketing", path: "/services/email" },
      { name: "Content Marketing", path: "/services/content" },
      { name: "Affiliate Marketing", path: "/services/affiliate" },
    ],
  },
  {
    title: "Design & Branding",
    icon: <FaPaintBrush />,
    description: "Creative design solutions that build strong brand identities",
    items: [
      { name: "UI/UX Design", path: "/services/uiux" },
      { name: "Logo Design", path: "/services/logo" },
      { name: "Graphic Design", path: "/services/graphic" },
    ],
  },
];