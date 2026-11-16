import { useState } from "react";
import { projects } from "./projects";

/* ==========================================================================
   ABOUT PAGE — CLONE DESIGN FROM 3 EDITORIAL REFERENCE IMAGES
   Ref 1: Mael Voss "The person behind the work."
   Ref 2: Velisse "Why with me?" & "My Core Capabilities" & Dark Banner CTA
   Ref 3: "Design Process" (01 to 06 numbered stages with floating accent cards)
   ========================================================================== */

const designPrinciples = [
  {
    num: "/01",
    title: "Creative Clarity",
    description:
      "I turn complex ideas into clean, thoughtful interfaces that communicate clearly and effectively. Every element serves a purpose and helps users accomplish their goals without friction.",
  },
  {
    num: "/02",
    title: "Reliable Collaboration",
    description:
      "A smooth, transparent process is just as important as the final design. I prioritize clear, timely communication at every stage of research, ideation, and handoff.",
  },
  {
    num: "/03",
    title: "User-Focused Design",
    description:
      "I approach every project with deep empathy, understanding user behaviors, expectations, and pain points to craft intuitive experiences that feel natural.",
  },
  {
    num: "/04",
    title: "Quality Over Everything",
    description:
      "From spacing and typography to micro-interactions and tactile feedback, small details contribute to a lasting, elevated impression.",
  },
];

const designProcessStages = [
  {
    num: "01",
    tag: "1 week",
    title: "Discover & Understand",
    description:
      "I start by understanding the project, its core objectives, target audience, and business requirements. I explore the problem space, analyze competitors, and identify exactly what needs to be solved.",
    activities: [
      "Project understanding",
      "Requirement gathering",
      "Stakeholder discussions",
      "Competitor analysis",
      "User & business goals",
    ],
  },
  {
    num: "02",
    tag: "1 week",
    title: "Research & Define",
    description:
      "I explore user expectations, identify pain points, and organize the findings to establish a clear design direction and actionable user personas.",
    activities: [
      "User research",
      "User behavior analysis",
      "Competitor research",
      "User personas",
      "Problem definition",
      "User journey mapping",
    ],
  },
  {
    num: "03",
    tag: "1 week",
    title: "Information Architecture",
    description:
      "I organize content and functionality into a logical, hierarchical structure so users can navigate the digital product naturally and effortlessly.",
    activities: [
      "Information architecture",
      "User flows",
      "Navigation planning",
      "Content hierarchy",
      "Task flows",
    ],
  },
  {
    num: "04",
    tag: "1 week",
    title: "Wireframing & Ideation",
    description:
      "I translate conceptual ideas into low-fidelity layouts and explore different ways to solve identified problems before moving into high-fidelity visual design.",
    activities: [
      "Sketching",
      "Low-fidelity wireframes",
      "Layout exploration",
      "Interaction planning",
      "Early design validation",
    ],
  },
  {
    num: "05",
    tag: "2 weeks",
    title: "UI Design & Prototyping",
    description:
      "I transform validated wireframes into polished interfaces while establishing visual consistency, design systems, and responsive interactive prototypes.",
    activities: [
      "High-fidelity UI design",
      "Typography & color systems",
      "Design systems & components",
      "Responsive layouts",
      "Interactive prototypes",
      "Micro-interactions",
    ],
  },
  {
    num: "06",
    tag: "1 week",
    title: "Testing & Refinement",
    description:
      "I review the experience, collect stakeholder and user feedback, identify usability issues, and refine the design specifications before developer handoff.",
    activities: [
      "Usability review",
      "Design iterations",
      "Feedback implementation",
      "Responsive validation",
      "Developer handoff",
      "Design specifications",
    ],
  },
];

const bigCapabilities = [
  "UI/UX DESIGN",
  "SAAS & DASHBOARD PLATFORMS",
  "MOBILE APP EXPERIENCES",
  "DESIGN SYSTEMS & TOKENS",
  "INTERACTIVE PROTOTYPING",
  "UX PROBLEM SOLVING",
];

