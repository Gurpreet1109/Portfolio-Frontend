import React, { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

    setActive(id);
  };

  return (
    <nav
      className="navb"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 32px",
        height: 64,
        flexDirection: "column-reverse",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? theme === "dark"
            ? "rgba(8,11,16,0.92)"
            : "rgba(255,255,255,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? `1px solid ${
              theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
            }`
          : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 32px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              background: "linear-gradient(135deg, #00d4aa, #00a882)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "1rem",
              color: "#080b10",
              boxShadow: "0 0 20px rgba(0,212,170,0.35)",
              flexShrink: 0,
            }}
          >
            GS
          </div>

          <span
            className="logo-text"
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              background: "linear-gradient(90deg,var(--text),var(--muted2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            Gurpreet Singh
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 4 }} className="nav-desktop">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                background:
                  active === l ? "rgba(0,212,170,0.1)" : "transparent",
                border: "none",
                color: active === l ? "#00d4aa" : "var(--muted2)",
                padding: "6px 16px",
                borderRadius: 8,
                fontSize: "0.875rem",
                fontWeight: 500,
                fontFamily: "var(--font-head)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                if (active !== l) e.currentTarget.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                if (active !== l) e.currentTarget.style.color = "var(--muted2)";
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              border: "1px solid var(--border2)",
              background: "var(--surface)",
              color: "var(--text)",
              cursor: "pointer",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all .3s ease",
            }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Hire Me */}
          <a
            href="mailto:gurpreetchahal1009@gmail.com"
            style={{
              background: "linear-gradient(135deg, #00d4aa, #00a882)",
              color: "#080b10",
              fontWeight: 700,
              fontSize: "0.82rem",
              padding: "8px 20px",
              borderRadius: 10,
              textDecoration: "none",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 14px rgba(0,212,170,0.3)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-1px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            Hire Me →
          </a>
        </div>
      </div>

      {/* Mobile Lower Nav */}
      <div style={{ display: "none", gap: 4 }} className="nav-desktop-lower">
        {links.map((l) => (
          <button
            className="lower-links"
            key={l}
            onClick={() => scrollTo(l)}
            style={{
              background: active === l ? "rgba(0,212,170,0.1)" : "transparent",
              border: "none",
              color: active === l ? "#00d4aa" : "var(--muted2)",
              padding: "6px 16px",
              borderRadius: 8,
              fontSize: "0.875rem",
              fontWeight: 500,
              fontFamily: "var(--font-head)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }

          .nav-desktop-lower {
            display: flex !important;
            justify-content: center;
            width: 100%;
            gap: 2px;
          }

          .navb {
            height: 89px !important;
          }
        }

        @media (max-width: 480px) {
          .logo-text {
            display: none;
          }
        }

        @media (max-width: 435px) {
          .lower-links {
            padding: 6px 14px !important;
            font-size: 0.8rem !important;
          }
        }

        @media (max-width: 375px) {
          .lower-links {
            padding: 5px 10px !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </nav>
  );
}
