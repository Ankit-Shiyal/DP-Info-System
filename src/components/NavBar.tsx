"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { useState, useRef } from "react";

// --- Data ---
const navData = {
  Solutions: {
    purpose: "What business problems do you solve?",
    items: ["Enterprise Software", "AI & Intelligent Automation", "Business Process Automation", "Digital Transformation", "Cloud & Infrastructure", "Legacy System Modernization", "Data & Analytics", "Custom Software Development"],
    featured: {
      title: "Helping businesses build scalable digital platforms",
      desc: "that improve operations, automate workflows, and accelerate growth.",
      linkText: "View All Solutions"
    }
  },
  Services: {
    purpose: "How do you deliver solutions?",
    items: ["Software Consulting", "Product Discovery", "UI / UX Design", "Web Application Development", "Mobile App Development", "API Development & Integration", "Cloud Architecture", "DevOps & CI/CD", "AI Integration", "QA & Testing", "Maintenance & Support", "Dedicated Development Teams"],
    featured: {
      title: "Comprehensive Engineering Capabilities",
      desc: "End-to-end technical services designed to scale and optimize your enterprise architecture.",
      linkText: "Explore All Services"
    }
  },
  Work: {
    purpose: "Explore our engineered solutions.",
    items: ["Case Studies", "Client Roster", "Open Source", "Architecture Patterns"],
    featured: {
      title: "Proven Engineering Excellence",
      desc: "Discover how we solve complex technical problems for industry-leading enterprise clients.",
      linkText: "View Case Studies"
    }
  },
  Industries: {
    purpose: "Domain expertise.",
    items: ["Manufacturing", "Healthcare", "Education", "Logistics", "Retail", "Financial Services", "Hospitality", "Government", "Startups"],
    featured: {
      title: "Deep Industry Focus",
      desc: "Each industry page covers domain-specific challenges, custom solutions, projects, and tech stacks.",
      linkText: "Explore Industries"
    }
  },
  Insights: {
    purpose: "Our content hub.",
    items: ["Blog", "Engineering", "AI & Automation", "Cloud", "Case Studies", "Company News", "Events"],
    featured: {
      title: "Technical Insights & Updates",
      desc: "Deep technical dives into software architecture, artificial intelligence, and enterprise technology.",
      linkText: "Read the Blog"
    }
  }
};

