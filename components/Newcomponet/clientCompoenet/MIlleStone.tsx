

import { useEffect, useRef, useState, useCallback } from "react";

const stats = [
  {
    value: 8,
    suffix: "+",
    label: "Years of Experience",
    sublabel: "Since 2016",
    color: "#6ee7f7",
    glow: "#06b6d4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: 550,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "Across industries",
    color: "#a78bfa",
    glow: "#7c3aed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    value: 400,
    suffix: "+",
    label: "Happy Clients",
    sublabel: "98% satisfaction",
    color: "#f9a8d4",
    glow: "#ec4899",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: 30,
    suffix: "+",
    label: "Countries Served",
    sublabel: "Global reach",
    color: "#6ee7b7",
    glow: "#10b981",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

function useCountUp(target:any, duration = 2200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp:any) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function ParticleCanvas({ color }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = (canvas.width = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);
    const particles = Array.from({ length: 20 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      o: Math.random() * 0.5 + 0.1,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color + Math.floor(p.o * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [color]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

function StatCard({ stat, index, inView }) {
  const count = useCountUp(stat.value, 2000 + index * 150, inView);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const progress = stat.value > 0 ? count / stat.value : 0;
  const circumference = 2 * Math.PI * 16;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative group"
      style={{
        animation: inView
          ? `cardEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s both`
          : "none",
      }}
    >
      {/* Outer glow ring on hover */}
      <div
        className="absolute -inset-px rounded-2xl transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${stat.color}40, transparent 60%)`,
          filter: "blur(1px)",
        }}
      />
      {/* Border */}
      <div
        className="absolute -inset-px rounded-2xl"
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${stat.color}70, transparent 50%, ${stat.glow}40)`
            : `linear-gradient(135deg, #ffffff12, transparent 60%)`,
          transition: "background 0.5s ease",
        }}
      />

      {/* Card body */}
      <div
        className="relative rounded-2xl overflow-hidden p-7 h-full"
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${stat.glow}22, #0d0d1a 60%)`
            : "linear-gradient(135deg, #0e0e1c, #0a0a14)",
          transition: "background 0.5s ease",
        }}
      >
        <ParticleCanvas color={stat.color} />

        {/* Mouse follow glow */}
        <div
          className="absolute w-40 h-40 rounded-full pointer-events-none"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${stat.color}28, transparent 70%)`,
            opacity: hovered ? 1 : 0,
            filter: "blur(16px)",
            transition: "opacity 0.3s ease",
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon + progress ring row */}
          <div className="flex items-center justify-between mb-6">
            <div
              className="p-2.5 rounded-xl"
              style={{
                color: stat.color,
                background: `${stat.color}18`,
                boxShadow: hovered ? `0 0 24px ${stat.color}35` : "none",
                transform: hovered ? "scale(1.12) rotate(-6deg)" : "scale(1)",
                transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            >
              {stat.icon}
            </div>
            {/* Circular progress */}
            {/* <div className="relative w-11 h-11">
              <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
                <circle cx="20" cy="20" r="16" fill="none" stroke={`${stat.color}20`} strokeWidth="2.5" />
                <circle
                  cx="20" cy="20" r="16"
                  fill="none"
                  stroke={stat.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - progress * 0.78)}
                  style={{
                    transition: "stroke-dashoffset 0.08s linear",
                    filter: hovered ? `drop-shadow(0 0 4px ${stat.color})` : "none",
                  }}
                />
              </svg>
              <span
                className="absolute inset-0 flex items-center justify-center text-[9px] font-bold"
                style={{ color: stat.color }}
              >
                {Math.floor(progress * 100)}%
              </span>
            </div> */}
          </div>

          {/* Number */}
          <div className="flex justify-center">
           <div className="flex items-baseline gap-1 mb-1.5">
             <span
              className="font-black text-center leading-none tracking-tight"
              style={{
                // fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.8rem, 5vw, 3.6rem)",
                color: "#fff",
                textShadow: hovered ? `0 0 50px ${stat.color}70` : "none",
                transition: "text-shadow 0.35s ease",
              }}
            >
              {count.toLocaleString()}
            </span>
            <span
              className="text-3xl font-black"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: stat.color,
                filter: hovered ? `drop-shadow(0 0 10px ${stat.color})` : "none",
                transition: "filter 0.35s ease",
              }}
            >
              {stat.suffix}
            </span>
           </div>
          </div>

          {/* Label */}
          <p className="font-semibold text-white/80 text-base mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {stat.label}
          </p>
          {/* <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: `${stat.color}80` }}>
            {stat.sublabel}
          </p> */}

          {/* Progress bar */}
          <div className="mt-5 h-[3px] rounded-full overflow-hidden" style={{ background: `${stat.color}18` }}>
            <div
              className="h-full rounded-full"
              style={{
                width: inView ? "100%" : "0%",
                background: `linear-gradient(90deg, ${stat.color}, ${stat.glow})`,
                transition: `width 2.2s cubic-bezier(0.16,1,0.3,1) ${index * 0.2 + 0.3}s`,
                boxShadow: `0 0 12px ${stat.color}90`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MIlleStone() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes cardEntrance {
          0%   { opacity: 0; transform: translateY(50px) scale(0.92); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0)    scale(1);    filter: blur(0); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.25; }
          50%       { opacity: 0.65; }
        }
        @keyframes scanLine {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(2000%); opacity: 0; }
        }
        @keyframes titleIn {
          0%   { opacity: 0; transform: translateY(24px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        @keyframes badgePop {
          0%   { opacity: 0; transform: scale(0.7); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <section
        ref={ref}
        className="relative py-5 px-4 overflow-hidden "
        style={{ background: "#06060f", fontFamily: "'DM Sans', sans-serif", minHeight: "420px" }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.055) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99,102,241,0.055) 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
          }}
        />

        {/* Scan line */}
        <div
          className="absolute left-0 right-0 h-20 pointer-events-none"
          style={{
            background: "linear-gradient(transparent, rgba(130,120,255,0.04), transparent)",
            animation: "scanLine 9s linear infinite",
          }}
        />

        {/* Ambient glows */}
        {[
          { c: "#6366f1", x: "12%",  y: "50%", s: "520px", d: "0s"  },
          { c: "#8b5cf6", x: "88%",  y: "45%", s: "420px", d: "3s"  },
          { c: "#06b6d4", x: "50%",  y: "85%", s: "320px", d: "6s"  },
        ].map((g, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: g.x, top: g.y,
              width: g.s, height: g.s,
              transform: "translate(-50%,-50%)",
              background: `radial-gradient(circle, ${g.c}1a, transparent 70%)`,
              filter: "blur(50px)",
              animation: `pulseGlow 7s ease-in-out ${g.d} infinite`,
            }}
          />
        ))}

        {/* Decorative rotating rings */}
        {[
          { s: 320, x: -80,  y: -80,  c: "#6366f118", spd: "22s" },
          { s: 220, x: "82%", y: -50, c: "#8b5cf218", spd: "16s" },
        ].map((r, i) => (
          <div
            key={i}
            className="absolute rounded-full border pointer-events-none"
            style={{
              width: r.s, height: r.s,
              left: r.x, top: r.y,
              borderColor: r.c,
              animation: `rotateSlow ${r.spd} linear infinite`,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative max-w-6xl mx-auto py-8">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 cursor-pointer">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} inView={inView} />
            ))}
          </div>

          {/* Trusted strip */}
          <div
            className="mt-4 flex items-center justify-center gap-4"
            style={{ animation: inView ? "titleIn 0.6s ease 0.75s both" : "none" }}
          >
            <div className="h-px w-24" style={{ background: "linear-gradient(90deg, transparent, #ffffff18)" }} />
            <span className="text-white/90 text-sm tracking-widest uppercase font-medium">Trusted Worldwide</span>
            <div className="h-px w-24" style={{ background: "linear-gradient(90deg, #ffffff18, transparent)" }} />
          </div>
        </div>
      </section>
    </>
  );
}
