import { useEffect, useRef, useState } from "react";
import { projects } from "./projects";

const work = [
  ["Odyn", "Founder", "Present"],
  ["Strive", "Creative Developer", "Present"],
  ["Balky Studio", "Founder", "Present"],
  ["Bondir", "Web Designer & Dev", "2024"],
  ["Auvlie", "Co-Founder", "2023"],
  ["Utah Tech University", "Adjunct Professor", "2023"],
  ["Adapte", "Creative Director", "2022"],
  ["beatBread", "Product Designer", "2022"],
];

const awards = [
  ["Awwwards", "Site of the Day", "X2"],
  ["Awwwards", "Developer Award", "X2"],
  ["Awwwards", "Honorable Mention", "X8"],
  ["Awwwards", "Jury", "2026"],
  ["CSS Design Awards", "Website of the Day", "Heva Health"],
  ["CSS Design Awards", "Special Kudos", "Portfolio"],
  ["Top CSS Gallery", "Site of the Day", "1820 Prod."],
  ["Webflow Awards", "Finalist", "’24"],
];

export function AboutPage() {
  const moveCard = (event: React.PointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    card.style.setProperty("--rx", `${y * -2.5}deg`);
    card.style.setProperty("--ry", `${x * 3}deg`);
    card.style.setProperty("--mx", `${x * 5}px`);
    card.style.setProperty("--my", `${y * 5}px`);
  };
  const resetCard = (event: React.PointerEvent<HTMLElement>) => {
    for (const key of ["--rx", "--ry", "--mx", "--my"])
      event.currentTarget.style.removeProperty(key);
  };

  return (
    <main className="page-scroll about-page">
      <section className="office">
        <div className="office-caption">
          <span>The Front Office</span>
          <span>JOB:: N°00</span>
          <span>EST:: 2000</span>
          <span>STATUS:: OPEN</span>
        </div>
        <article
          className="profile-file desk-card"
          onPointerMove={moveCard}
          onPointerLeave={resetCard}
        >
          <div className="file-top">
            <span>Carter Ogunsola</span>
            <span>CREATIVE DEVELOPER</span>
          </div>
          <div className="portrait-mark">CO</div>
          <h1>About me</h1>
          <p>Lagos → Utah</p>
          <div className="file-coordinate">N 37°05′47″ / W 113°34′06″</div>
        </article>
        <article
          className="telemetry-card desk-card"
          onPointerMove={moveCard}
          onPointerLeave={resetCard}
        >
          <div className="card-kicker">
            <span>Telemetry::</span>
            <span>Sync</span>
          </div>
          <div className="telemetry-map">
            <i className="lagos-dot" />
            <i className="utah-dot" />
            <svg viewBox="0 0 300 130" aria-hidden="true">
              <path d="M35 95C96 5 187 22 266 60" />
            </svg>
          </div>
          <div className="city-row">
            <span>Lagos, NG</span>
            <span>St. George, UT</span>
          </div>
          <p>11,886 km · −7 h · since 2000</p>
        </article>
        <article
          className="radio-card desk-card"
          onPointerMove={moveCard}
          onPointerLeave={resetCard}
        >
          <div className="card-kicker">
            <span>Radio::</span>
            <span>Tuning</span>
          </div>
          <div className="radio-dial">
            <span>SEARCHING</span>
            <i />
          </div>
          <div className="radio-time">
            <span>0:00</span>
            <span>−0:00</span>
          </div>
          <div className="radio-stations">
            <b>LOS</b>
            <b>SGU</b>
          </div>
        </article>
        <div className="scroll-note">SCROLL TO OPEN THE FILE ↓</div>
      </section>

      <section className="about-letter page-container">
        <p className="section-label">The letter ::</p>
        <h2>Hey, you pulled my file.</h2>
        <div className="letter-copy">
          <p>
            I’m a creative developer, director and entrepreneur focused on crafting truly unique web
            experiences. Strong background in design, an unconventional way into every problem, and
            a taste for pure digital originality.
          </p>
          <p>
            Days I’m the lead web developer and brand engineer at{" "}
            <a href="https://strivepharmacy.com">Strive</a>. I founded and run{" "}
            <a href="https://www.balky.studio/">Balky Studio</a>, and I’m building Odyn, custom code
            in production for Webflow. Nights, the lab stays lit.
          </p>
          <p>
            Born in Lagos, Nigeria. Based in Utah. The press out front is what the shop makes. This
            room is who makes it.
          </p>
        </div>
      </section>

      <section className="record page-container">
        <div className="record-head">
          <p className="section-label">The record ::</p>
          <h2>Where I’ve worked.</h2>
        </div>
        <div className="record-table">
          <div className="record-row record-labels">
            <span>Company</span>
            <span>Role</span>
            <span>Year</span>
          </div>
          {work.map((row) => (
            <div className="record-row" key={row[0]}>
              {row.map((cell) => (
                <span key={cell}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="accolades page-container">
        <div className="record-head">
          <p className="section-label">On file ::</p>
          <h2>What the work picked up.</h2>
        </div>
        <div className="award-grid">
          <p className="section-label">Awards :: 9</p>
          <div>
            {awards.map((row) => (
              <div className="award-row" key={`${row[0]}${row[1]}`}>
                {row.map((cell) => (
                  <span key={cell}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

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

function SignaturePad() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);

  useEffect(() => {
    const resize = () => {
      const element = canvas.current;
      if (!element) return;
      const ratio = window.devicePixelRatio || 1;
      const rect = element.getBoundingClientRect();
      element.width = rect.width * ratio;
      element.height = rect.height * ratio;
      element.getContext("2d")?.scale(ratio, ratio);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const point = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const element = canvas.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const context = element.getContext("2d");
    if (!context) return;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    context.lineWidth = 1.4;
    context.lineCap = "round";
    context.strokeStyle = "#1e1e1e";
    if (!drawing.current) context.moveTo(x, y);
    else {
      context.lineTo(x, y);
      context.stroke();
    }
  };

  return (
    <div className="signature">
      <canvas
        ref={canvas}
        onPointerDown={(e) => {
          drawing.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          point(e);
        }}
        onPointerMove={(e) => drawing.current && point(e)}
        onPointerUp={() => (drawing.current = false)}
      />
      <span>sign here</span>
      <button
        type="button"
        onClick={() =>
          canvas.current
            ?.getContext("2d")
            ?.clearRect(0, 0, canvas.current.width, canvas.current.height)
        }
      >
        clear signature
      </button>
    </div>
  );
}

export function ContactPage() {
  const [subject, setSubject] = useState("New business");
  const [from, setFrom] = useState("");
  const [email, setEmail] = useState("");
  const [letter, setLetter] = useState("");
  const send = (event: React.FormEvent) => {
    event.preventDefault();
    const body = `${letter}\n\nSincerely,\n${from} (${email})`;
    window.location.href = `mailto:hello@carterogunsola.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <main className="page-scroll contact-page">
      <section className="letter-desk">
        <form className="contact-sheet" onSubmit={send}>
          <div className="contact-letterhead">
            <div className="contact-logo">
              <span>C</span>
              <span>O</span>
            </div>
            <div>
              <b>Carter Ogunsola</b>
              <p>Creative Developer & Brand Engineer</p>
              <a href="mailto:hello@carterogunsola.com">hello@carterogunsola.com</a>
              <span> · Utah, USA</span>
            </div>
          </div>
          <div className="letter-date">23 OCT 2026</div>
          <h1>Dear Carter,</h1>
          <fieldset>
            <legend>RE ::</legend>
            {["New business", "A collaboration", "Just a hello"].map((item) => (
              <button
                type="button"
                className={subject === item ? "selected" : ""}
                onClick={() => setSubject(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </fieldset>
          <label className="line-field">
            <span>FROM ::</span>
            <input required value={from} onChange={(e) => setFrom(e.target.value)} />
          </label>
          <label className="line-field">
            <span>VIA ::</span>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="letter-field">
            <span>The letter</span>
            <textarea required value={letter} onChange={(e) => setLetter(e.target.value)} />
          </label>
          <p className="sincerely">Sincerely,</p>
          <SignaturePad />
          <div className="sheet-foot">
            <span>ONE REPLY, NO NEWSLETTER · {from ? "READY TO SEND" : "NOT YET SIGNED"}</span>
            <button type="submit">
              Send it <span>→</span>
            </button>
          </div>
        </form>
        <aside className="intake-stub">
          <b>CARTER OGUNSOLA:: PRESS</b>
          <span>INTAKE · COUNTER 01</span>
          <dl>
            <dt>JOB</dt>
            <dd>——</dd>
            <dt>RECEIVED</dt>
            <dd>——</dd>
            <dt>REPLY BY</dt>
            <dd>——</dd>
            <dt>STATUS</dt>
            <dd>BEING WRITTEN</dd>
            <dt>FILE UNDER</dt>
            <dd>{subject.toUpperCase()}</dd>
          </dl>
          <strong>KEEP THIS HALF</strong>
        </aside>
      </section>
    </main>
  );
}
