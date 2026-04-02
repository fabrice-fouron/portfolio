import { useState, useEffect, useRef } from "react";
import resumeEn from "./assets/resume/FABRICE_RESUME_EN.pdf";
import resumeFr from "./assets/resume/FABRICE_RESUME_FR.pdf";

// ─── DATA ────────────────────────────────────────────────────────────────────

const DATA = {
  name: "Fabrice Fouron",
  title: "Full-Stack Developer",
  tagline: "Building things for the web.",
  email: "fouronfp05@gmail.com",
  linkedin: "https://linkedin.com/in/fabrice-fouron",
  resume: {
    en: resumeEn,
    fr: resumeFr,
  },
  about:
    "I'm a software developer passionate about cloud infrastructure, full-stack web applications, and great developer experience. Currently seeking new opportunities.",

  education: [
    {
      school: "Wentworth Institute of Technology",
      degree: "B.Sc. Computer Science",
      period: "2022 – 2025",
      location: "Boston, Massachusetts (USA)",
      notes: "",
    },
  ],

  experience: [
    {
      company: "Piantedosi Baking Company",
      role: "Information Technology Intern",
      period: "May 2024 - December 2024",
      location: "Malden, Massachusetts (USA)",
      stack: ["Python", "Flask", "MySQL"],
      bullets: [
        "Built X feature that improved Y by Z%.",
        "Migrated legacy service to serverless architecture.",
      ],
    },
    {
      company: "Sevita Health",
      role: "Application Programming Analyst Intern",
      period: "January 2025 - May 2025",
      location: "Boston, Massachusetts (USA)",
      stack: ["Salesforce","Visualforce", "Apex", "Javascript", "SOQL"],
      bullets: [
        "Automated infrastructure provisioning with Terraform.",
        "Reduced deployment time by 40%.",
      ],
    },
    {
      company: "HOPES",
      role: "Application Programming Analyst Intern",
      period: "September 2024 - Now",
      location: "Remote",
      stack: ["React", "Node.js", "AWS"],
      bullets: [
        "Implement numerous features course scheduling, calendar, usage tracking, and more",
        "Document all major features and changes made to the platform to accomodate and improve user experience ",
      ],
    },
  ],

  projects: [
    {
      title: "Project 1",
      description:
        "A full-stack web app that does something cool. Built with React, Node.js, and deployed on AWS.",
      stack: ["React", "Node.js", "PostgreSQL", "AWS"],
      github: "https://github.com/you/project-alpha",
      live: null,
    },
    {
      title: "Project 2",
      description:
        "An open-source CLI tool that automates something tedious for developers.",
      stack: ["Python", "Docker"],
      github: "https://github.com/you/project-beta",
      live: null,
    },
    {
      title: "Project 3",
      description: "A real-time dashboard built with WebSockets and React.",
      stack: ["React", "Socket.io", "Redis"],
      github: "https://github.com/you/project-gamma",
      live: null,
    },
  ],
};