const toolsList = [
  { name: "Figma", category: "Design Tools" },
  { name: "Adobe XD", category: "Design Tools" },
  { name: "Adobe Photoshop", category: "Design Tools" },
  { name: "Adobe Illustrator", category: "Design Tools" },
];

const designSkills = [
  "User Research",
  "Wireframing",
  "User Flows",
  "Information Architecture",
  "UI Design",
  "UX Design",
  "Prototyping",
  "Responsive Design",
  "Design Systems",
  "Interaction Design",
  "Usability Principles",
  "Developer Handoff",
];

const journeyMilestones = [
  {
    period: "Present Practice",
    role: "Lead UI/UX Designer",
    focus: "Web, Mobile & SaaS Product Ecosystems",
    summary:
      "Designing end-to-end user experiences that balance user needs with functional clarity. Leading design systems, responsive architectures, and high-fidelity interaction prototypes for modern platforms.",
  },
  {
    period: "Product Design",
    role: "Digital Systems & Interfaces",
    focus: "Cross-functional Collaboration",
    summary:
      "Crafting multi-platform experiences including staffing platforms (Flexshft), Web3 platform interfaces (Hotcoin), and brand systems (Tiny Bits). Partnering closely with frontend engineers, product managers, and founders.",
  },
  {
    period: "Methodology",
    role: "Human-Centered Design",
    focus: "Research, IA & Prototyping",
    summary:
      "Deepening user-centric design methodologies: information architecture, interactive wireframing, usability reviews, and scalable design token specifications.",
  },
  {
    period: "Foundation",
    role: "Design Education & Training",
    focus: "UI/UX & Visual Communication",
    summary:
      "Specialized training in UI/UX principles, design thinking, layout composition, typography, and responsive web standards.",
  },
];

