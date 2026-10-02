"use client";

import type { Project } from "@/data/portfolio";
import { useState } from "react";

type ProjectCardProps = {
  project: Project;
  index?: number;
  featured?: boolean;
  reveal?: boolean;
};

export function ProjectCard({ project, index = 0, featured = false, reveal = true }: ProjectCardProps) {
  const [previewRequested, setPreviewRequested] = useState(false);

  return (
    <article
      className={`project-card accent-${project.accent} ${featured ? "featured" : ""}`}
      {...(reveal ? { "data-reveal": true } : {})}
      style={{ "--lift": `${Math.min(index, 6) * 12}px` } as React.CSSProperties}
    >
      <div className="project-media">
        {previewRequested ? (
          <iframe src={project.src} title={project.title} allow="autoplay" allowFullScreen />
        ) : (
          <button
            className="project-preview-button"
            onClick={() => setPreviewRequested(true)}
            type="button"
            aria-label={`Load video preview: ${project.title}`}
          >
            <span className="preview-play" aria-hidden="true">▶</span>
            <span>Load video preview</span>
          </button>
        )}
      </div>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.format}</span>
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