// ─── ICONS ───────────────────────────────────────────────────────────────────

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const IconDocument = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function NavBar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["about", "experience", "projects", "education", "contact"];

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Top Navbar */}
      {/* <nav
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800" : ""
        }`}
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <span className="font-mono text-amber-400 font-bold tracking-widest text-sm uppercase">
            {DATA.name.split(" ")[0]}
          </span>
        </div>
      </nav> */}

      {/* Desktop Right Pane Navbar */}
      <nav className="hidden lg:flex fixed right-0 top-0 bottom-0 w-84 z-50 flex-col justify-center p-6 bg-zinc-950/80 backdrop-blur-sm ">
        <ul className="flex flex-col gap-12">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l}`}
                onClick={(e) => handleClick(e, l)}
                className={`flex items-center gap-4 transition-all group ${
                  active === l
                    ? "text-amber-400"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <div className={`h-px transition-all bg-current ${active === l ? "w-8" : "w-4 group-hover:w-8"}`} />
                <span className="font-mono text-lg uppercase tracking-widest">{l}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function Tag({ label }) {
  return (
    <span className="px-2 py-0.5 rounded font-mono text-xs bg-zinc-800 text-amber-300 border border-zinc-700">
      {label}
    </span>
  );
}

function Section({ id, label, children }) {
  return (
    <section id={id} className="py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-amber-400 text-sm">##</span>
          <h2 className="font-mono text-2xl font-bold text-white uppercase tracking-widest">
            {label}
          </h2>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>
        {children}
      </div>
    </section>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto w-full pt-24">
        {/* Decorative grid */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <p className="font-mono text-amber-400 text-md mb-4 tracking-widest">
          Hi, my name is
        </p>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight mb-4">
          {DATA.name}
        </h1>
        <h2 className="text-3xl md:text-5xl font-black text-zinc-500 leading-none mb-8">
          {DATA.title}
        </h2>
        <p className="text-zinc-400 max-w-xl leading-relaxed mb-12 text-lg">
          {DATA.about}
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href={DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-amber-400 text-zinc-950 font-bold text-sm rounded hover:bg-amber-300 transition-colors"
          >
            <IconLinkedIn /> LinkedIn
          </a>
          <a
            href={DATA.resume.en}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-zinc-600 text-zinc-300 font-mono text-sm rounded hover:border-amber-400 hover:text-amber-400 transition-colors"
          >
            <IconDocument /> Resume (EN)
          </a>
          <a
            href={DATA.resume.fr}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-zinc-600 text-zinc-300 font-mono text-sm rounded hover:border-amber-400 hover:text-amber-400 transition-colors"
          >
            <IconDocument /> CV (FR)
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────

function Experience() {
  return (
    <Section id="experience" label="Experience">
      <div className="space-y-10">
        {DATA.experience.map((job, i) => (
          <div
            key={i}
            className="relative pl-6 border-l-2 border-zinc-800 hover:border-amber-400 transition-colors group"
          >
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-amber-400 transition-colors" />
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-white font-bold text-xl">{job.role}</h3>
              <span className="font-mono text-xs text-zinc-500">{job.period}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-amber-400 font-mono text-sm font-bold">{job.company}</span>
              <span className="text-zinc-600 text-xs">·</span>
              <span className="text-zinc-500 text-sm">{job.location}</span>
            </div>
            <ul className="space-y-1 mb-4">
              {job.bullets.map((b, j) => (
                <li key={j} className="text-zinc-400 text-sm flex gap-2">
                  <span className="text-amber-400 mt-0.5">▸</span> {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {job.stack.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-amber-400/50 transition-colors group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
                {p.title}
              </h3>
              <div className="flex gap-3 text-zinc-500">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <IconGitHub />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <IconExternal />
                  </a>
                )}
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── EDUCATION ───────────────────────────────────────────────────────────────

function Education() {
  return (
    <Section id="education" label="Education">
      <div className="space-y-6">
        {DATA.education.map((e, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-amber-400/40 transition-colors"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-1">{e.school}</h3>
              <p className="text-amber-400 font-mono text-sm">{e.degree}</p>
              {e.notes && <p className="text-zinc-500 text-sm mt-1">{e.notes}</p>}
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <p className="font-mono text-xs text-zinc-400">{e.period}</p>
              <p className="font-mono text-xs text-zinc-600">{e.location}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <Section id="contact" label="Contact">
      <div className="text-center py-10">
        <p className="text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi — my inbox is open!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 border border-zinc-600 text-zinc-300 rounded hover:border-amber-400 hover:text-amber-400 transition-colors"
          >
            <IconLinkedIn /> Connect on LinkedIn
          </a>
        </div>
        <div className="mt-12 flex justify-center gap-6 text-zinc-600 text-sm font-mono">
          <a href={DATA.resume.en} className="hover:text-zinc-300 transition-colors">Resume (EN)</a>
          <span>·</span>
          <a href={DATA.resume.fr} className="hover:text-zinc-300 transition-colors">CV (FR)</a>
        </div>
      </div>
    </Section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-8 text-center">
      <p className="font-mono text-xs text-zinc-600">
        {DATA.name} © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-zinc-950 text-white min-h-screen selection:bg-amber-400 selection:text-zinc-950 md:pl-24 lg:pr-48">
      <NavBar active={activeSection} />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
