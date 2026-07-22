"use client";

import { ArrowRight, Layers, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const generateUrl = (menu: string, text: string) => {
  const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const basePaths: Record<string, string> = {
    Solutions: '/solutions',
    Services: '/services',
    Work: '/work',
    Industries: '/industries',
    Insights: '/insights',
  };
  return `${basePaths[menu]}/${slug}`;
};

const featuredLinks: Record<string, string> = {
  Solutions: '/solutions',
  Services: '/services',
  Work: '/work/featured-projects',
  Industries: '/industries',
  Insights: '/insights/tech-trends',
};

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
    items: ["Featured Projects", "Our Clients", "Open Source"],
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
    items: ["Case Studies", "News & Press", "Research Reports", "Tech Trends", "Webinars"],
    featured: {
      title: "Technical Insights & Updates",
      desc: "Deep technical dives into software architecture, artificial intelligence, and enterprise technology.",
      linkText: "Explore Insights"
    }
  }
};

export default function NavBar() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<string[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: scrolled ? '16px' : '0px',
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="keep-flex-row"
        style={{
          width: scrolled ? 'min(95%, 1320px)' : '100%',
          padding: scrolled ? '0.75rem 1.5rem' : '0.75rem 2rem',
          background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.7)',
          border: '1px solid rgba(226, 232, 240, 0.6)',
          boxShadow: scrolled ? '0 10px 40px -10px rgba(15,23,42,0.08)' : '0 0 0 rgba(0,0,0,0)',
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(16px)',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(16px)',
          borderRadius: scrolled ? '20px' : '0px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 2,
          position: 'relative',
          transition: 'all 200ms ease',
        }}
      >
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/custom-logo.svg" alt="Acriotech Logo Mark" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '2px' }}>
            <img src="/acriotech-name-logo.png" alt="Acriotech" style={{ height: '17px', objectFit: 'contain' }} />
          </div>
        </a>

        <nav className="desktop-nav" style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
          {navItems.map((item) => {
            let linkHref = `/#${item.toLowerCase()}`;
            if (item === 'Solutions') linkHref = '/solutions';
            if (item === 'Services') linkHref = '/services';
            if (item === 'Work') linkHref = '/work';
            if (item === 'Industries') linkHref = '/industries';
            if (item === 'Insights') linkHref = '/insights';
            if (item === 'About') linkHref = '/about-us';
            if (item === 'Contact') linkHref = '/contact-us';

            const isActive = hoveredNav === item;

            return (
              <div key={item} style={{ position: 'relative' }} onMouseEnter={() => handleMouseEnter(item)}>
                <a
                  href={linkHref}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.875rem',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    borderRadius: '8px',
                    transition: 'color 150ms ease, background 150ms ease',
                    textDecoration: 'none',
                    background: isActive ? 'var(--primary-50)' : 'transparent',
                    position: 'relative',
                  }}
                >
                  {item}
                </a>
              </div>
            );
          })}
        </nav>

        <button
          aria-label="Toggle mobile menu"
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: '0.5rem' }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 90,
            display: 'flex',
            flexDirection: 'column',
            padding: '96px 1.5rem 3rem 1.5rem',
            overflowY: 'auto',
          }}
        >
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '480px', margin: '0 auto', width: '100%' }}>
            {navItems.map((item) => {
              let linkHref = `/#${item.toLowerCase()}`;
              if (item === 'Solutions') linkHref = '/solutions';
              if (item === 'Services') linkHref = '/services';
              if (item === 'Work') linkHref = '/work';
              if (item === 'Industries') linkHref = '/industries';
              if (item === 'Insights') linkHref = '/insights';
              if (item === 'About') linkHref = '/about-us';
              if (item === 'Contact') linkHref = '/contact-us';

              const hasSubmenu = Object.keys(navData).includes(item);
              const isExpanded = expandedMobileMenus.includes(item);

              return (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderBottom: '1px solid var(--border-light)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <a
                      href={linkHref}
                      onClick={(e) => {
                        if (hasSubmenu) {
                          e.preventDefault();
                          setExpandedMobileMenus(prev =>
                            prev.includes(item) ? prev.filter(m => m !== item) : [...prev, item]
                          );
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        letterSpacing: '-0.02em',
                        padding: '0.5rem 0',
                      }}
                    >
                      {item}
                    </a>
                    {hasSubmenu && (
                      <button
                        aria-label="Toggle submenu"
                        onClick={() => setExpandedMobileMenus(prev =>
                          prev.includes(item) ? prev.filter(m => m !== item) : [...prev, item]
                        )}
                        style={{
                          background: 'var(--bg-section)',
                          border: 'none',
                          padding: '0.4rem',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 150ms ease',
                        }}
                      >
                        <ChevronDown size={20} />
                      </button>
                    )}
                  </div>

                  {hasSubmenu && isExpanded && (
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem', paddingLeft: '0.5rem' }}>
                        {navData[item as keyof typeof navData].items.map((sublink) => (
                          <a
                            key={sublink}
                            href={generateUrl(item, sublink)}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                              fontSize: '1rem',
                              fontWeight: 500,
                              color: 'var(--text-secondary)',
                              textDecoration: 'none',
                              padding: '0.4rem 0',
                              transition: 'color 150ms ease',
                            }}
                          >
                            {sublink}
                          </a>
                        ))}
                        {navData[item as keyof typeof navData].featured && (
                          <a
                            href={featuredLinks[item]}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              fontSize: '1rem',
                              fontWeight: 600,
                              color: 'var(--primary)',
                              textDecoration: 'none',
                              marginTop: '0.25rem',
                              padding: '0.4rem 0',
                            }}
                          >
                            {navData[item as keyof typeof navData].featured.linkText} <ArrowRight size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', maxWidth: '480px', margin: '1.5rem auto 0', width: '100%' }}>
            <a
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--dark)',
                color: '#fff',
                padding: '0.875rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                minHeight: '48px',
                transition: 'background 150ms ease',
              }}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}

      {/* Mega Menu Dropdown */}
      <div
        className="desktop-nav"
        style={{
          width: '100%',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          top: 'calc(100% + 8px)',
          left: 0,
          pointerEvents: activeMenu ? 'auto' : 'none',
        }}
      >
        {activeMenu && navData[activeMenu as keyof typeof navData] && (
          <div
            onMouseEnter={() => handleMouseEnter(activeMenu)}
            style={{
              width: 'min(1320px, 100%)',
              background: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              borderRadius: '20px',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              boxShadow: '0 30px 60px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15,23,42,0.03)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', minHeight: '320px' }}>
              {/* Links Section */}
              <div style={{
                flex: 1,
                padding: '2.5rem 3rem',
                borderRight: navData[activeMenu as keyof typeof navData].featured ? '1px solid var(--border-light)' : 'none',
              }}>
                <div style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '2rem',
                }}>
                  {navData[activeMenu as keyof typeof navData].purpose}
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: activeMenu === 'Services' ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
                  gap: '0.5rem 2rem',
                }}>
                  {navData[activeMenu as keyof typeof navData].items.map((link, idx) => (
                    <a
                      key={idx}
                      href={generateUrl(activeMenu, link)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: '0.925rem',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        transition: 'color 150ms ease, background 150ms ease',
                        cursor: 'pointer',
                        padding: '0.6rem 0.75rem',
                        borderRadius: '10px',
                        margin: '0 -0.75rem',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--primary)';
                        e.currentTarget.style.background = 'var(--primary-50)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <span style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        opacity: 0.4,
                        flexShrink: 0,
                      }} />
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Featured Section */}
              {navData[activeMenu as keyof typeof navData].featured && (
                <div style={{
                  width: '380px',
                  padding: '2.5rem 3rem',
                  background: 'linear-gradient(135deg, var(--dark) 0%, var(--dark-800) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(6, 182, 212, 0) 70%)',
                  }} />

                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}>
                    <Layers size={22} color="#06B6D4" />
                  </div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                  }}>
                    {navData[activeMenu as keyof typeof navData].featured?.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#94A3B8',
                    marginBottom: '2rem',
                    lineHeight: 1.6,
                  }}>
                    {navData[activeMenu as keyof typeof navData].featured?.desc}
                  </p>
                  <a
                    href={featuredLinks[activeMenu]}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.925rem',
                      fontWeight: 600,
                      color: '#06B6D4',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                  >
                    {navData[activeMenu as keyof typeof navData].featured?.linkText} <ArrowRight size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* SEO Links Block */}
      <div style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>
        {Object.entries(navData).map(([menu, data]) => (
          <div key={`seo-${menu}`}>
            <h2>{menu}</h2>
            <ul>
              {data.items.map((link) => (
                <li key={`seo-link-${link}`}>
                  <a href={generateUrl(menu, link)}>{link}</a>
                </li>
              ))}
              {data.featured && (
                <li>
                  <a href={featuredLinks[menu]}>{data.featured.linkText}</a>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </header>
  );
}
