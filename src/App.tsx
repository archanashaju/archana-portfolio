import { useEffect, useRef, useState } from "react";
import { AboutPage, ContactPage, WorksPage } from "./pages";
import { FlexshftPage } from "./FlexshftPage";
import { projects, type Project } from "./projects";

const nav = ["About", "Works", "Contact"];
type Route = "home" | "about" | "works" | "lab" | "contact" | "flexshft";

function routeFromPath(): Route {
  const path = window.location.pathname.replace(/^\/|\/$/g, "");
  if (path === "about" || path === "works" || path === "contact") return path;
  if (path === "lab") return "works";
  if (path === "flexshft" || path === "project/flexshft") return "flexshft";
  return "home";
}

function wrapDistance(index: number, current: number) {
  const half = projects.length / 2;
  return (
    ((((index - current + half) % projects.length) + projects.length) % projects.length) - half
  );
}

function EmblemFTG() {
  return (
    <div className="emblem-ftg-box">
      <img src="/projects/ftg-logo.png" alt="FTG" className="emblem-ftg-img" draggable={false} />
    </div>
  );
}

function EmblemFlexshft() {
  return (
    <div className="emblem-flexshft-box">
      <img
        src="/projects/flexshft-mark.png?v=2"
        alt="FLEXSHFT"
        className="emblem-flexshft-img"
        draggable={false}
      />
    </div>
  );
}

function EmblemHotcoin() {
  return (
    <div className="emblem-hotcoin-box">
      <svg
        viewBox="0 0 100 100"
        className="emblem-hotcoin-svg"
        fill="none"
        stroke="#ffffff"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 76 40 L 76 25 Q 76 22 72 22 L 28 22 Q 22 22 22 28 L 22 72 Q 22 78 28 78 L 72 78 Q 76 78 76 75 L 76 60" />
        <line x1="49" y1="9" x2="49" y2="34" />
        <line x1="49" y1="66" x2="49" y2="91" />
      </svg>
    </div>
  );
}

function EmblemTinyBits() {
  return (
    <div className="emblem-tinybits-box">
      <svg
        viewBox="0 0 100 100"
        className="emblem-tinybits-svg"
        fill="none"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M 50 27 C 48 24 38 17 38 11 C 38 6 43 4.5 47 7 C 49 8.5 50 10 50 10 C 50 10 51 8.5 53 7 C 57 4.5 62 6 62 11 C 62 17 52 24 50 27 Z"
          fill="#ffffff"
          stroke="none"
        />
        <path d="M 50 64 C 44 48 34 32 26 34 C 18 36 18 56 32 66 C 40 71 48 71 50 71" />
        <path d="M 50 64 C 56 48 66 32 74 34 C 82 36 82 56 68 66 C 60 71 52 71 50 71" />
        <line x1="50" y1="71" x2="50" y2="88" strokeWidth="7.5" />
      </svg>
    </div>
  );
}

function DieEmblem({ slug, monogram }: { slug: string; monogram: string }) {
  if (slug === "tiny-bits" || slug === "vesyl" || monogram === "TB") return <EmblemTinyBits />;
  if (slug === "hotcoin" || slug === "hamilton-ai" || monogram === "HC") return <EmblemHotcoin />;
  if (slug === "flexshft" || slug === "pny" || monogram === "FS") return <EmblemFlexshft />;
  if (slug === "ftg-connect" || slug === "abcau" || monogram === "FT") return <EmblemFTG />;
  return (
    <div className="die-emblem-default">
      <span className="die-monogram">{monogram}</span>
    </div>
  );
}

type CursorItem = {
  id: string;
  name: string;
  baseX: number;
  baseY: number;
  color: string;
  bgColor: string;
  textColor: string;
  phase: number;
};

