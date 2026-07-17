"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, techWork } from "@/data/portfolio";

type WorkMode = "edits" | "tech";

const modeCopy = {
  edits: {
    eyebrow: "Selected edits",
    title: "Video cuts, reels, events, and motion work.",
    text: "A focused wall of embedded edits from the current portfolio, arranged for quick scanning and playback.",
    stat: `${projects.length} video pieces`,
  },
  tech: {
    eyebrow: "Tech work",
    title: "Creative systems, web experiments, and workflow builds.",
    text: "Space for technical projects, case studies, interactive tools, and production systems as the portfolio grows.",
    stat: `${techWork.length} project slots`,
  },
};

export default function WorkPage() {
  const [mode, setMode] = useState<WorkMode>("edits");
  const active = modeCopy[mode];

  return (
    <>
      <section className="work-hero" data-reveal>
        <div>
          <p className="eyebrow">Work</p>
          <h1>Edits and tech work, separated clearly.</h1>
          <p>
            Choose the side you want to see. Edits shows the video portfolio.
            Tech is reserved for creative systems, web builds, and workflow projects.
          </p>
        </div>

        <div className="work-mode-panel" aria-label="Choose work category">
          <button
            aria-pressed={mode === "edits"}
            className={mode === "edits" ? "active" : ""}
            onClick={() => setMode("edits")}
            type="button"
          >
            Edits
          </button>
          <button
            aria-pressed={mode === "tech"}
            className={mode === "tech" ? "active" : ""}
            onClick={() => setMode("tech")}
            type="button"
          >
            Tech
          </button>
        </div>
      </section>

      <section className={`work-mode-summary mode-${mode}`}>
        <div>
          <p className="eyebrow">{active.eyebrow}</p>
          <h2>{active.title}</h2>
        </div>
        <p>{active.text}</p>
        <span>{active.stat}</span>
      </section>

      {mode === "edits" ? (
        <section className="work-split">
          <div className="work-section-head">
            <span>01</span>
            <div>
              <p className="eyebrow">Edits</p>
              <h2>Video cuts, reels, events, and motion work.</h2>
            </div>
            <p>Actual embedded work from the current portfolio, presented as a clean preview wall.</p>
          </div>

          <div className="project-grid edits-grid">
            {projects.map((project, index) => (
              <ProjectCard featured={index === 0} index={index} key={project.title} project={project} reveal={false} />
            ))}
          </div>
        </section>
      ) : (
        <section className="work-split tech-work-zone">
          <div className="work-section-head">
            <span>02</span>
            <div>
              <p className="eyebrow">Tech Work</p>
              <h2>Creative systems, web experiments, and workflow builds.</h2>
            </div>
            <p>This section is intentionally ready for future technical projects, case studies, or interactive tools.</p>
          </div>

        <div className="tech-grid">
          {techWork.map((item, index) => (
            <article className="tech-card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item.type}</p>
              <h3>{item.title}</h3>
              <small>{item.text}</small>
            </article>
          ))}
          <article className="tech-card tech-card-empty">
            <span>+</span>
            <p>Reserved Space</p>
            <h3>Add your next technical project here.</h3>
            <small>Use this area for GitHub links, demos, case studies, automations, apps, or behind-the-scenes workflow builds.</small>
          </article>
        </div>
      </section>
      )}
    </>
  );
}
