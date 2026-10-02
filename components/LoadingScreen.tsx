"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen${done ? " is-done" : ""}`} role="status" aria-label="Loading Legendarium">
      <div className="loading-brand">
        <span className="loading-mark" aria-hidden="true">L</span>
        <span>Legendarium</span>
      </div>
      <div className="loading-track" aria-hidden="true" />
      <span className="sr-only">Loading portfolio</span>
    </div>
  );
}