const PEER_CURSORS: CursorItem[] = [
  {
    id: "spare-otter",
    name: "spare otter",
    baseX: 23,
    baseY: 4.8,
    color: "#e2d88d",
    bgColor: "#e2d88d",
    textColor: "#1a1a1a",
    phase: 0.2,
  },
  {
    id: "ruth",
    name: "ruth",
    baseX: 27.8,
    baseY: 5.6,
    color: "#7a96b8",
    bgColor: "#7a96b8",
    textColor: "#ffffff",
    phase: 1.1,
  },
  {
    id: "bright-otter",
    name: "bright otter",
    baseX: 47.8,
    baseY: 37.5,
    color: "#ea9696",
    bgColor: "#ea9696",
    textColor: "#1a1a1a",
    phase: 2.4,
  },
  {
    id: "quiet-heron",
    name: "quiet heron",
    baseX: 68.5,
    baseY: 15.2,
    color: "#e5c464",
    bgColor: "#e5c464",
    textColor: "#1a1a1a",
    phase: 3.7,
  },
  {
    id: "quiet-otter",
    name: "quiet otter",
    baseX: 88.5,
    baseY: 4.5,
    color: "#8da9df",
    bgColor: "#8da9df",
    textColor: "#1a1a1a",
    phase: 4.9,
  },
];

