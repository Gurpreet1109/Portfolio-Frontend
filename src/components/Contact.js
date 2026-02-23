import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const contactLinks = [
    {
      icon: "bi-envelope-fill",
      label: "Email",
      value: "gurpreetchahal1009@gmail.com",
      href: "mailto:gurpreetchahal1009@gmail.com",
      color: "#00d4aa",
    },
    {
      icon: "bi-github",
      label: "GitHub",
      value: "github.com/Gurpreet1109",
      href: "https://github.com/Gurpreet1109",
      color: "#a78bfa",
    },
    {
      icon: "bi-linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/gurpreet1109",
      href: "https://linkedin.com/in/gurpreet1109",
      color: "#0077b5",
    },
    {
      icon: "bi-telephone-fill",
      label: "Phone",
      value: "+91 9045802943",
      href: "tel:+919045802943",
      color: "#fbbf24",
    },
    {
      icon: "bi-geo-alt-fill",
      label: "Location",
      value: "Ghaziabad, UP — 201010",
      href: null,
      color: "#ff6b6b",
    },
  ];

  const inputStyle = (field) => ({
    width: "100%",
    background: errors[field] ? "rgba(255,107,107,0.06)" : "rgba(17,24,39,0.7)",
    border: `1px solid ${errors[field] ? "#ff6b6b55" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 10,
    padding: "12px 16px",
    color: "#e2e8f0",
    fontFamily: "var(--font-head)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "all 0.2s",
  });

  return (
    <section id="contact" style={{ padding: "100px 0 60px" }}>
      <div className="section-inner">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Contact
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Let's Work Together
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            I'm actively looking for new opportunities. Whether you have a
            project idea, a job opening, or just want to say hi — drop me a
            message.
          </p>
        </div>

        <div className="myContactGrid">
          {/* Left — contact info */}
          <div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#e2e8f0",
                marginBottom: 24,
                letterSpacing: "-0.01em",
              }}
            >
              Reach me at
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactLinks.map((c) => (
                <div
                  key={c.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 18px",
                    background: "rgba(17,24,39,0.6)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    transition: "all 0.2s",
                    cursor: c.href ? "pointer" : "default",
                    textDecoration: "none",
                  }}
                  as={c.href ? "a" : "div"}
                  onClick={() =>
                    c.href &&
                    window.open(
                      c.href,
                      c.href.startsWith("mailto") || c.href.startsWith("tel")
                        ? "_self"
                        : "_blank",
                    )
                  }
                  onMouseEnter={(e) => {
                    if (c.href) {
                      e.currentTarget.style.borderColor = `${c.color}40`;
                      e.currentTarget.style.transform = "translateX(4px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: `${c.color}15`,
                      border: `1px solid ${c.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className={`bi ${c.icon}`}
                      style={{ color: c.color, fontSize: "0.95rem" }}
                    />
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#64748b",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: 1,
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        color: "#94a3b8",
                        fontWeight: 500,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Available badge */}
            <div
              style={{
                marginTop: 24,
                padding: "16px 20px",
                background: "rgba(0,212,170,0.06)",
                border: "1px solid rgba(0,212,170,0.2)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#00d4aa",
                  flexShrink: 0,
                  animation: "pulse-ring 1.5s infinite",
                  display: "inline-block",
                }}
              />
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#00d4aa",
                  }}
                >
                  Available for Work
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#64748b",
                    marginTop: 1,
                  }}
                >
                  Open to full-time & freelance roles
                </div>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div
            style={{
              background: "rgba(17,24,39,0.7)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, #00d4aa, transparent)",
              }}
            />

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(0,212,170,0.12)",
                    border: "2px solid #00d4aa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <i
                    className="bi bi-check-lg"
                    style={{ color: "#00d4aa", fontSize: "1.8rem" }}
                  />
                </div>
                <h4
                  style={{ fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}
                >
                  Message Sent!
                </h4>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.9rem",
                    marginBottom: 24,
                  }}
                >
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#94a3b8",
                    padding: "8px 20px",
                    borderRadius: 10,
                    fontFamily: "var(--font-head)",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "#e2e8f0",
                    marginBottom: 24,
                    fontSize: "1.1rem",
                  }}
                >
                  Send a Message
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                    marginBottom: 14,
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#64748b",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      Name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Your name"
                      style={inputStyle("name")}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "#00d4aa44")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.name
                          ? "#ff6b6b55"
                          : "rgba(255,255,255,0.08)")
                      }
                    />
                    {errors.name && (
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "#ff6b6b",
                          marginTop: 4,
                        }}
                      >
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#64748b",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      Email
                    </label>
                    <input
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      type="email"
                      style={inputStyle("email")}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "#00d4aa44")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.email
                          ? "#ff6b6b55"
                          : "rgba(255,255,255,0.08)")
                      }
                    />
                    {errors.email && (
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "#ff6b6b",
                          marginTop: 4,
                        }}
                      >
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "#64748b",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    style={{
                      ...inputStyle("message"),
                      resize: "vertical",
                      lineHeight: 1.7,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#00d4aa44")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.message
                        ? "#ff6b6b55"
                        : "rgba(255,255,255,0.08)")
                    }
                  />
                  {errors.message && (
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "#ff6b6b",
                        marginTop: 4,
                      }}
                    >
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #00d4aa, #00a882)",
                    border: "none",
                    borderRadius: 12,
                    padding: "13px",
                    color: "#080b10",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    fontFamily: "var(--font-head)",
                    cursor: status === "sending" ? "default" : "pointer",
                    opacity: status === "sending" ? 0.8 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    boxShadow: "0 4px 20px rgba(0,212,170,0.3)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending")
                      e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  {status === "sending" ? (
                    <>
                      <span
                        style={{
                          width: 16,
                          height: 16,
                          border: "2px solid #080b1066",
                          borderTopColor: "#080b10",
                          borderRadius: "50%",
                          display: "inline-block",
                          animation: "spin-slow 0.7s linear infinite",
                        }}
                      />{" "}
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-fill" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
