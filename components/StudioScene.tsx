type StudioSceneProps = {
  mode?: "hero" | "compact";
};

export function StudioScene({ mode = "hero" }: StudioSceneProps) {
  return (
    <div className={`studio-scene ${mode}`} data-reveal>
      <div className="scene-depth">
        <div className="floating-window window-preview">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <strong>Program Monitor</strong>
          </div>
          <div className="monitor">
            <div className="monitor-glow" />
            <div className="monitor-title">
              <span>Sequence 01</span>
              <strong>Legendarium Cut</strong>
            </div>
          </div>
        </div>

        <div className="floating-window window-tools">
          <span>Pr</span>
          <span>Ae</span>
          <span>Ps</span>
        </div>

        <div className="floating-window window-timeline">
          <div className="track track-a" />
          <div className="track track-b" />
          <div className="track track-c" />
          <div className="track track-d" />
          <div className="vertical-playhead" />
        </div>

        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />
      </div>
    </div>
  );
}
