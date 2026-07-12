"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Consent states
  const [preferences, setPreferences] = useState({
    analytics_storage: false,
    ad_storage: false,
    ad_user_data: false,
    ad_personalization: false,
  });

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      // If it exists, update gtag immediately
      const parsedConsent = JSON.parse(consent);
      updateGtagConsent(parsedConsent);
    } else {
      // If not, show the banner
      setShowBanner(true);
    }
  }, []);

  const updateGtagConsent = (settings: typeof preferences) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: settings.analytics_storage ? "granted" : "denied",
        ad_storage: settings.ad_storage ? "granted" : "denied",
        ad_user_data: settings.ad_user_data ? "granted" : "denied",
        ad_personalization: settings.ad_personalization ? "granted" : "denied",
      });
    }
  };

  const handleAcceptAll = () => {
    const newPrefs = {
      analytics_storage: true,
      ad_storage: true,
      ad_user_data: true,
      ad_personalization: true,
    };
    setPreferences(newPrefs);
    updateGtagConsent(newPrefs);
    localStorage.setItem("cookieConsent", JSON.stringify(newPrefs));
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    const newPrefs = {
      analytics_storage: false,
      ad_storage: false,
      ad_user_data: false,
      ad_personalization: false,
    };
    setPreferences(newPrefs);
    updateGtagConsent(newPrefs);
    localStorage.setItem("cookieConsent", JSON.stringify(newPrefs));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    updateGtagConsent(preferences);
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowPreferences(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <AnimatePresence>
        {!showPreferences && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              width: "100%",
              background: "#FFFFFF",
              borderTop: "1px solid rgba(15,23,42,0.1)",
              boxShadow: "0 -10px 40px rgba(0,0,0,0.05)",
              padding: "1rem 2rem",
              zIndex: 9999,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap"
            }}
          >
            <div style={{ flex: '1 1 600px' }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0F172A", margin: "0 0 0.25rem 0" }}>We value your privacy</h3>
              <p style={{ fontSize: "0.9rem", color: "#5B6472", lineHeight: 1.5, margin: 0 }}>
                We use cookies and similar technologies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies in accordance with our Privacy Policy. Note that we still send basic anonymous pings to Google Analytics for site performance even if rejected, in compliance with Consent Mode v2.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexShrink: 0 }}>
              <button
                onClick={() => setShowPreferences(true)}
                style={{ padding: "0.6rem 1.25rem", background: "transparent", color: "#4B61B8", fontWeight: 600, border: "1px solid rgba(75, 97, 184, 0.3)", borderRadius: "6px", cursor: "pointer", transition: "background 0.2s", fontSize: "0.9rem" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(75, 97, 184, 0.05)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                Customize
              </button>
              <button
                onClick={handleDeclineAll}
                style={{ padding: "0.6rem 1.25rem", background: "#F1F5F9", color: "#0F172A", fontWeight: 600, border: "none", borderRadius: "6px", cursor: "pointer", transition: "background 0.2s", fontSize: "0.9rem" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#E2E8F0"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#F1F5F9"}
              >
                Decline All
              </button>
              <button
                onClick={handleAcceptAll}
                style={{ padding: "0.6rem 1.25rem", background: "#4B61B8", color: "#FFFFFF", fontWeight: 600, border: "none", borderRadius: "6px", cursor: "pointer", transition: "background 0.2s", fontSize: "0.9rem" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#3A4D94"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#4B61B8"}
              >
                Accept All
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPreferences && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(15,23,42,0.5)",
              zIndex: 10000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem"
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "2rem",
                maxWidth: "600px",
                width: "100%",
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                maxHeight: "90vh",
                overflowY: "auto"
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", margin: "0 0 1rem 0" }}>Cookie Preferences</h3>
              <p style={{ fontSize: "0.95rem", color: "#5B6472", lineHeight: 1.5, marginBottom: "2rem" }}>
                When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
                
                {/* Necessary Cookies */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(15,23,42,0.1)" }}>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1rem", color: "#0F172A" }}>Strictly Necessary</h4>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#5B6472", lineHeight: 1.4 }}>These cookies are necessary for the website to function and cannot be switched off.</p>
                  </div>
                  <div style={{ padding: "0.25rem 0.75rem", background: "#E2E8F0", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 600, color: "#64748B" }}>
                    Always Active
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(15,23,42,0.1)" }}>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1rem", color: "#0F172A" }}>Analytics (Google Analytics)</h4>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#5B6472", lineHeight: 1.4 }}>Allows us to count visits and traffic sources so we can measure and improve the performance of our site.</p>
                  </div>
                  <label style={{ display: "inline-block", position: "relative", width: "50px", height: "26px" }}>
                    <input 
                      type="checkbox" 
                      style={{ opacity: 0, width: 0, height: 0 }} 
                      checked={preferences.analytics_storage}
                      onChange={(e) => setPreferences({...preferences, analytics_storage: e.target.checked})}
                    />
                    <span style={{
                      position: "absolute",
                      cursor: "pointer",
                      top: 0, left: 0, right: 0, bottom: 0,
                      backgroundColor: preferences.analytics_storage ? "#4B61B8" : "#CBD5E1",
                      transition: "0.4s",
                      borderRadius: "34px"
                    }}>
                      <span style={{
                        position: "absolute",
                        content: '""',
                        height: "20px",
                        width: "20px",
                        left: preferences.analytics_storage ? "26px" : "3px",
                        bottom: "3px",
                        backgroundColor: "white",
                        transition: "0.4s",
                        borderRadius: "50%"
                      }} />
                    </span>
                  </label>
                </div>

                {/* Marketing Cookies */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1rem", color: "#0F172A" }}>Marketing & Advertising</h4>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#5B6472", lineHeight: 1.4 }}>Used to track visitors across websites to display relevant advertisements.</p>
                  </div>
                  <label style={{ display: "inline-block", position: "relative", width: "50px", height: "26px" }}>
                    <input 
                      type="checkbox" 
                      style={{ opacity: 0, width: 0, height: 0 }} 
                      checked={preferences.ad_storage}
                      onChange={(e) => setPreferences({
                        ...preferences, 
                        ad_storage: e.target.checked,
                        ad_user_data: e.target.checked,
                        ad_personalization: e.target.checked
                      })}
                    />
                    <span style={{
                      position: "absolute",
                      cursor: "pointer",
                      top: 0, left: 0, right: 0, bottom: 0,
                      backgroundColor: preferences.ad_storage ? "#4B61B8" : "#CBD5E1",
                      transition: "0.4s",
                      borderRadius: "34px"
                    }}>
                      <span style={{
                        position: "absolute",
                        content: '""',
                        height: "20px",
                        width: "20px",
                        left: preferences.ad_storage ? "26px" : "3px",
                        bottom: "3px",
                        backgroundColor: "white",
                        transition: "0.4s",
                        borderRadius: "50%"
                      }} />
                    </span>
                  </label>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
                <button
                  onClick={() => setShowPreferences(false)}
                  style={{ padding: "0.75rem 1.5rem", background: "transparent", color: "#5B6472", fontWeight: 600, border: "none", cursor: "pointer", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#0F172A"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#5B6472"}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  style={{ padding: "0.75rem 1.5rem", background: "#4B61B8", color: "#FFFFFF", fontWeight: 600, border: "none", borderRadius: "8px", cursor: "pointer", transition: "background 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#3A4D94"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#4B61B8"}
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