export function AboutPage({
  onNavigate,
}: {
  onNavigate?: (route: string) => void;
} = {}) {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <main className="page-scroll about-page editorial-clone-page">
      {/* ====================================================================
          CHAPTER 01: THE PERSON BEHIND THE WORK (Clone of Image 1)
          ==================================================================== */}
      <section className="clone-hero-section page-container" aria-labelledby="clone-hero-title">
        {/* Top Header Bar */}
        <div className="clone-hero-header">
          <div className="clone-hero-left">
            <span className="clone-kicker">ABOUT</span>
            <h1 id="clone-hero-title" className="clone-hero-title">
              The person
              <br />
              behind the work.
            </h1>
          </div>
          <div className="clone-hero-right">
            <p className="clone-hero-statement">
              3+ years of practice. Hundreds of decisions per project. One consistent belief — that
              design done right changes how people feel about a digital product before they say a word.
            </p>
          </div>
        </div>

        {/* Clean Hairline Divider */}
        <div className="clone-divider-line" />

        {/* 2-Column Split: Monochrome Portrait Card + Narrative */}
        <div className="clone-hero-split">
          <div className="clone-portrait-column">
            <div className="clone-portrait-frame">
              <img
                src="/portrait.svg"
                alt="Archana - UI/UX Designer"
                className="clone-portrait-img"
              />
            </div>
            <div className="clone-portrait-captions">
              <span className="portrait-caption-tag">(ARCHANA SHAJU)</span>
              <span className="portrait-caption-tag">(UI/UX DESIGNER · REMOTE)</span>
            </div>
          </div>

          <div className="clone-narrative-column">
            <h2 className="clone-lead-headline">
              She is an independent UI/UX designer who believes the best products are built on
              conviction and empathy — not trend.
            </h2>

            <div className="clone-narrative-paragraphs">
              <p>
                I'm Archana, a UI/UX Designer with over 3 years of experience creating thoughtful
                digital experiences that balance user needs, functionality, and visual clarity. I
                specialize in turning complex ideas into simple, intuitive interfaces across web,
                mobile, and SaaS platforms — from early-stage research, wireframing, and scalable
                design systems to high-fidelity interactive prototypes that are genuinely useful and
                effortless to navigate.
              </p>
            </div>

            <div className="clone-hero-cta-row">
              <button
                type="button"
                className="btn-editorial btn-primary"
                onClick={() => onNavigate?.("contact")}
              >
                Let's Talk <span>→</span>
              </button>
              <button
                type="button"
                className="btn-editorial btn-secondary"
                onClick={() => onNavigate?.("works")}
              >
                View Selected Work <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CHAPTER 02: DESIGN PROCESS (Clone of Image 3)
          ==================================================================== */}
      <section className="clone-process-section page-container" aria-labelledby="clone-process-title">
        {/* Top Kicker Bar */}
        <div className="clone-top-indicator-bar">
          <span className="indicator-left">| 02 |</span>
          <span className="indicator-right">| UX DESIGN METHODOLOGY |</span>
        </div>

        <div className="clone-divider-line" />

        <div className="clone-process-layout">
          {/* Left Column (Sticky Display Title & Architectural Card) */}
          <aside className="clone-process-left">
            <h2 id="clone-process-title" className="clone-process-title">
              Design
              <br />
              Process.
            </h2>
            <p className="clone-process-blurb">
              Every project is different, but my approach follows a thoughtful, six-stage methodology
              that turns ideas into meaningful digital experiences.
            </p>

            {/* Architectural Accent Card (as in Image 3) */}
            <div className="clone-process-accent-card">
              <img
                src="/projects/clay.jpg"
                alt="Architectural design visual"
                className="accent-card-img"
              />
              <div className="accent-card-label">
                <span>SYSTEM ARCHITECTURE // REF 01</span>
              </div>
            </div>
          </aside>

          {/* Right Column (Stacked Process Stages with Numbering & Duration Pills) */}
          <div className="clone-process-stages-col" role="list">
            {designProcessStages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <article
                  className={`clone-process-row ${isActive ? "is-active" : ""}`}
                  key={stage.num}
                  role="listitem"
                  onMouseEnter={() => setActiveStage(idx)}
                  onMouseLeave={() => setActiveStage(null)}
                >
                  <div className="stage-num-col">{stage.num}</div>

                  <div className="stage-body-col">
                    <div className="stage-title-row">
                      <h3 className="stage-title">{stage.title}</h3>
                      <span className="stage-pill-tag">{stage.tag}</span>
                    </div>

                    <p className="stage-desc">{stage.description}</p>

                    <div className="stage-activities-row">
                      <span className="stage-act-label">KEY ACTIVITIES:</span>
                      <ul className="stage-act-list">
                        {stage.activities.map((act) => (
                          <li key={act} className="stage-act-item">
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Secondary Floating Living Room Accent Image (as in Image 3 bottom right) */}
            <div className="clone-process-bottom-accent">
              <img
                src="/projects/1820.jpg"
                alt="Studio interior and interface environment"
                className="bottom-accent-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CHAPTER 03: WHY WITH ME? & CORE CAPABILITIES (Clone of Image 2)
          ==================================================================== */}
      <section className="clone-value-section page-container" aria-labelledby="clone-value-title">
        {/* Top Kicker & Two-Column Header */}
        <div className="clone-value-header">
          <div className="value-header-left">
            <span className="bullet-kicker">• Value</span>
            <h2 id="clone-value-title" className="clone-value-title">
              Why with me?
            </h2>
          </div>
          <div className="value-header-right">
            <p className="value-subnote">
              More than just visuals — here's what I bring to every collaboration.
            </p>
          </div>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="clone-value-grid">
          {designPrinciples.map((item) => (
            <div className="clone-value-card" key={item.num}>
              <div className="value-card-num">{item.num}</div>
              <h3 className="value-card-title">{item.title}</h3>
              <p className="value-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Capabilities Typographic Display (Image 2 right panel clone) */}
      <section className="clone-capabilities-section page-container" aria-labelledby="clone-cap-title">
        <div className="capabilities-editorial-head">
          <span className="bullet-kicker">• Expertise</span>
          <h2 id="clone-cap-title" className="capabilities-editorial-title">
            My Core Capabilities
          </h2>
          <p className="capabilities-editorial-sub">
            3+ years of practice mastering digital product design — and continuing to evolve.
          </p>
        </div>

        {/* Giant Stacked Typography Stack (Velisse clone) */}
        <div className="clone-big-capabilities-stack" role="list">
          {bigCapabilities.map((cap) => (
            <div className="cap-big-row" key={cap} role="listitem">
              <span className="cap-text">{cap}</span>
              <span className="cap-hover-arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* Creative Toolkit Section */}
      <section className="clone-toolkit-section page-container" aria-labelledby="clone-toolkit-title">
        <div className="toolkit-editorial-head">
          <span className="bullet-kicker">• Toolkit</span>
          <h2 id="clone-toolkit-title" className="toolkit-editorial-title">
            My Creative Toolkit
          </h2>
        </div>

        <div className="clone-toolkit-grid">
          <div className="toolkit-card-col">
            <h3 className="toolkit-group-label">DESIGN TOOLS</h3>
            <div className="toolkit-tools-list">
              {toolsList.map((t) => (
                <div className="toolkit-tool-item" key={t.name}>
                  <span className="tool-bullet" />
                  <span className="tool-title">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="toolkit-card-col">
            <h3 className="toolkit-group-label">DESIGN & RESEARCH CAPABILITIES</h3>
            <div className="toolkit-skills-tags">
              {designSkills.map((s) => (
                <span className="skill-badge" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Journey (The Expertise Behind Every Detail) */}
      <section className="clone-journey-section page-container" aria-labelledby="clone-journey-title">
        <div className="journey-editorial-head">
          <span className="bullet-kicker">• Experience</span>
          <h2 id="clone-journey-title" className="journey-editorial-title">
            The Expertise Behind Every Detail
          </h2>
        </div>

        <div className="clone-journey-rows">
          {journeyMilestones.map((m, i) => (
            <div className="clone-journey-row" key={i}>
              <div className="journey-meta-cell">
                <span className="journey-role-name">{m.role}</span>
                <span className="journey-period-tag">{m.period}</span>
              </div>
              <div className="journey-content-cell">
                <h3 className="journey-focus-title">{m.focus}</h3>
                <p className="journey-desc-text">{m.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ====================================================================
          CHAPTER 04: DARK BANNER CTA (Clone of Image 2 Bottom)
          ==================================================================== */}
      <section className="clone-dark-cta-section page-container" aria-labelledby="clone-cta-title">
        <div className="clone-dark-cta-card">
          <h2 id="clone-cta-title" className="dark-cta-title">
            Let's Design Something Meaningful
          </h2>
          <p className="dark-cta-desc">
            Have an idea? I'm always open to interesting projects, creative collaborations, and
            opportunities to build meaningful digital experiences.
          </p>
          <div className="dark-cta-buttons">
            <button
              type="button"
              className="btn-editorial btn-primary light-invert"
              onClick={() => onNavigate?.("contact")}
            >
              Let's Talk <span>→</span>
            </button>
            <button
              type="button"
              className="btn-editorial btn-secondary dark-outline"
              onClick={() => onNavigate?.("home")}
            >
              View My Work <span>↗</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ==========================================================================
   WORKS PAGE (PRESERVED)
   ========================================================================== */

export function WorksPage({ onNavigate }: { onNavigate?: (route: string) => void } = {}) {
  const [mode, setMode] = useState<"grid" | "list" | "wheel">("grid");
  return (
    <main className="page-scroll lab-page">
      <div className="lab-intro page-container">
        <p className="section-label">WORKS :: SELECTED PROJECTS</p>
        <h1>Selected Works.</h1>
        <p>Featured client commissions, digital products, brand engineering, and web ecosystems.</p>
      </div>
      <section className={`lab-catalogue lab-${mode}`} aria-label="Works & projects">
        {projects.map((item, index) => (
          <a
            className="experiment"
            href={item.href}
            key={item.slug}
            target={item.slug === "flexshft" ? undefined : "_blank"}
            rel={item.slug === "flexshft" ? undefined : "noreferrer"}
            onClick={(event) => {
              if (item.slug === "flexshft" && onNavigate) {
                event.preventDefault();
                onNavigate("flexshft");
              }
            }}
          >
            <div className="experiment-image">
              <img src={`/projects/${item.slug}.jpg`} alt={item.name} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="experiment-meta">
              <h2>{item.name}</h2>
              <div>
                <span>{item.collab.toUpperCase()}</span>
                <b>{item.year}</b>
              </div>
            </div>
          </a>
        ))}
      </section>
      <div className="lab-switcher">
        <button onClick={() => setMode("list")} className={mode === "list" ? "active" : ""}>
          List
        </button>
        <button onClick={() => setMode("wheel")} className={mode === "wheel" ? "active" : ""}>
          Wheel
        </button>
        <button onClick={() => setMode("grid")} className={mode === "grid" ? "active" : ""}>
          Grid
        </button>
      </div>
    </main>
  );
}

export { WorksPage as LabPage };

/* ==========================================================================
   CONTACT PAGE — ARCHANA · UI/UX DESIGNER
   ========================================================================== */

const projectTypes = [
  "Product Design (UI/UX)",
  "Web & Mobile Design",
  "Design System",
  "General Collaboration",
];

export function ContactPage({
  onNavigate,
}: {
  onNavigate?: (route: string) => void;
} = {}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Product Design (UI/UX)");
  const [message, setMessage] = useState("");
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard?.writeText("archanashaju@gmail.com").then(
      () => {
        setCopyFeedback(true);
        setTimeout(() => setCopyFeedback(false), 2400);
      },
      () => {
        setCopyFeedback(true);
        setTimeout(() => setCopyFeedback(false), 2400);
      }
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");

    // Form validations
    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setErrorMessage("Please write a message before sending.");
      return;
    }

    setFormStatus("submitting");

    // Compose mailto destination
    const subjectLine = `[Inquiry: ${projectType}] from ${name}`;
    const emailBody = `Hi Archana,\n\n${message}\n\nProject Type: ${projectType}\nFrom: ${name} (${email})`;
    const mailtoUrl = `mailto:archanashaju@gmail.com?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(emailBody)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setFormStatus("success");
    }, 600);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setFormStatus("idle");
    setErrorMessage("");
  };

  return (
    <main className="page-scroll contact-page">
      {/* SECTION 01 — CONTACT HERO */}
      <section className="contact-hero page-container" aria-labelledby="contact-hero-title">
        <div className="contact-hero-top">
          <div className="hero-kicker-pill">
            <span className="live-dot" aria-hidden="true" />
            <span>CONTACT // GET IN TOUCH</span>
          </div>
          <div className="hero-status-pill">
            <span>AVAILABLE WORLDWIDE · REMOTE & FREELANCE</span>
          </div>
        </div>

        <div className="contact-hero-editorial">
          <h1 id="contact-hero-title" className="contact-hero-heading">
            Let's create something meaningful.
          </h1>
          <p className="contact-hero-desc">
            Have a project in mind, an exciting opportunity, or simply want to connect? I'd love to
            hear from you. Let's start a conversation.
          </p>
          <p className="contact-hero-subnote">Good things start with a conversation.</p>
        </div>
      </section>

      {/* SECTION 02 & 03 — CONTACT INFO & CONTACT FORM */}
      <section className="contact-main-section page-container">
        <div className="contact-editorial-layout">
          {/* SECTION 02 — CONTACT INFORMATION */}
          <aside className="contact-sidebar">
            <div className="contact-card-box">
              <span className="sidebar-kicker">DIRECT CHANNELS</span>
              <div className="contact-direct-group">
                <span className="direct-label">EMAIL ADDRESS</span>
                <a
                  href="mailto:archanashaju@gmail.com"
                  className="direct-email-link"
                  title="Send email to Archana"
                >
                  archanashaju@gmail.com
                </a>
                <button
                  type="button"
                  className="btn-copy-email"
                  onClick={copyEmail}
                  aria-live="polite"
                >
                  {copyFeedback ? "✓ Copied to clipboard" : "Copy email address"}
                </button>
              </div>

              <div className="contact-socials-group">
                <span className="direct-label">PROFESSIONAL PROFILES</span>
                <ul className="social-links-list">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/archanashaju"
                      target="_blank"
                      rel="noreferrer"
                      className="social-row-link"
                    >
                      <span>LinkedIn</span>
                      <span className="arrow-glyph">↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/archanashaju"
                      target="_blank"
                      rel="noreferrer"
                      className="social-row-link"
                    >
                      <span>Behance</span>
                      <span className="arrow-glyph">↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/archanashaju"
                      target="_blank"
                      rel="noreferrer"
                      className="social-row-link"
                    >
                      <span>GitHub</span>
                      <span className="arrow-glyph">↗</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="contact-meta-card">
                <div className="meta-row">
                  <span>RESPONSE TIME</span>
                  <b>Within 24–48 hours</b>
                </div>
                <div className="meta-row">
                  <span>SERVICES</span>
                  <b>UI/UX, SaaS, Systems</b>
                </div>
                <div className="meta-row">
                  <span>COLLABORATION</span>
                  <b>Remote Worldwide</b>
                </div>
              </div>
            </div>
          </aside>

          {/* SECTION 03 — CONTACT FORM */}
          <div className="contact-form-column">
            <div className="contact-form-container">
              <div className="form-head-meta">
                <span className="form-mono-badge">COMMUNICATION DESK</span>
                <span className="form-step-badge">STEP 01/01</span>
              </div>

              {formStatus === "success" ? (
                <div className="form-feedback-card success">
                  <div className="feedback-badge">✓ MESSAGE DRAFTED</div>
                  <h3>Thank you, {name}!</h3>
                  <p>
                    Your message draft has been prepared and opened in your email client. If it did
                    not open automatically, you can send it directly to{" "}
                    <strong>archanashaju@gmail.com</strong>.
                  </p>
                  <button type="button" className="btn-editorial btn-primary" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-editorial-form" onSubmit={handleSubmit} noValidate>
                  {errorMessage && (
                    <div className="form-error-banner" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <div className="form-field-group">
                    <label htmlFor="contact-name" className="field-label">
                      FULL NAME <span className="req">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-email" className="field-label">
                      EMAIL ADDRESS <span className="req">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="field-label">PROJECT TYPE / TOPIC</label>
                    <div className="project-type-selector" role="radiogroup">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          role="radio"
                          aria-checked={projectType === type}
                          className={`type-pill ${projectType === type ? "is-active" : ""}`}
                          onClick={() => setProjectType(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-message" className="field-label">
                      MESSAGE <span className="req">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      rows={5}
                      required
                      placeholder="Tell me about your project, goals, timeline, or idea..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="form-foot-actions">
                    <p className="form-direct-note">
                      Submitting prepares a pre-filled email draft directly to{" "}
                      <code>archanashaju@gmail.com</code>.
                    </p>
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="btn-editorial btn-primary btn-submit"
                    >
                      {formStatus === "submitting" ? (
                        <span>Preparing...</span>
                      ) : (
                        <>
                          Send Message <span>→</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — FINAL CONTACT CTA */}
      <section className="contact-closing-section page-container">
        <div className="contact-closing-box">
          <p className="contact-closing-line">Looking forward to hearing from you.</p>
          <div className="contact-closing-signoff">
            <span className="signoff-monogram">[a] [s]</span>
            <span className="signoff-name">Archana Shaju · UI/UX Designer</span>
          </div>
        </div>
      </section>
    </main>
  );
}
