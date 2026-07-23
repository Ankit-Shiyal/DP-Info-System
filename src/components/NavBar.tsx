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
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'center', flexDirection: 'column',
        alignItems: 'center', paddingTop: scrolled ? '12px' : '0px',
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          width: scrolled ? 'min(92%, 1320px)' : '100%',
          borderRadius: scrolled ? '20px' : '0px',
          boxShadow: scrolled ? '0 12px 48px -12px rgba(15,23,42,0.12)' : '0 0 0 rgba(0,0,0,0)',
          padding: scrolled ? '0.65rem 1.5rem' : '0.75rem 2rem',
          background: scrolled
            ? 'rgba(255,255,255,0.88)'
            : 'rgba(255,255,255,0.65)',
          border: '1px solid rgba(226,232,240,0.5)',
          backdropFilter: scrolled ? 'blur(28px)' : 'blur(16px)',
          WebkitBackdropFilter: scrolled ? 'blur(28px)' : 'blur(16px)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          zIndex: 2, position: 'relative',
          transition: 'all 0.3s ease',
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
          {navItems.slice(0, 6).map((item) => {
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
                    display: 'block', padding: '0.45rem 0.85rem',
                    fontSize: '0.875rem', fontWeight: 500,
                    color: isActive ? '#0F172A' : '#475569',
                    borderRadius: '10px', textDecoration: 'none',
                    background: isActive ? 'rgba(37,99,235,0.06)' : 'transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item}
                </a>
              </div>
            );
          })}

          {/* Contact CTA Button */}
          <a
            href="/contact-us"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.45rem 1.1rem', marginLeft: '0.5rem',
              background: '#0F172A', color: '#FFFFFF',
              borderRadius: '10px', fontWeight: 600, fontSize: '0.85rem',
              textDecoration: 'none',
            }}
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight size={14} />
          </a>
        </nav>

        <button
          aria-label="Toggle mobile menu"
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'rgba(15,23,42,0.05)', border: 'none', cursor: 'pointer',
            color: '#0F172A', padding: '0.5rem', borderRadius: '10px',
            display: 'none', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            zIndex: 90,
            display: 'flex', flexDirection: 'column',
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
                  <div key={item} style={{
                    display: 'flex', flexDirection: 'column',
                    borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem',
                  }}>
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
                          fontSize: '1.5rem', fontWeight: 700, color: '#0F172A',
                          textDecoration: 'none', letterSpacing: '-0.02em', padding: '0.5rem 0',
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
                            background: '#F1F5F9', border: 'none', padding: '0.4rem',
                            borderRadius: '50%', cursor: 'pointer', color: '#64748B',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
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
                                fontSize: '1rem', fontWeight: 500, color: '#64748B',
                                textDecoration: 'none', padding: '0.4rem 0',
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
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                fontSize: '1rem', fontWeight: 600, color: '#0F172A',
                                textDecoration: 'none', marginTop: '0.25rem', padding: '0.4rem 0',
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

            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #F1F5F9', maxWidth: '480px', margin: '1.5rem auto 0', width: '100%' }}>
              <a
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#0F172A', color: '#FFFFFF', padding: '0.875rem',
                  borderRadius: '14px', fontSize: '1rem', fontWeight: 600,
                  textDecoration: 'none', minHeight: '48px',
                  transition: 'background 0.2s',
                }}
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        )}

      {/* Mega Menu Dropdown */}
      <div
        className="desktop-nav"
        style={{
          width: '100%', padding: '0 2rem', display: 'flex', justifyContent: 'center',
          position: 'absolute', top: 'calc(100% + 10px)', left: 0,
          pointerEvents: activeMenu ? 'auto' : 'none',
        }}
      >
        {activeMenu && navData[activeMenu as keyof typeof navData] && (
            <div
              onMouseEnter={() => handleMouseEnter(activeMenu)}
              style={{
                width: 'min(1320px, 100%)',
                background: 'rgba(255,255,255,0.96)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                borderRadius: '24px',
                border: '1px solid rgba(226,232,240,0.8)',
                boxShadow: '0 30px 80px -15px rgba(15,23,42,0.15), 0 0 0 1px rgba(15,23,42,0.03)',
                overflow: 'hidden', position: 'relative',
              }}
            >
              <div style={{ display: 'flex', minHeight: '320px' }}>
                <div style={{
                  flex: 1, padding: '2.5rem 3rem',
                  borderRight: navData[activeMenu as keyof typeof navData].featured ? '1px solid #F1F5F9' : 'none',
                }}>
                  <div style={{
                    fontSize: '0.7rem', fontWeight: 700, color: '#2563EB',
                    textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '2rem',
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
                          display: 'flex', alignItems: 'center', gap: '0.75rem',
                          fontSize: '0.925rem', fontWeight: 500, color: '#475569',
                          cursor: 'pointer', padding: '0.6rem 0.75rem',
                          borderRadius: '10px', margin: '0 -0.75rem',
                          textDecoration: 'none', transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#0F172A'; e.currentTarget.style.background = 'rgba(37,99,235,0.04)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'transparent'; }}
                      >
                        <span style={{
                          width: '5px', height: '5px', borderRadius: '50%',
                          background: '#2563EB', opacity: 0.3, flexShrink: 0,
                        }} />
                        {link}
                      </a>
                    ))}
                  </div>
                </div>

                {navData[activeMenu as keyof typeof navData].featured && (
                  <div style={{
                    width: '380px', padding: '2.5rem 3rem',
                    background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    <div
                      style={{
                        position: 'absolute', top: -50, right: -50, width: 200, height: 200,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
                      }}
                    />

                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: 'rgba(37,99,235,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '1.5rem', border: '1px solid rgba(37,99,235,0.15)',
                    }}>
                      <Layers size={22} color="#2563EB" />
                    </div>
                    <h4 style={{
                      fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem',
                      color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.25,
                    }}>
                      {navData[activeMenu as keyof typeof navData].featured?.title}
                    </h4>
                    <p style={{
                      fontSize: '0.9rem', color: '#94A3B8', marginBottom: '2rem', lineHeight: 1.6,
                    }}>
                      {navData[activeMenu as keyof typeof navData].featured?.desc}
                    </p>
                    <a
                      href={featuredLinks[activeMenu]}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        fontSize: '0.925rem', fontWeight: 600, color: '#2563EB',
                        textDecoration: 'none',
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
