import React, { useState } from "react";

import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "QuillStack",
    subtitle: "MERN Full Stack App",
    desc: "A web platform for creating, managing, and reading articles and posts. Features user authentication, role-based access control (admin/user), article creation & management, secure login/signup, and a responsive UI.",
    impact:
      "Enabled structured content publishing with secure access control and an intuitive reading experience.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    live: "https://quillstack-frontend.vercel.app/",
    github: "https://github.com/Gurpreet1109",
    features: [
      "User Auth",
      "Role-based Access",
      "Article CRUD",
      "Responsive UI",
    ],
    color: "#00d4aa",
    icon: "bi-feather",
    badge: "Full Stack",
  },
  {
    id: 2,
    title: "Blood Connect",
    subtitle: "MERN Full Stack App",
    desc: "A platform to connect blood donors with recipients in need. Includes user authentication, a searchable donor directory, a request/approval workflow, and profile management.",
    impact:
      "Improved donor-request matching through smart filters and real-time search.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    live: "https://blood-bank-teal-gamma.vercel.app/",
    github: "https://github.com/Gurpreet1109",
    features: ["Donor Search", "Request System", "Profile Mgmt", "Auth"],
    color: "#ff6b6b",
    icon: "bi-heart-pulse-fill",
    badge: "Full Stack",
  },
  {
    id: 3,
    title: "Coders Paste",
    subtitle: "React + Local Storage",
    desc: "A frontend tool to store and manage code snippets and notes. Clean, minimal interface focused on speed and simplicity — no backend required.",
    impact:
      "Helps developers quickly store and retrieve code snippets without any signup or backend.",
    tech: ["React.js", "Tailwind CSS", "Local Storage"],
    live: "https://paste-app-pink-one.vercel.app/",
    github: "https://github.com/Gurpreet1109/PasteApp",
    features: [
      "Create Notes",
      "Edit / Delete",
      "Persistent Storage",
      "Fast Search",
    ],
    color: "#fbbf24",
    icon: "bi-clipboard-code",
    badge: "Frontend",
  },
  {
    id: 4,
    title: "News App",
    subtitle: "React.js + News API",
    desc: "Fetches and displays trending news from around the world using the News API. Category filtering, infinite scroll, and loading indicators for smooth UX.",
    impact:
      "Real-time news delivery with category-based filtering and infinite scroll.",
    tech: ["React.js", "REST APIs", "News API"],
    live: null,
    github: "https://github.com/Gurpreet1109/News",
    features: [
      "Category Filter",
      "Infinite Scroll",
      "Loading States",
      "Responsive",
    ],
    color: "#a78bfa",
    icon: "bi-newspaper",
    badge: "Frontend",
  },
  {
    id: 5,
    title: "Text Transform",
    subtitle: "Utility Web App",
    desc: "A handy text utility tool to transform text — uppercase, lowercase, remove extra spaces, copy to clipboard, and more. Pure JavaScript, no frameworks.",
    impact: "Useful everyday text manipulation tool with zero dependencies.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    live: "https://gurpreet1109.github.io/TextTransform/",
    github: "https://github.com/Gurpreet1109/TextTransform",
    features: [
      "Case Convert",
      "Space Remover",
      "Copy to Clipboard",
      "Word Count",
    ],
    color: "#34d399",
    icon: "bi-type",
    badge: "Utility",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div className="section-inner">
        <div style={{ marginBottom: 56 }}>
          <div className="section-label">Projects</div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-sub">
            Real-world projects from full-stack MERN apps to lightweight
            frontend tools — each solving a genuine problem.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {projects.map((p, i) => (
            <div
              className="myProjectsGrid"
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background:
                  hovered === p.id
                    ? "rgba(26,34,53,0.9)"
                    : "rgba(17,24,39,0.6)",

                border: `1px solid ${
                  hovered === p.id ? p.color + "30" : "rgba(255,255,255,0.07)"
                }`,

                transform:
                  hovered === p.id ? "translateX(6px)" : "translateX(0)",

                boxShadow:
                  hovered === p.id
                    ? `0 8px 40px rgba(0,0,0,0.4), inset 0 0 0 1px ${p.color}18`
                    : "none",

                animation: `fadeUp 0.5s ${i * 0.08}s ease both`,
              }}
            >
              {/* Left accent bar */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 3,
                  background: `linear-gradient(180deg, transparent, ${p.color}, transparent)`,
                  opacity: hovered === p.id ? 1 : 0,
                  transition: "opacity 0.25s",
                }}
              />

              {/* Main content */}
              <div>
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: `${p.color}15`,
                      border: `1px solid ${p.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className={`bi ${p.icon}`}
                      style={{ color: p.color, fontSize: "1.1rem" }}
                    />
                  </div>
                  <div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <h3
                        style={{
                          fontWeight: 800,
                          fontSize: "1.2rem",
                          color: "#e2e8f0",
                          margin: 0,
                        }}
                      >
                        {p.title}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          padding: "2px 8px",
                          borderRadius: 100,
                          background: `${p.color}18`,
                          color: p.color,
                          border: `1px solid ${p.color}30`,
                          textTransform: "uppercase",
                        }}
                      >
                        {p.badge}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "#64748b",
                        marginTop: 2,
                      }}
                    >
                      {p.subtitle}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "#94a3b8",
                    lineHeight: 1.7,
                    marginBottom: 14,
                  }}
                >
                  {p.desc}
                </p>

                {/* Impact */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    marginBottom: 16,
                    padding: "10px 14px",
                    background: `${p.color}08`,
                    borderRadius: 10,
                    border: `1px solid ${p.color}18`,
                  }}
                >
                  <i
                    className="bi bi-lightning-charge-fill"
                    style={{
                      color: p.color,
                      fontSize: "0.8rem",
                      marginTop: 2,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color: "#94a3b8",
                      fontStyle: "italic",
                    }}
                  >
                    {p.impact}
                  </span>
                </div>

                {/* Features */}
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 16,
                  }}
                >
                  {p.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 500,
                        padding: "3px 10px",
                        borderRadius: 100,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#94a3b8",
                      }}
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — action buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  flexShrink: 0,
                }}
              >
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      background: p.color,
                      color: "#080b10",
                      padding: "9px 18px",
                      borderRadius: 10,
                      textDecoration: "none",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      boxShadow: `0 4px 14px ${p.color}30`,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-1px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    <i className="bi bi-box-arrow-up-right" /> Live Demo
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#94a3b8",
                    padding: "9px 18px",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#fff";
                    e.currentTarget.style.color = "#e2e8f0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "#94a3b8";
                  }}
                >
                  <i className="bi bi-github" /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