function LiveCursors() {
  const [offsets, setOffsets] = useState<{ [id: string]: { x: number; y: number } }>({});

  useEffect(() => {
    let frameId = 0;
    const update = (time: number) => {
      const t = time * 0.001;
      const next: { [id: string]: { x: number; y: number } } = {};
      PEER_CURSORS.forEach((c) => {
        next[c.id] = {
          x: Math.sin(t * 0.7 + c.phase) * 6 + Math.cos(t * 0.35 + c.phase * 2) * 3,
          y: Math.cos(t * 0.6 + c.phase * 1.5) * 5 + Math.sin(t * 0.28 + c.phase) * 2.5,
        };
      });
      setOffsets(next);
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="live-cursors-layer" aria-hidden="true">
      {PEER_CURSORS.map((c) => {
        const off = offsets[c.id] || { x: 0, y: 0 };
        return (
          <div
            key={c.id}
            className="peer-cursor"
            style={{
              left: `calc(${c.baseX}vw + ${off.x}px)`,
              top: `calc(${c.baseY}vh + ${off.y}px)`,
            }}
          >
            <svg className="peer-arrow" width="14" height="14" viewBox="0 0 24 24" fill={c.color}>
              <path
                d="M3 2 L19 12 L11.5 13.8 L8.2 21 L3 2 Z"
                stroke="#111"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="peer-pill"
              style={{
                backgroundColor: c.bgColor,
                color: c.textColor,
              }}
            >
              {c.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Icon({ name }: { name: "sun" | "moon" | "bell" | "search" | "arrow" }) {
  if (name === "sun")
    return (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 1.8v2M12 20.2v2M1.8 12h2M20.2 12h2M4.8 4.8l1.4 1.4M17.8 17.8l1.4 1.4M19.2 4.8l-1.4 1.4M6.2 17.8l-1.4 1.4" />
      </svg>
    );
  if (name === "moon")
    return (
      <svg viewBox="0 0 24 24">
        <path d="M20.7 14.2A8.8 8.8 0 0 1 9.8 3.3 9 9 0 1 0 20.7 14.2Z" />
      </svg>
    );
  if (name === "bell")
    return (
      <svg viewBox="0 0 24 24">
        <path d="M5.2 10a6.8 6.8 0 0 1 13.6 0l.7 5.5a1.8 1.8 0 0 1-1.8 2H6.3a1.8 1.8 0 0 1-1.8-2Z" />
        <path d="M15.5 17.5a3.5 3.5 0 0 1-7 0" />
      </svg>
    );
  if (name === "search")
    return (
      <svg viewBox="0 0 24 24">
        <circle cx="10.5" cy="10.5" r="6.7" />
        <path d="m15.5 15.5 5 5" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24">
      <path d="M5 12h13M14 7l5 5-5 5" />
    </svg>
  );
}

function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLSpanElement>(null);
  const dot = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let velocityX = 0;
    let velocityY = 0;
    let scale = 1;
    let pressed = false;
    let frame = 0;

    const render = () => {
      velocityX = (velocityX + (targetX - currentX) * 0.14) * 0.64;
      velocityY = (velocityY + (targetY - currentY) * 0.14) * 0.64;
      currentX += velocityX;
      currentY += velocityY;
      scale += ((pressed ? 0.82 : 1) - scale) * 0.18;
      if (ring.current)
        ring.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${scale})`;
      frame = requestAnimationFrame(render);
    };
    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (dot.current)
        dot.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      const target = event.target as HTMLElement;
      const interactive = target.closest("a, button, input");
      cursor.current?.classList.toggle("is-link", Boolean(interactive));
      cursor.current?.classList.toggle(
        "is-stage",
        Boolean(target.closest(".wheel-stage")) && !interactive,
      );
      cursor.current?.classList.add("is-visible");
    };
    const onDown = () => {
      pressed = true;
      cursor.current?.classList.add("is-down");
    };
    const onUp = () => {
      pressed = false;
      cursor.current?.classList.remove("is-down");
    };
    const onLeave = () => cursor.current?.classList.remove("is-visible");

    frame = requestAnimationFrame(render);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursor} aria-hidden="true">
      <span className="cursor-ring" ref={ring}>
        <i className="cursor-drag">DRAG</i>
        <i className="cursor-view">VIEW</i>
      </span>
      <span className="cursor-dot" ref={dot} />
    </div>
  );
}

const SLOTS = 9;
const B_STEP = (2 * Math.PI) / SLOTS;

export default function App() {
  const [route, setRoute] = useState<Route>(routeFromPath);
  const [position, setPosition] = useState(0);
  const [motionVelocity, setMotionVelocity] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [modal, setModal] = useState<"search" | "news" | "menu" | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const positionRef = useRef(0);
  const prevPosRef = useRef(0);
  const targetRef = useRef(0);
  const residualYRef = useRef(0);
  const snapVelRef = useRef(0);
  const leanRef = useRef(0);
  const lastInputRef = useRef(performance.now());
  const drag = useRef<{
    startY: number;
    startPos: number;
    lastY: number;
    lastTime: number;
    velocity: number;
  } | null>(null);

  const activeIndex =
    ((Math.round(position / B_STEP) % projects.length) + projects.length) % projects.length;
  const project = projects[activeIndex];

  const navigate = (next: Route) => {
    const path = next === "home" ? "/" : `/${next}`;
    window.history.pushState({}, "", path);
    setRoute(next);
    setModal(null);
  };

  const move = (direction: number) => {
    targetRef.current = (Math.round(targetRef.current / B_STEP) + direction) * B_STEP;
    lastInputRef.current = performance.now();
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const onPopState = () => setRoute(routeFromPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (!soundEnabled) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.024);
      gain.gain.setValueAtTime(0.028, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.024);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.024);
    } catch {
      // AudioContext restriction before user gesture
    }
  }, [activeIndex, soundEnabled]);

  useEffect(() => {
    let frame = 0;
    let previous = performance.now();

    const animate = (now: number) => {
      const deltaMs = now - previous;
      const delta = Math.min(2.5, Math.max(0.2, deltaMs / 16.667));
      previous = now;

      // Smoothly inject residual wheel momentum (C.inject = 0.28)
      if (Math.abs(residualYRef.current) > 0.00005) {
        const inj = residualYRef.current * (1 - Math.pow(1 - 0.28, delta));
        targetRef.current += inj;
        residualYRef.current -= inj;
      } else {
        residualYRef.current = 0;
      }

      const timeSinceInput = now - lastInputRef.current;
      const isIdle = !drag.current && Math.abs(residualYRef.current) < 0.04 && timeSinceInput > 75;

      if (isIdle) {
        // Carter's critically damped landing spring (C.land = 0.24, C.momentum = 0.6)
        const snappedSlot = Math.round(targetRef.current / B_STEP);
        const snapTarget = snappedSlot * B_STEP;
        const springK = 0.24;
        const dist = positionRef.current - snapTarget;
        snapVelRef.current +=
          (-springK * springK * dist - 2 * springK * snapVelRef.current) * delta;
        snapVelRef.current = Math.max(-0.09, Math.min(0.09, snapVelRef.current));
        positionRef.current += snapVelRef.current * delta;

        if (Math.abs(dist) < 0.0004 && Math.abs(snapVelRef.current) < 0.0001) {
          positionRef.current = snapTarget;
          snapVelRef.current = 0;
        }
        targetRef.current = snapTarget;
      } else if (!drag.current) {
        // Continuous smooth following (C.damp = 0.08, C.vmax = 0.09)
        const disp = targetRef.current - positionRef.current;
        const follow = 1 - Math.pow(1 - 0.08, delta);
        const step = Math.max(-0.09 * delta, Math.min(0.09 * delta, disp * follow));
        positionRef.current += step;
        snapVelRef.current = step / delta;
      }

      // Inertia lean (sway)
      const instVel = (positionRef.current - prevPosRef.current) / delta;
      prevPosRef.current = positionRef.current;
      leanRef.current += (instVel - leanRef.current) * (1 - Math.pow(1 - 0.16, delta));

      setPosition(positionRef.current);
      setMotionVelocity(leanRef.current);

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setModal("search");
      } else if (event.key === "Escape") setModal(null);
      else if (!modal && ["ArrowDown", "ArrowRight"].includes(event.key)) move(1);
      else if (!modal && ["ArrowUp", "ArrowLeft"].includes(event.key)) move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  const onWheel = (event: React.WheelEvent) => {
    if (event.cancelable) {
      event.preventDefault();
    }
    const raw =
      event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1);
    if (Math.abs(raw) < 0.1) return;
    const gain = Math.sign(raw) * Math.min(1.2, Math.abs(raw) * 0.0018);
    residualYRef.current += gain * B_STEP;
    lastInputRef.current = performance.now();
  };

  const onPointerDown = (event: React.PointerEvent) => {
    if ((event.target as HTMLElement).closest("a, button")) return;
    const now = performance.now();
    drag.current = {
      startY: event.clientY,
      startPos: positionRef.current,
      lastY: event.clientY,
      lastTime: now,
      velocity: 0,
    };
    lastInputRef.current = now;
    targetRef.current = positionRef.current;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!drag.current) return;
    const now = performance.now();
    const elapsed = Math.max(8, now - drag.current.lastTime);
    const deltaY = drag.current.lastY - event.clientY;
    const step = (deltaY / 140) * B_STEP;
    targetRef.current += step;
    positionRef.current += step;
    drag.current.velocity = (step / elapsed) * 16.667;
    drag.current.lastY = event.clientY;
    drag.current.lastTime = now;
    lastInputRef.current = now;
    setPosition(positionRef.current);
  };

  const endDrag = () => {
    if (!drag.current) return;
    const flick = drag.current.velocity * 0.6;
    targetRef.current = positionRef.current + flick;
    lastInputRef.current = performance.now();
    drag.current = null;
  };

  const onCardPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const card = event.currentTarget;
    if (!card.classList.contains("is-active")) return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const normalizedX = x * 2 - 1;
    const normalizedY = y * 2 - 1;
    card.style.setProperty("--hover-x", `${normalizedX * 6}px`);
    card.style.setProperty("--hover-y", `${normalizedY * 5}px`);
    card.style.setProperty("--image-x", `${normalizedX * -3.9}px`);
    card.style.setProperty("--image-y", `${normalizedY * -3.25}px`);
    card.style.setProperty("--tilt-x", `${normalizedY * -3.2}deg`);
    card.style.setProperty("--tilt-y", `${normalizedX * 4.2}deg`);
    card.style.setProperty("--pointer-x", `${x * 100}%`);
    card.style.setProperty("--pointer-y", `${y * 100}%`);
    card.classList.add("is-hovered");
  };

  const onCardPointerLeave = (event: React.PointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.style.setProperty("--hover-x", "0px");
    card.style.setProperty("--hover-y", "0px");
    card.style.setProperty("--image-x", "0px");
    card.style.setProperty("--image-y", "0px");
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.classList.remove("is-hovered");
  };

  return (
    <div className={`site-shell ${route === "home" ? "is-home" : "is-page"}`}>
      <svg
        width="0"
        height="0"
        style={{ position: "absolute", pointerEvents: "none" }}
        aria-hidden="true"
      >
        <defs>
          <clipPath id="curved-screen" clipPathUnits="objectBoundingBox">
            <path d="M 0.02,0.06 Q 0.5,-0.015 0.98,0.06 Q 1,0.065 1,0.09 L 1,0.91 Q 1,0.935 0.98,0.94 Q 0.5,1.015 0.02,0.94 Q 0,0.935 0,0.91 L 0,0.09 Q 0,0.065 0.02,0.06 Z" />
          </clipPath>
        </defs>
      </svg>
      <CustomCursor />
      <header className="header">
        <div className="header-bar">
          <a
            className="brand"
            href="/"
            aria-label="Carter Ogunsola home"
            onClick={(event) => {
              event.preventDefault();
              navigate("home");
            }}
          >
            <span className="brand-pill brand-c">c</span>
            <span className="brand-pill brand-o">o</span>
            {route !== "home" && (
              <span className="brand-crumb">
                ::{" "}
                {route === "works" || route === "lab"
                  ? "Works"
                  : route === "flexshft"
                    ? "FLEXSHFT"
                    : route}
              </span>
            )}
          </a>
          <div className="desktop-nav">
            <nav aria-label="Primary navigation">
              {nav.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={(event) => {
                    const next = item.toLowerCase();
                    if (
                      next === "about" ||
                      next === "works" ||
                      next === "lab" ||
                      next === "contact"
                    ) {
                      event.preventDefault();
                      navigate(next as Route);
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
            <button className="command-button" onClick={() => setModal("search")}>
              ⌘K
            </button>
          </div>
          <div className="header-actions">
            <button
              className="icon-button sound-button"
              aria-label="Sound settings"
              onClick={() => setSoundEnabled(!soundEnabled)}
            >
              <Icon name="bell" />
            </button>
            <button
              className="icon-button mobile-only"
              aria-label="Search"
              onClick={() => setModal("search")}
            >
              <Icon name="search" />
            </button>
            <div className="theme-toggle" aria-label="Theme selection">
              <button
                className={theme === "light" ? "selected" : ""}
                aria-label="Light theme"
                onClick={() => setTheme("light")}
              >
                <Icon name="sun" />
              </button>
              <button
                className={theme === "dark" ? "selected" : ""}
                aria-label="Dark theme"
                onClick={() => setTheme("dark")}
              >
                <Icon name="moon" />
              </button>
            </div>
            <button
              className="menu-button mobile-only"
              aria-label="Open menu"
              onClick={() => setModal("menu")}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {route === "home" && (
        <main
          className="wheel-stage"
          onWheel={onWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <LiveCursors />
          <div className="proof-wheel" aria-hidden="true">
            {projects.map((item, index) => {
              const currentSlot = position / B_STEP;
              const distance = wrapDistance(index, currentSlot);
              const angle = distance * B_STEP;
              const cosA = Math.cos(angle);
              const sinA = Math.sin(angle);
              const focus = Math.max(0, cosA);
              const absDist = Math.abs(distance);
              const isVisible = absDist < 1.75;
              const lean = Math.max(-12, Math.min(12, motionVelocity * 40));

              // Active card center at 20vw, 50vh.
              // Corner cards pull back to ~3vw, 14vh (top-left) and 3vw, 86vh (bottom-left)
              // This guarantees clean vertical clearance without corner overlap.
              const posX = 20 - (1 - cosA) * 72;
              const posY = 50 - sinA * 56;
              const rotZ = -distance * 28 + lean;
              const scale = Math.max(0.65, 1.05 - absDist * 0.32);
              const opacity = Math.max(0, 1 - absDist * 0.45);
              const isActive = index === activeIndex;
              const zIndex = isActive ? 50 : Math.max(1, Math.round(20 - absDist * 8));

              return (
                <a
                  className={`proof-card ${isActive ? "is-active" : ""}`}
                  href={item.href}
                  key={item.slug}
                  tabIndex={isActive ? 0 : -1}
                  target={item.slug === "flexshft" ? undefined : "_blank"}
                  rel={item.slug === "flexshft" ? undefined : "noreferrer"}
                  onClick={(event) => {
                    if (item.slug === "flexshft") {
                      event.preventDefault();
                      navigate("flexshft");
                    }
                  }}
                  style={
                    {
                      "--x": `${posX}vw`,
                      "--y": `${posY}vh`,
                      "--rot-z": `${rotZ}deg`,
                      "--scale": scale,
                      "--opacity": opacity,
                      "--focus": focus,
                      zIndex,
                      pointerEvents: isActive ? "auto" : "none",
                      visibility: isVisible ? "visible" : "hidden",
                    } as React.CSSProperties
                  }
                  onPointerMove={onCardPointerMove}
                  onPointerLeave={onCardPointerLeave}
                >
                  <img src={`/projects/${item.slug}.jpg`} alt="" draggable={false} />
                </a>
              );
            })}
          </div>

          <div className="project-center" key={project.slug}>
            <p className="project-number">
              N°{String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </p>
            <h1 className="project-title">{project.name}</h1>
            <div className="project-chip">
              <span>{project.collab.toUpperCase()}</span>
              <span>{project.year}</span>
            </div>
            <a
              className="project-view-btn"
              href={project.href}
              target={project.slug === "flexshft" ? undefined : "_blank"}
              rel={project.slug === "flexshft" ? undefined : "noreferrer"}
              onClick={(event) => {
                if (project.slug === "flexshft") {
                  event.preventDefault();
                  navigate("flexshft");
                }
              }}
            >
              View project
            </a>
          </div>

          <div className="die-wheel" aria-hidden="true">
            {projects.map((item, index) => {
              const currentSlot = position / B_STEP;
              const distance = wrapDistance(index, currentSlot);
              const angle = distance * B_STEP;
              const cosA = Math.cos(angle);
              const sinA = Math.sin(angle);
              const focus = Math.max(0, cosA);
              const absDist = Math.abs(distance);
              const isVisible = absDist < 1.75;
              const lean = Math.max(-12, Math.min(12, motionVelocity * 40));

              // Active die card center at 72vw, 50vh.
              // Corner cards pull back to ~89vw, 14vh (top-right) and 89vw, 86vh (bottom-right)
              const posX = 72 + (1 - cosA) * 72;
              const posY = 50 - sinA * 56;
              const rotZ = distance * 24 - lean;
              const scale = Math.max(0.65, 1.02 - absDist * 0.3);
              const opacity = Math.max(0, 1 - absDist * 0.45);
              const isActive = index === activeIndex;
              const zIndex = isActive ? 50 : Math.max(1, Math.round(20 - absDist * 8));

              return (
                <div
                  className={`die-card ${isActive ? "is-active" : ""}`}
                  key={item.slug}
                  style={
                    {
                      "--x": `${posX}vw`,
                      "--y": `${posY}vh`,
                      "--rot-z": `${rotZ}deg`,
                      "--scale": scale,
                      "--opacity": opacity,
                      "--focus": focus,
                      zIndex,
                      pointerEvents: isActive ? "auto" : "none",
                      visibility: isVisible ? "visible" : "hidden",
                    } as React.CSSProperties
                  }
                  onPointerMove={onCardPointerMove}
                  onPointerLeave={onCardPointerLeave}
                >
                  <div className="die-face">
                    <DieEmblem slug={item.slug} monogram={item.monogram} />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      )}
      {route === "about" && <AboutPage />}
      {(route === "works" || route === "lab") && (
        <WorksPage onNavigate={(r) => navigate(r as Route)} />
      )}
      {route === "contact" && <ContactPage />}
      {route === "flexshft" && (
        <FlexshftPage onBack={() => navigate("home")} onNavigate={(r) => navigate(r as Route)} />
      )}

      {modal && (
        <div
          className="overlay"
          role="presentation"
          onMouseDown={(event) => event.target === event.currentTarget && setModal(null)}
        >
          <section className={`modal modal-${modal}`} role="dialog" aria-modal="true">
            <button className="modal-close" aria-label="Close" onClick={() => setModal(null)}>
              ×
            </button>
            {modal === "search" && (() => {
              const query = searchQuery.trim().toLowerCase();
              const filteredPages = nav.filter(
                (item) => !query || item.toLowerCase().includes(query),
              );
              const filteredProjects = projects.filter(
                (item) =>
                  !query ||
                  item.name.toLowerCase().includes(query) ||
                  item.collab.toLowerCase().includes(query),
              );
              const showFlexshftCaseStudy = !query || "flexshft case study".includes(query);

              return (
                <>
                  <div className="search-line">
                    <Icon name="search" />
                    <input
                      autoFocus
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search pages and projects..."
                    />
                  </div>
                  {filteredPages.length > 0 && (
                    <>
                      <p className="modal-label">Pages</p>
                      {filteredPages.map((item) => (
                        <a
                          className="result"
                          href={`/${item.toLowerCase()}`}
                          key={item}
                          onClick={(event) => {
                            const next = item.toLowerCase();
                            if (
                              next === "about" ||
                              next === "works" ||
                              next === "lab" ||
                              next === "contact"
                            ) {
                              event.preventDefault();
                              navigate(next === "lab" ? "works" : (next as Route));
                              setSearchQuery("");
                            } else setModal(null);
                          }}
                        >
                          <span>{item}</span>
                          <small>/{item.toLowerCase()}</small>
                        </a>
                      ))}
                    </>
                  )}
                  {showFlexshftCaseStudy && (
                    <a
                      className="result"
                      href="/flexshft"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate("flexshft");
                        setModal(null);
                        setSearchQuery("");
                      }}
                    >
                      <span>FLEXSHFT</span>
                      <small>/case-study</small>
                    </a>
                  )}
                  {filteredProjects.length > 0 && (
                    <>
                      <p className="modal-label">Projects</p>
                      {filteredProjects.map((item) => (
                        <a
                          className="result"
                          href={item.href}
                          key={item.slug}
                          target={item.slug === "flexshft" ? undefined : "_blank"}
                          rel={item.slug === "flexshft" ? undefined : "noreferrer"}
                          onClick={(event) => {
                            if (item.slug === "flexshft") {
                              event.preventDefault();
                              navigate("flexshft");
                            }
                            setModal(null);
                            setSearchQuery("");
                          }}
                        >
                          <span>{item.name}</span>
                          <small>{item.collab.toUpperCase()}</small>
                        </a>
                      ))}
                    </>
                  )}
                  {filteredPages.length === 0 &&
                    filteredProjects.length === 0 &&
                    !showFlexshftCaseStudy && (
                      <p className="modal-label" style={{ padding: "18px 0", textAlign: "center" }}>
                        No results found for "{searchQuery}"
                      </p>
                    )}
                </>
              );
            })()}
            {modal === "news" && (
              <>
                <p className="modal-label">What's new</p>
                <h2>FLEXSHFT</h2>
                <p className="news-copy">
                  Inner case study: high-velocity shift staffing ecosystem.
                </p>
                <div className="news-meta">
                  <span>Case Study</span>
                  <span>New</span>
                </div>
                <h2>The new site is live</h2>
                <p className="news-copy">
                  Rebuilt from scratch. The press out front is what the shop makes.
                </p>
                <div className="news-meta">
                  <span>Site</span>
                  <span>Sep 29</span>
                </div>
                <h2>Vocal Orb</h2>
                <p className="news-copy">A small black hole that listens.</p>
                <div className="news-meta">
                  <span>Works</span>
                  <span>Oct 2</span>
                </div>
              </>
            )}
            {modal === "menu" && (
              <nav className="mobile-menu">
                {nav.map((item, index) => (
                  <a
                    href={`/${item.toLowerCase()}`}
                    key={item}
                    onClick={(event) => {
                      const next = item.toLowerCase();
                      if (
                        next === "about" ||
                        next === "works" ||
                        next === "lab" ||
                        next === "contact"
                      ) {
                        event.preventDefault();
                        navigate(next === "lab" ? "works" : (next as Route));
                      } else setModal(null);
                    }}
                  >
                    <small>0{index + 1}</small>
                    {item}
                  </a>
                ))}
              </nav>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
