import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ThreeHero } from "@/components/ThreeHero";
import { editSteps, projects, stats, strengths } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero-grid">
        <div className="hero-art art-slate" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-art art-lens" aria-hidden="true">
          <span />
        </div>
        <div className="hero-art art-timeline" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Cinematic edits. Real retention.</p>
          <h1>Premium edits for creators, events, and brands.</h1>
          <p className="lead">
            I am Lakshay, the editor behind Legendarium. I build reels, promos,
            event films, and motion cuts with sharp hooks, clean rhythm, and a cinematic finish.
          </p>
          <div className="landing-meta" aria-label="Editing focus areas">
            <span>Reels</span>
            <span>Promos</span>
            <span>Event films</span>
            <span>Motion graphics</span>
          </div>
          <div className="hero-actions">
            <Link className="button primary" href="/work/">View work</Link>
            <Link className="button secondary" href="/contact/">Start a project</Link>
          </div>
        </div>

        <ThreeHero />

        <a className="scroll-cue" href="#portfolio-start" aria-label="Scroll to portfolio sections">
          <span>Scroll</span>
          <b />
        </a>
      </section>

      <section className="stat-console" id="portfolio-start" aria-label="Portfolio stats" data-reveal>
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="home-about section-block">
        <div className="split-heading" data-reveal>
          <div>
            <p className="eyebrow">About Legendarium</p>
            <h2>Motion-first edits with structure under the style.</h2>
          </div>
          <p>
            The goal is not to throw effects at footage. The goal is to make every
            cut feel intentional: hook, flow, texture, beat, and finish.
          </p>
        </div>

        <div className="process-stack home-process">
          {strengths.map((item) => (
            <article className="process-card" data-reveal key={item.title}>
              <span>{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-edit section-block">
        <div className="split-heading" data-reveal>
          <div>
            <p className="eyebrow">Edit process</p>
            <h2>A clean edit bay from raw footage to final export.</h2>
          </div>
          <p>
            This is the workflow behind the cuts: organize the footage, shape the hook,
            add motion where it earns its place, then polish for the final platform.
          </p>
        </div>

        <div className="edit-lab home-edit-lab">
          <div className="edit-console" data-reveal>
            <div className="edit-monitor">
              <div className="monitor-ui">
                <span>Program</span>
                <strong>Hook sequence</strong>
              </div>
              <div className="focus-frame">
                <span>REC</span>
              </div>
            </div>

            <div className="software-dock" aria-label="Editing software stack">
              <span>Premiere</span>
              <span>After Effects</span>
              <span>Photoshop</span>
              <span>Sound Design</span>
            </div>

            <div className="edit-timeline" aria-hidden="true">
              <div className="time-ruler">
                <span>00:00</span>
                <span>00:07</span>
                <span>00:15</span>
                <span>00:30</span>
              </div>
              <div className="lane lane-video">
                <b />
                <b />
                <b />
              </div>
              <div className="lane lane-motion">
                <b />
                <b />
              </div>
              <div className="lane lane-audio">
                <b />
                <b />
                <b />
                <b />
              </div>
              <i />
            </div>
          </div>

          <div className="edit-steps">
            {editSteps.map((step) => (
              <article className="edit-step" data-reveal key={step.title}>
                <span>{step.label}</span>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="split-heading" data-reveal>
          <div>
            <p className="eyebrow">Featured sequence</p>
            <h2>Depth, motion, and pacing in one place.</h2>
          </div>
          <p>
            The work page now has space for both sides of the portfolio: edits and tech work.
          </p>
        </div>

        <div className="feature-grid">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard index={index} key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="cta-rig" data-reveal>
        <div>
          <p className="eyebrow">Ready for a sharper cut?</p>
          <h2>Bring the footage. I will bring the rhythm.</h2>
        </div>
        <Link className="button primary" href="/contact">Book the edit</Link>
      </section>
    </>
  );
}
