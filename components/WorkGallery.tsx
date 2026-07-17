"use client";

import { useMemo, useState } from "react";
import { filters, projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";

function projectMatches(tags: string[], filter: string) {
  return filter === "All" || tags.some((tag) => tag.toLowerCase() === filter.toLowerCase());
}

export function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(
    () => projects.filter((project) => projectMatches(project.tags, activeFilter)),
    [activeFilter],
  );

  return (
    <section className="work-lab" aria-label="Interactive work gallery">
      <div className="filter-deck" data-reveal>
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className={activeFilter === filter ? "active" : ""}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard featured={index === 0} index={index} key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
