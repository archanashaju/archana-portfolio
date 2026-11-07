import { useState } from "react";

interface FlexshftPageProps {
  onBack: () => void;
  onNavigate?: (route: string) => void;
}

export function FlexshftPage({ onBack, onNavigate }: FlexshftPageProps) {
  const [activeTab, setActiveTab] = useState<"interactive" | "sheet">("interactive");
  const [activeFilter, setActiveFilter] = useState<"all" | "matches" | "nearby">("matches");
  const [claimedShift, setClaimedShift] = useState<number | null>(null);

  const sectors = [
    {
      id: "hospitality",
      icon: "🍸",
      title: "Hospitality & Dining",
      roles: "Lead Mixologist · Barista · Line Chef · Sommelier",
      badge: "Fastest Growing",
      color: "#10b981",
      avgPay: "£16.50/hr",
    },
    {
      id: "healthcare",
      icon: "🩺",
      title: "Healthcare & Care",
      roles: "Ward Support Nurse · Care Assistant · Clinic Host",
      badge: "High Demand",
      color: "#0ea5e9",
      avgPay: "£21.00/hr",
    },
    {
      id: "events",
      icon: "🎟️",
      title: "Events & Stadiums",
      roles: "Front Desk · VIP Hospitality · Usher · Floor Host",
      badge: "Weekend Surges",
      color: "#f59e0b",
      avgPay: "£15.20/hr",
    },
    {
      id: "logistics",
      icon: "📦",
      title: "Retail & Logistics",
      roles: "Warehouse Operative · Inventory Specialist · Picker",
      badge: "24/7 Shifts",
      color: "#f43f5e",
      avgPay: "£14.80/hr",
    },
  ];

  const shifts = [
    {
      id: 1,
      badge: "Strong Fit",
      badgeColor: "#10b981",
      role: "Front Desk Assistant",
      company: "Premier Hotels",
      rating: "4.8",
      location: "Ancoats · 0.4 miles away",
      time: "Thu, Apr 11 · 6:00 AM – 11:00 PM (5 hrs)",
      rate: "£14.50/hr",
      total: "£72.00",
      avatar: "🏨",
      type: "Hospitality",
    },
    {
      id: 2,
      badge: "Good Fit",
      badgeColor: "#38bdf8",
      role: "Shift Supervisor",
      company: "Mexi-Fresh",
      rating: "3.0",
      location: "Deansgate · 0.8 miles away",
      time: "Thu, Apr 20 · 6:00 AM – 11:00 PM (5 hrs)",
      rate: "£14.50/hr",
      total: "£95.00",
      avatar: "🌮",
      type: "Food & Bev",
    },
    {
      id: 3,
      badge: "Recommended",
      badgeColor: "#fb923c",
      role: "Warehouse Operative",
      company: "Quick Eats",
      rating: "3.0",
      location: "Northern Quarter · 1.2 miles away",
      time: "Thu, Apr 14 · 6:00 AM – 11:00 PM (5 hrs)",
      rate: "£14.50/hr",
      total: "£85.00",
      avatar: "📦",
      type: "Logistics",
    },
  ];

  return (
    <main className="page-scroll flexshft-page">
      {/* Top Floating Navigation Header */}
      <nav className="cs-topbar page-container" aria-label="Case Study Navigation">
        <button className="cs-back-btn" onClick={onBack}>
          <span className="cs-back-arrow">←</span>
          <span>Back to All Projects</span>
        </button>

        <div className="cs-topbar-meta">
          <span className="cs-meta-pill">CASE STUDY N°05</span>
          <span className="cs-meta-pill">FLEXSHFT</span>
          <span className="cs-meta-pill cs-meta-live">SHIPPED 2025</span>
        </div>

        <div className="cs-view-toggle">
          <button
            className={`cs-toggle-btn ${activeTab === "interactive" ? "active" : ""}`}
            onClick={() => setActiveTab("interactive")}
          >
            Case Study View
          </button>
          <button
            className={`cs-toggle-btn ${activeTab === "sheet" ? "active" : ""}`}
            onClick={() => setActiveTab("sheet")}
          >
            Full Presentation Roll
          </button>
        </div>
      </nav>

      {/* Hero Section (Black Ambient Container) */}
      <header className="cs-hero-dark-block">
        <div className="page-container cs-hero-inner">
          <div className="cs-hero-kicker">
            <span className="kicker-tag">CASE STUDY :: 05</span>
            <span className="kicker-dot">•</span>
            <span className="kicker-client">ON-DEMAND SHIFT WORKFORCE ECOSYSTEM</span>
          </div>

          <h1 className="cs-hero-title">FLEXSHFT</h1>

          <p className="cs-hero-lead">
            An intelligent mobile marketplace connecting verified hourly talent with hospitality,
            healthcare, and retail venues in real time. Replacing 48-hour agency delays with 15-minute
            algorithmic dispatching and instant payroll.
          </p>

          {/* Hero Device Mockup in Chrome Torus */}
          <div className="cs-hero-frame">
            <img
              src="/projects/flexshft.jpg"
              alt="FLEXSHFT hero mobile application mockup"
              className="cs-hero-img"
            />
            <div className="cs-frame-glow" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* Case Study Mode vs Full Presentation Sheet */}
      {activeTab === "sheet" ? (
        <section className="cs-sheet-section page-container">
          <div className="cs-sheet-header">
            <h2>Complete Presentation Roll</h2>
            <p>High-resolution export from the Behance design system & brand architecture study.</p>
          </div>
          <div className="cs-sheet-wrap">
            <img
              src="/projects/flexshft-case-study.png"
              alt="FLEXSHFT full presentation roll"
              className="cs-sheet-img"
            />
          </div>
        </section>
      ) : (
        <>
          {/* Metadata Specs Bar */}
          <section className="cs-spec-grid page-container">
            <div className="cs-spec-cell">
              <span className="spec-label">CLIENT ::</span>
              <span className="spec-value">Flexshft UK Ltd</span>
            </div>
            <div className="cs-spec-cell">
              <span className="spec-label">SERVICES ::</span>
              <span className="spec-value">UI/UX, Mobile App, Design System, Web App</span>
            </div>
            <div className="cs-spec-cell">
              <span className="spec-label">TIMELINE ::</span>
              <span className="spec-value">14 Weeks (Concept → Production)</span>
            </div>
            <div className="cs-spec-cell">
              <span className="spec-label">PLATFORM ::</span>
              <span className="spec-value">iOS, Android & Employer Console</span>
            </div>
          </section>

          {/* 01 / Overview & Narrative */}
          <section className="cs-editorial-section page-container">
            <div className="cs-editorial-header">
              <span className="section-num">01 / OVERVIEW</span>
              <h2>Reinventing Flexible Hourly Work</h2>
            </div>
            <div className="cs-editorial-columns">
              <p className="cs-lead-paragraph">
                The traditional temporary staffing model is broken. Hospitality venues and clinics lose
                over £1.4B annually to sudden worker vacancies, while agencies charge 40% commissions,
                rely on manual telephone trees, and force hourly workers to wait up to 21 days for pay.
              </p>
              <p>
                FLEXSHFT was conceived as an end-to-end liquidity engine for shifts. By pairing verified
                talent credentials with proximity-based matching, managers fill shifts in under 15 minutes,
                while workers enjoy the freedom of flexible hours and same-day direct bank settlement.
              </p>
            </div>
          </section>

          {/* 02 / The Ecosystem: Sectors & Audiences */}
          <section className="cs-sectors-section page-container">
            <div className="cs-section-head">
              <span className="section-num">02 / THE ECOSYSTEM</span>
              <div>
                <h2>Engineered for High-Turnover Industries</h2>
                <p>Four specialized workforce verticals unified into one seamless matching architecture.</p>
              </div>
            </div>

            <div className="cs-sectors-grid">
              {sectors.map((sec) => (
                <article key={sec.id} className="cs-sector-card">
                  <div className="sector-card-top">
                    <span className="sector-icon">{sec.icon}</span>
                    <span
                      className="sector-badge"
                      style={{
                        backgroundColor: `${sec.color}18`,
                        color: sec.color,
                        border: `1px solid ${sec.color}44`,
                      }}
                    >
                      {sec.badge}
                    </span>
                  </div>
                  <h3>{sec.title}</h3>
                  <p className="sector-roles">{sec.roles}</p>
                  <div className="sector-footer">
                    <span className="sector-avg">Avg: {sec.avgPay}</span>
                    <span className="sector-rate-tag">Instant Payout ✓</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 03 / User Journey & Process Flow Diagram */}
          <section className="cs-flow-diagram-section page-container">
            <div className="cs-section-head">
              <span className="section-num">03 / USER JOURNEY & FLOW</span>
              <div>
                <h2>The 5-Step Frictionless Dispatch Loop</h2>
                <p>From sudden venue vacancy to same-day bank deposit with zero manual phone calls.</p>
              </div>
            </div>

            <div className="cs-journey-grid">
              <div className="journey-node">
                <span className="journey-num">01</span>
                <h4>Shift Broadcast</h4>
                <p>Manager selects role template, sets rate, and publishes in &lt;45s.</p>
              </div>
              <div className="journey-arrow">→</div>
              <div className="journey-node">
                <span className="journey-num">02</span>
                <h4>Smart Engine</h4>
                <p>Algorithm scores nearby verified workers by proximity and rating.</p>
              </div>
              <div className="journey-arrow">→</div>
              <div className="journey-node">
                <span className="journey-num">03</span>
                <h4>1-Tap Claim</h4>
                <p>Worker accepts instantly without bidding wars or resume wait time.</p>
              </div>
              <div className="journey-arrow">→</div>
              <div className="journey-node">
                <span className="journey-num">04</span>
                <h4>Geofence Check-in</h4>
                <p>BLE beacon and GPS verify arrival upon entering venue perimeter.</p>
              </div>
              <div className="journey-arrow">→</div>
              <div className="journey-node journey-node-success">
                <span className="journey-num">05</span>
                <h4>Instant Pay</h4>
                <p>Digital timesheet sign-off triggers direct Open Banking payout in 180s.</p>
              </div>
            </div>
          </section>

          {/* 04 / 4-Perspective iPhones Showcase (flexshft-lineup.png) */}
          <section className="cs-media-block page-container">
            <div className="cs-section-head">
              <span className="section-num">04 / THE MOBILE SUITE</span>
              <div>
                <h2>End-to-End Mobile Experience</h2>
                <p>
                  From incoming shift notifications to live floor messaging, visual skill showcases,
                  and dynamic calendar availability controls.
                </p>
              </div>
            </div>

            <div className="cs-mockup-showcase">
              <img
                src="/projects/flexshft-lineup.png"
                alt="FLEXSHFT 4-screen perspective device lineup"
                className="cs-showcase-img"
              />
            </div>

            <div className="cs-quad-legend">
              <div className="legend-item">
                <span className="legend-idx">01</span>
                <h4>Shift Messages</h4>
                <p>Direct encrypted channels with Lumière Lounge, Pet Care Pro, and Urban ONI.</p>
              </div>
              <div className="legend-item">
                <span className="legend-idx">02</span>
                <h4>Live Shift Ticket</h4>
                <p>Real-time briefing, dress code specification (black vest/tie), and staff door pin.</p>
              </div>
              <div className="legend-item">
                <span className="legend-idx">03</span>
                <h4>Flexes Portfolio</h4>
                <p>Visual proof of work: mixology photos, kitchen action shots, and verified skill badges.</p>
              </div>
              <div className="legend-item">
                <span className="legend-idx">04</span>
                <h4>Manage Availability</h4>
                <p>Interactive weekly matrix (Morning/Afternoon/Evening) and one-tap Holiday Mode.</p>
              </div>
            </div>
          </section>

          {/* 05 / Active Shift Coordination Chat Detail (flexshft-chat-detail.png) */}
          <section className="cs-chat-feature-section page-container">
            <div className="cs-chat-grid">
              <div className="cs-chat-visual">
                <img
                  src="/projects/flexshft-chat-detail.png"
                  alt="Lumière Lounge active shift communication detail"
                  className="cs-chat-img"
                />
              </div>

              <div className="cs-chat-copy">
                <span className="section-num">05 / LIVE TICKET PROTOCOL</span>
                <h2>Real-Time Shift Coordination</h2>
                <p className="cs-chat-lead">
                  Friction-free messaging between venue supervisors and on-duty talent:
                </p>

                <div className="cs-chat-bullets">
                  <div className="bullet-card">
                    <span className="bullet-pill">LIVE TICKET</span>
                    <h4>Lead Mixologist @ Lumière Lounge</h4>
                    <p>Tonight · 7:00 – 11:00 PM · £28 / hr · 14 Rue de Rivoli</p>
                  </div>
                  <div className="bullet-card">
                    <span className="bullet-pill">ON-SITE BRIEF</span>
                    <h4>Entrance & Uniform Protocol</h4>
                    <p>
                      Supervisor shares staff entrance pin location and dress code specifications
                      directly inside the encrypted shift thread.
                    </p>
                  </div>
                  <div className="bullet-card">
                    <span className="bullet-pill">GEOFENCE SYNC</span>
                    <h4>Automated Clock-In Beacon</h4>
                    <p>
                      Bluetooth BLE beacons detect arrival at the venue entrance, updating the ticket
                      status to "Active on Floor" automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 06 / Brand Identity & Visual Geometry (flexshft-brand-photo.png & flexshft-logo-grid.png) */}
          <section className="cs-brand-showcase-section page-container">
            <div className="cs-section-head">
              <span className="section-num">06 / BRAND IDENTITY</span>
              <div>
                <h2>Brand Identity & Symbol Geometry</h2>
                <p>
                  The "FS" mark marries geometric precision with the swift energy of hourly momentum.
                  Tested across iOS squircles, physical collateral, and high-contrast digital displays.
                </p>
              </div>
            </div>

            <div className="cs-brand-grid-duo">
              <div className="cs-brand-card">
                <img
                  src="/projects/flexshft-brand-photo.png"
                  alt="FLEXSHFT brandmark in modern workspace"
                  className="cs-brand-img"
                />
                <div className="cs-card-caption">
                  <span>GLASSMORPHIC LOGOTYPE & BRAND SYSTEM</span>
                </div>
              </div>

              <div className="cs-brand-card">
                <img
                  src="/projects/flexshft-logo-grid.png"
                  alt="FLEXSHFT logo construction grid and iOS app icon"
                  className="cs-brand-img"
                />
                <div className="cs-card-caption">
                  <span>VECTOR CONSTRUCTION & APP ICON SQUIRCLE</span>
                </div>
              </div>
            </div>
          </section>

          {/* 07 / Philosophy Quote Banner (Dark with ambient glow) */}
          <section className="cs-quote-banner page-container">
            <blockquote>
              “Shift work shouldn't mean uncertain income. We designed FLEXSHFT to bring dignity, velocity,
              and absolute transparency to every single working hour.”
            </blockquote>
            <cite>— Product Vision Statement · FLEXSHFT UK 2025</cite>
          </section>

          {/* 08 / Dual Phones: Worker Passport & Best Matches (flexshft-dual-phones.png) */}
          <section className="cs-media-block page-container">
            <div className="cs-section-head">
              <span className="section-num">08 / WORKER PASSPORT & MATCHING</span>
              <div>
                <h2>Verified Credentials & Instant Claiming</h2>
                <p>
                  On the left, Sophie Turner's verified profile with video intro, 92% show-up rate, and work samples.
                  On the right, the algorithmic Best Matches feed with guaranteed pay breakdown.
                </p>
              </div>
            </div>

            <div className="cs-mockup-showcase">
              <img
                src="/projects/flexshft-dual-phones.png"
                alt="FLEXSHFT Dual iPhone view: Worker Passport and Best Matches feed"
                className="cs-showcase-img"
              />
            </div>

            <div className="cs-showcase-grid-notes">
              <div className="cs-note-box">
                <h4>Verified Worker Passport</h4>
                <p>
                  Includes biometric verification, video introduction, on-time percentage (92%), and
                  repeat venue bookings (7x) so managers hire with zero guesswork.
                </p>
              </div>
              <div className="cs-note-box">
                <h4>Transparent Shift Economics</h4>
                <p>
                  Every card displays total net payout upfront (£72.00, £95.00), hourly rate breakdown,
                  and exact walking distance from the worker's current location.
                </p>
              </div>
            </div>
          </section>

          {/* 09 / Interactive Dispatch Feed Simulator */}
          <section className="cs-interactive-section page-container">
            <div className="cs-section-head">
              <span className="section-num">09 / INTERACTIVE SIMULATOR</span>
              <div>
                <h2>Experience the Shift Dispatch Engine</h2>
                <p>Filter active shifts by proximity or suitability, and test the 1-tap claim flow.</p>
              </div>
            </div>

            <div className="cs-mockup-wrapper">
              <div className="cs-phone-shell">
                <div className="cs-phone-notch">
                  <span className="phone-time">9:41</span>
                  <div className="phone-speaker" />
                  <div className="phone-icons">5G 100%</div>
                </div>

                <div className="cs-phone-userbar">
                  <div className="cs-user-info">
                    <div className="cs-user-avatar">ST</div>
                    <div>
                      <p className="cs-user-name">Sophie Turner ▾</p>
                      <p className="cs-user-location">92 High Street, London</p>
                    </div>
                  </div>
                  <div className="cs-user-actions">
                    <span className="cs-pill-badge">PRO VERIFIED</span>
                  </div>
                </div>

                <div className="cs-filter-row">
                  <button
                    className={`cs-filter-pill ${activeFilter === "matches" ? "active" : ""}`}
                    onClick={() => setActiveFilter("matches")}
                  >
                    Best Matches
                  </button>
                  <button
                    className={`cs-filter-pill ${activeFilter === "nearby" ? "active" : ""}`}
                    onClick={() => setActiveFilter("nearby")}
                  >
                    Nearby
                  </button>
                  <button
                    className={`cs-filter-pill ${activeFilter === "all" ? "active" : ""}`}
                    onClick={() => setActiveFilter("all")}
                  >
                    All Shifts
                  </button>
                </div>

                <div className="cs-shift-stack">
                  {shifts
                    .filter((s) => (activeFilter === "nearby" ? s.id <= 2 : true))
                    .map((shift) => (
                      <div
                        key={shift.id}
                        className={`cs-shift-card ${claimedShift === shift.id ? "claimed" : ""}`}
                      >
                        <div className="cs-card-topline">
                          <span
                            className="cs-fit-pill"
                            style={{
                              backgroundColor: `${shift.badgeColor}22`,
                              color: shift.badgeColor,
                              border: `1px solid ${shift.badgeColor}55`,
                            }}
                          >
                            {shift.badge}
                          </span>
                          <span className="cs-company-rating">{shift.rating} ★</span>
                        </div>

                        <div className="cs-card-body">
                          <div className="cs-company-avatar">{shift.avatar}</div>
                          <div className="cs-role-details">
                            <h4>{shift.role}</h4>
                            <p className="cs-company-title">{shift.company}</p>
                            <p className="cs-meta-text">{shift.location}</p>
                            <p className="cs-meta-text">{shift.time}</p>
                          </div>
                        </div>

                        <div className="cs-card-footer">
                          <div className="cs-pay-block">
                            <span className="cs-pay-total">{shift.total}</span>
                            <span className="cs-pay-rate">{shift.rate}</span>
                          </div>
                          <button
                            className={`cs-claim-btn ${claimedShift === shift.id ? "is-claimed" : ""}`}
                            onClick={() =>
                              setClaimedShift(claimedShift === shift.id ? null : shift.id)
                            }
                          >
                            {claimedShift === shift.id ? "Shift Confirmed ✓" : "Claim Shift →"}
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="cs-phone-side-notes">
                <div className="cs-note-box">
                  <h4>Algorithmic Proximity Scoring</h4>
                  <p>
                    Shifts prioritize workers who live within walking or cycling radius, cutting
                    commute uncertainty and ensuring prompt arrival.
                  </p>
                </div>
                <div className="cs-note-box">
                  <h4>Guaranteed Escrow Settlement</h4>
                  <p>
                    Employer deposit is secured upon shift publication. When supervisor signs off at
                    checkout, payout hits the worker's wallet in 180 seconds.
                  </p>
                </div>
                <div className="cs-note-box">
                  <h4>Two-Way Trust Rating</h4>
                  <p>
                    Venues and workers rate each other on punctuality, kitchen safety, and environment,
                    fostering respectful, reliable workplace culture.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 10 / Employer Management Console (Web & Tablet Dashboard) */}
          <section className="cs-employer-section page-container">
            <div className="cs-section-head">
              <span className="section-num">10 / EMPLOYER CONSOLE</span>
              <div>
                <h2>Venue Operations & Floor Radar</h2>
                <p>Designed for managers on tablets and desktop consoles to orchestrate live rosters.</p>
              </div>
            </div>

            <div className="cs-employer-dashboard-card">
              <div className="dashboard-topbar">
                <div className="dashboard-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="dashboard-title">flexshft.app/console/venues/premier-hotel</span>
                <span className="dashboard-status">● LIVE ROSTER SYNC</span>
              </div>

              <div className="dashboard-content">
                <div className="dashboard-stat-row">
                  <div className="d-stat">
                    <span className="d-stat-label">FLOOR COVERAGE</span>
                    <span className="d-stat-val">100% (24/24)</span>
                  </div>
                  <div className="d-stat">
                    <span className="d-stat-label">CONFIRMED WORKERS</span>
                    <span className="d-stat-val">18 Checked-in</span>
                  </div>
                  <div className="d-stat">
                    <span className="d-stat-label">PENDING ARRIVALS</span>
                    <span className="d-stat-val">6 In-Transit</span>
                  </div>
                  <div className="d-stat">
                    <span className="d-stat-label">DISBURSED TODAY</span>
                    <span className="d-stat-val">£1,840.00</span>
                  </div>
                </div>

                <div className="dashboard-table">
                  <div className="table-header">
                    <span>WORKER</span>
                    <span>ROLE</span>
                    <span>VENUE AREA</span>
                    <span>CHECK-IN</span>
                    <span>RATE</span>
                    <span>STATUS</span>
                  </div>
                  <div className="table-row">
                    <span className="col-worker">Sophie Turner</span>
                    <span>Front Desk Assistant</span>
                    <span>Main Lobby</span>
                    <span>05:54 AM (6m early)</span>
                    <span>£14.50/hr</span>
                    <span className="status-badge status-active">On Floor</span>
                  </div>
                  <div className="table-row">
                    <span className="col-worker">Marcus Vance</span>
                    <span>Lead Mixologist</span>
                    <span>Lumière Lounge</span>
                    <span>06:48 PM (12m early)</span>
                    <span>£28.00/hr</span>
                    <span className="status-badge status-active">On Floor</span>
                  </div>
                  <div className="table-row">
                    <span className="col-worker">Elena Rostova</span>
                    <span>Shift Supervisor</span>
                    <span>Kitchen & Floor</span>
                    <span>03:52 PM (8m early)</span>
                    <span>£16.00/hr</span>
                    <span className="status-badge status-active">On Floor</span>
                  </div>
                  <div className="table-row">
                    <span className="col-worker">David Chen</span>
                    <span>Hospitality Host</span>
                    <span>VIP Dining</span>
                    <span>In transit · 0.2 mi away</span>
                    <span>£15.20/hr</span>
                    <span className="status-badge status-transit">In Transit</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 11 / Measurable Results & Key Metrics */}
          <section className="cs-metrics-section page-container">
            <div className="cs-section-head">
              <span className="section-num">11 / MEASURABLE IMPACT</span>
              <div>
                <h2>Quantified Performance Metrics</h2>
                <p>Performance results measured across 6 months of live operational deployment in Manchester and London.</p>
              </div>
            </div>

            <div className="cs-metrics-grid">
              <div className="cs-metric-card">
                <span className="metric-num">14.2m</span>
                <span className="metric-label">Average Shift Fill Time</span>
                <p className="metric-desc">Down from an industry average of 36 hours via staffing agencies.</p>
              </div>
              <div className="cs-metric-card">
                <span className="metric-num">98.6%</span>
                <span className="metric-label">Attendance & On-Time Rate</span>
                <p className="metric-desc">Enforced via proactive geofence alerts and two-way rating incentives.</p>
              </div>
              <div className="cs-metric-card">
                <span className="metric-num">£4.8M+</span>
                <span className="metric-label">Wages Disbursed</span>
                <p className="metric-desc">Transferred with zero hidden fees directly to hourly workers.</p>
              </div>
              <div className="cs-metric-card">
                <span className="metric-num">4.9 ★</span>
                <span className="metric-label">Worker Satisfaction Rating</span>
                <p className="metric-desc">App Store and Google Play aggregated rating over 8,400+ reviews.</p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer Navigation */}
      <footer className="cs-footer page-container">
        <button className="cs-footer-back" onClick={onBack}>
          ← Return to All Projects
        </button>
        <p className="cs-footer-copy">© 2025 Carter Ogunsola · Balky Studio · Flexshft Case Study</p>
      </footer>
    </main>
  );
}
