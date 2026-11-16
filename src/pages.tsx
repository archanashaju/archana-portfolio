import { useState } from "react";
import { projects } from "./projects";

/* ==========================================================================
   ABOUT PAGE — ARCHANA · UI/UX DESIGNER
   ========================================================================== */

const designPrinciples = [
  {
    num: "01",
    title: "Clarity over complexity",
    description:
      "I believe interfaces should communicate clearly. Every element should have a purpose and help users accomplish their goals.",
  },
  {
    num: "02",
    title: "User comes first",
    description:
      "Understanding user behavior, expectations, and pain points helps me create experiences that feel natural and intuitive.",
  },
  {
    num: "03",
    title: "Function meets aesthetics",
    description:
      "A beautiful interface should also be functional. I focus on balancing visual consistency with usability.",
  },
  {
    num: "04",
    title: "Details make the difference",
    description:
      "From spacing and typography to interactions and feedback, small details contribute to a better overall experience.",
  },
];

const designProcessStages = [
  {
    num: "01",
    tag: "Stage 01 · Discovery",
    title: "Discover & Understand",
    description:
      "I start by understanding the project, its objectives, target audience, and business requirements. I explore the problem space and identify what needs to be solved.",
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
    tag: "Stage 02 · Definition",
    title: "Research & Define",
    description:
      "I explore user expectations, identify pain points, and organize the findings to establish a clear design direction.",
    activities: [
      "User research",
      "User behavior analysis",
      "Competitor research",
      "User personas when relevant",
      "Problem definition",
      "User journey mapping",
    ],
  },
  {
    num: "03",
    tag: "Stage 03 · Structure",
    title: "Information Architecture",
    description:
      "I organize content and functionality into a logical structure so users can navigate the product naturally.",
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
    tag: "Stage 04 · Exploration",
    title: "Wireframing & Ideation",
    description:
      "I translate ideas into low-fidelity layouts and explore different ways to solve the identified problems before moving into visual design.",
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
    tag: "Stage 05 · Craft",
    title: "UI Design & Prototyping",
    description:
      "I transform wireframes into polished interfaces while maintaining visual consistency, usability, and the product's identity.",
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
    tag: "Stage 06 · Delivery",
    title: "Testing & Refinement",
    description:
      "I review the experience, collect feedback, identify usability issues, and refine the design before developer handoff.",
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

const capabilities = [
  {
    index: "01",
    title: "Web Design",
    description:
      "Creating responsive websites with intuitive navigation, clear content hierarchy, and engaging visual experiences.",
  },
  {
    index: "02",
    title: "Mobile App Design",
    description:
      "Designing user-friendly mobile experiences with thoughtful interactions and simple navigation.",
  },
  {
    index: "03",
    title: "SaaS & Dashboard Design",
    description:
      "Building structured, data-driven interfaces for complex platforms, CRM systems, and admin dashboards.",
  },
  {
    index: "04",
    title: "Prototyping & Interaction Design",
    description:
      "Bringing concepts to life through interactive prototypes, transitions, and meaningful micro-interactions.",
  },
  {
    index: "05",
    title: "Design Systems",
    description:
      "Creating reusable components, consistent design patterns, and scalable UI foundations.",
  },
  {
    index: "06",
    title: "UX Problem Solving",
    description:
      "Identifying usability challenges and translating user requirements into practical design solutions.",
  },
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
    period: "Current Practice",
    role: "UI/UX Designer",
    focus: "Web, Mobile & SaaS Product Design",
    summary:
      "Designing end-to-end digital experiences that balance user needs with functional clarity. Leading design systems, responsive architectures, and high-fidelity interaction prototypes for modern platforms.",
  },
  {
    period: "Product Design",
    role: "Digital Systems & Interfaces",
    focus: "Cross-functional Collaboration",
    summary:
      "Crafting multi-platform experiences including staffing ecosystems, Web3 platforms, and interactive client products. Partnering closely with developers, founders, and stakeholders to translate complex ideas into polished realities.",
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
  const [activeProcessStage, setActiveProcessStage] = useState<number | null>(null);

  return (
    <main className="page-scroll about-page">
      {/* SECTION 01 — INTRODUCTION / ABOUT HERO */}
      <section className="about-hero page-container" aria-labelledby="about-hero-title">
        <div className="about-hero-top">
          <div className="hero-kicker-pill">
            <span className="live-dot" aria-hidden="true" />
            <span>ARCHANA · UI/UX DESIGNER</span>
          </div>
          <div className="hero-status-pill">
            <span>AVAILABLE FOR PRODUCT DESIGN & COLLABORATIONS</span>
          </div>
        </div>

        <div className="about-hero-grid">
          <div className="about-hero-main">
            <h1 id="about-hero-title" className="about-hero-heading">
              Designing digital experiences that feel intuitive, meaningful, and effortless.
            </h1>
            <div className="about-hero-intro">
              <p>
                I'm Archana, a UI/UX Designer passionate about creating thoughtful digital
                experiences that balance user needs, functionality, and visual clarity.
              </p>
              <p>
                I enjoy turning complex ideas into simple, intuitive interfaces. From early-stage
                research and wireframing to high-fidelity designs and interactive prototypes, I focus
                on creating experiences that are not just visually appealing but genuinely useful.
              </p>
            </div>
            <div className="about-hero-actions">
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
                View Works <span>↗</span>
              </button>
            </div>
          </div>

          <aside className="about-hero-portrait-card">
            <div className="portrait-card-header">
              <span className="portrait-meta-mono">ARCHANA SHAJU</span>
              <span className="portrait-meta-tag">UI/UX</span>
            </div>
            <div className="portrait-frame">
              <div className="portrait-monogram-art">
                <div className="monogram-pill-wrap">
                  <span className="mono-letter">A</span>
                  <span className="mono-letter">S</span>
                </div>
                <div className="monogram-grid-accent" />
              </div>
            </div>
            <div className="portrait-card-footer">
              <div className="portrait-field">
                <span className="label">DISCIPLINE</span>
                <span className="value">UI/UX & Product Design</span>
              </div>
              <div className="portrait-field">
                <span className="label">APPROACH</span>
                <span className="value">Human-Centered · Minimal</span>
              </div>
              <div className="portrait-field">
                <span className="label">LOCATION</span>
                <span className="value">Remote · Worldwide</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SECTION 02 — A LITTLE ABOUT ME */}
      <section className="about-section page-container" aria-labelledby="section-about-me-title">
        <div className="section-head-editorial">
          <span className="section-kicker">02 // BACKGROUND</span>
          <h2 id="section-about-me-title" className="section-title-editorial">
            More than just pixels and screens.
          </h2>
        </div>

        <div className="editorial-columns-grid">
          <div className="editorial-statement">
            <p className="lead-statement">
              "Good design is not simply about making something look beautiful; it's about making
              things easier to understand, navigate, and use."
            </p>
            <div className="statement-meta">
              <span>DESIGN PHILOSOPHY</span>
              <span>// PERSPECTIVE</span>
            </div>
          </div>

          <div className="editorial-narrative">
            <p>
              I'm a UI/UX Designer who enjoys understanding how people interact with digital products
              and finding ways to make those interactions better.
            </p>
            <p>
              My approach combines curiosity, problem-solving, and attention to detail. I believe good
              design is not simply about making something look beautiful; it's about making things
              easier to understand, navigate, and use.
            </p>
            <p>
              I enjoy working on different kinds of digital experiences, including websites, mobile
              applications, SaaS platforms, and complex dashboards.
            </p>
            <p>
              I'm always exploring new ideas, improving my design thinking, and learning how technology
              and design can work together to create better products.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 03 — MY DESIGN PHILOSOPHY */}
      <section className="about-section page-container" aria-labelledby="section-philosophy-title">
        <div className="section-head-editorial">
          <span className="section-kicker">03 // PHILOSOPHY</span>
          <h2 id="section-philosophy-title" className="section-title-editorial">
            How I think about design.
          </h2>
        </div>

        <div className="philosophy-grid">
          {designPrinciples.map((item) => (
            <article className="philosophy-card" key={item.num}>
              <div className="philosophy-num">{item.num}</div>
              <h3 className="philosophy-title">{item.title}</h3>
              <p className="philosophy-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 04 — MY UI/UX DESIGN PROCESS */}
      <section className="about-section page-container" aria-labelledby="section-process-title">
        <div className="section-head-editorial">
          <span className="section-kicker">04 // PROCESS & METHODOLOGY</span>
          <h2 id="section-process-title" className="section-title-editorial">
            From understanding the problem to crafting the experience.
          </h2>
          <p className="section-subtitle-editorial">
            Every project is different, but my approach follows a thoughtful process that helps turn
            ideas into meaningful digital experiences.
          </p>
        </div>

        <div className="process-timeline" role="list">
          {designProcessStages.map((stage, idx) => {
            const isExpanded = activeProcessStage === idx;
            return (
              <div
                className={`process-stage-item ${isExpanded ? "is-expanded" : ""}`}
                key={stage.num}
                role="listitem"
                onMouseEnter={() => setActiveProcessStage(idx)}
                onMouseLeave={() => setActiveProcessStage(null)}
              >
                <div className="process-stage-num">{stage.num}</div>
                <div className="process-stage-content">
                  <div className="process-stage-top">
                    <h3 className="process-stage-title">{stage.title}</h3>
                    <span className="process-stage-tag">{stage.tag}</span>
                  </div>
                  <p className="process-stage-desc">{stage.description}</p>
                  <div className="process-activities-wrap">
                    <span className="activities-label">Key Activities:</span>
                    <ul className="process-activities-pills">
                      {stage.activities.map((act) => (
                        <li key={act} className="activity-pill">
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 05 — WHAT I WORK ON */}
      <section className="about-section page-container" aria-labelledby="section-capabilities-title">
        <div className="section-head-editorial">
          <span className="section-kicker">05 // CORE CAPABILITIES</span>
          <h2 id="section-capabilities-title" className="section-title-editorial">
            Designing across digital experiences.
          </h2>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((item) => (
            <div className="capability-card" key={item.index}>
              <div className="capability-top">
                <span className="capability-num">{item.index}</span>
                <span className="capability-bracket">//</span>
              </div>
              <h3 className="capability-title">{item.title}</h3>
              <p className="capability-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 06 — TOOLS & EXPERTISE */}
      <section className="about-section page-container" aria-labelledby="section-toolkit-title">
        <div className="section-head-editorial">
          <span className="section-kicker">06 // CREATIVE TOOLKIT</span>
          <h2 id="section-toolkit-title" className="section-title-editorial">
            My creative toolkit.
          </h2>
        </div>

        <div className="toolkit-layout">
          <div className="toolkit-block">
            <h3 className="toolkit-subhead">Design Tools</h3>
            <div className="tools-pills-row">
              {toolsList.map((t) => (
                <div className="tool-pill" key={t.name}>
                  <span className="tool-icon-dot" />
                  <span className="tool-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="toolkit-block">
            <h3 className="toolkit-subhead">Design Capabilities</h3>
            <div className="skills-tags-cloud">
              {designSkills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — EXPERIENCE / PROFESSIONAL JOURNEY */}
      <section className="about-section page-container" aria-labelledby="section-journey-title">
        <div className="section-head-editorial">
          <span className="section-kicker">07 // JOURNEY & EXPERIENCE</span>
          <h2 id="section-journey-title" className="section-title-editorial">
            My journey in design.
          </h2>
        </div>

        <div className="journey-timeline">
          {journeyMilestones.map((m, i) => (
            <article className="journey-card" key={i}>
              <div className="journey-meta-col">
                <span className="journey-period">{m.period}</span>
                <span className="journey-role">{m.role}</span>
              </div>
              <div className="journey-desc-col">
                <h3 className="journey-focus">{m.focus}</h3>
                <p className="journey-summary">{m.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 08 — PERSONAL TOUCH */}
      <section className="about-section page-container" aria-labelledby="section-personal-title">
        <div className="personal-touch-box">
          <span className="section-kicker">08 // PERSPECTIVE</span>
          <h2 id="section-personal-title" className="personal-touch-title">
            Always curious. Always creating.
          </h2>
          <div className="personal-touch-body">
            <p>
              Outside of designing interfaces, I enjoy exploring creative ideas, discovering inspiring
              digital products, and learning new ways to approach everyday problems.
            </p>
            <p>
              I'm naturally curious about how things work, and that curiosity continues to influence
              the way I think and create.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 09 — FINAL CTA */}
      <section className="about-cta-section page-container" aria-labelledby="section-cta-title">
        <div className="about-cta-card">
          <span className="section-kicker">09 // COLLABORATE</span>
          <h2 id="section-cta-title" className="about-cta-title">
            Have an idea? Let's make it happen.
          </h2>
          <p className="about-cta-desc">
            I'm always open to interesting projects, creative collaborations, and opportunities to
            build meaningful digital experiences.
          </p>
          <div className="about-cta-buttons">
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