export default function NavBar() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const { scrollY } = useScroll();
  
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const navPadding = useTransform(scrollY, [0, 100], ["1.5rem 4rem", "1rem 3rem"]);
  // Keep background slightly opaque at all times so dark text is always visible
  const navBg = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0.85)", "rgba(255, 255, 255, 0.95)"]);
  const navBorder = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.8)"]);
  const navShadow = useTransform(scrollY, [0, 100], ["0 0 0 rgba(0,0,0,0)", "0 10px 40px -10px rgba(15,23,42,0.05)"]);
  const navBlur = useTransform(scrollY, [0, 100], ["blur(12px)", "blur(18px)"]);
  const navRadius = useTransform(scrollY, [0, 100], ["0px", "24px"]);
  const navTop = useTransform(scrollY, [0, 100], ["0px", "20px"]);

  const navItems = ["Solutions", "Services", "Work", "Industries", "Insights", "About", "Contact"];

  const handleMouseEnter = (item: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setHoveredNav(item);
    setActiveMenu(item);
  };

  const handleMouseLeave = () => {
    setHoveredNav(null);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <motion.header
      style={{
        position: 'fixed',
        top: navTop,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          width: navWidth,
          padding: navPadding,
          background: navBg,
          borderBottom: '1px solid',
          borderColor: navBorder,
          boxShadow: navShadow,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
          borderRadius: navRadius,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 2,
          position: 'relative'
        }}
      >
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/custom-logo.svg" alt="Acriotech Logo Mark" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.3)' }} />
          </div>
          <div style={{ fontFamily: '"Nevera", sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', letterSpacing: '0.02em', marginTop: '4px' }}>
            Acriotech
          </div>
        </a>

        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navItems.map((item) => {
            // Special routing for About and Contact to their dedicated pages
            let linkHref = `/#${item.toLowerCase()}`;
            if (item === 'About') linkHref = '/about-us';
            if (item === 'Contact') linkHref = '/contact-us';

            return (
              <div key={item} style={{ position: 'relative' }} onMouseEnter={() => handleMouseEnter(item)}>
                {hoveredNav === item && (
                  <motion.div
                    layoutId="nav-pill"
                    layout
                    style={{ position: 'absolute', top: '-6px', bottom: '-6px', left: '-12px', right: '-12px', background: 'rgba(75, 97, 184, 0.05)', borderRadius: '8px', zIndex: -1, border: '1px solid rgba(75, 97, 184, 0.1)' }}
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  />
                )}
                <a href={linkHref} style={{ display: 'block', padding: '0', fontSize: '0.95rem', fontWeight: 600, color: hoveredNav === item ? '#0F172A' : '#5B6472', transition: 'color 0.2s ease', textDecoration: 'none' }}>
                  {item}
                </a>
              </div>
            );
          })}
        </nav>
      </motion.div>

      {/* Mega Menu Dropdown */}
      <div style={{ width: '100%', padding: '0 4rem', display: 'flex', justifyContent: 'center', position: 'absolute', top: '100%', left: 0, paddingTop: '12px', pointerEvents: activeMenu ? 'auto' : 'none' }}>
        <AnimatePresence mode="wait">
          {activeMenu && navData[activeMenu as keyof typeof navData] && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.15 } }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter(activeMenu)}
              style={{
                width: navData[activeMenu as keyof typeof navData].featured ? '100%' : (activeMenu === 'Services' ? '900px' : '550px'),
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 30px 60px -15px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(15,23,42,0.02)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', minHeight: '340px' }}>
                {/* Links Section */}
                <div style={{ flex: 1, padding: '3.5rem 4rem', borderRight: navData[activeMenu as keyof typeof navData].featured ? '1px solid rgba(15, 23, 42, 0.05)' : 'none' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2.5rem' }}>
                    {navData[activeMenu as keyof typeof navData].purpose}
                  </div>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: activeMenu === 'Services' ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)', 
                    gap: '1.5rem 3rem' 
                  }}>
                    {navData[activeMenu as keyof typeof navData].items.map((link, idx) => (
                      <a key={idx} href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', fontWeight: 600, color: '#0F172A', transition: 'all 0.2s ease', cursor: 'pointer', padding: '0.75rem 1rem', borderRadius: '12px', margin: '-0.75rem -1rem', textDecoration: 'none' }} 
                        onMouseEnter={(e) => { 
                          e.currentTarget.style.color = '#4B61B8'; 
                          e.currentTarget.style.background = 'rgba(75, 97, 184, 0.05)';
                          e.currentTarget.style.transform = 'translateX(5px)';
                        }}
                        onMouseLeave={(e) => { 
                          e.currentTarget.style.color = '#0F172A'; 
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.transform = 'translateX(0px)';
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7BAF35', opacity: 0.5 }}></span>
                        {link}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Featured Section (Optional) */}
                {navData[activeMenu as keyof typeof navData].featured && (
                  <div style={{ width: '420px', padding: '3.5rem 4rem', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    {/* decorative circuit element */}
                    <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123, 175, 53, 0.15) 0%, rgba(123, 175, 53, 0) 70%)' }}></div>
                    
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <Layers size={24} color="#7BAF35" />
                    </div>
                    <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                      {navData[activeMenu as keyof typeof navData].featured?.title}
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: '#94A3B8', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                      {navData[activeMenu as keyof typeof navData].featured?.desc}
                    </p>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: '#7BAF35', transition: 'gap 0.2s ease', textDecoration: 'none' }}
                       onMouseEnter={(e) => e.currentTarget.style.gap = '1rem'}
                       onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
                    >
                      {navData[activeMenu as keyof typeof navData].featured?.linkText} <ArrowRight size={16} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
