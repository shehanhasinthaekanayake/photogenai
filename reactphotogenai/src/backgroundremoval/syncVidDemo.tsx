import { useCallback, useEffect, useState } from "react";
import { TimingObject } from "timing-object";

import "./styles.scss";
import Video from "./video";

const timing = new TimingObject(
  {
    position: 45,
    velocity: 0,
    acceleration: 0
  },
  0,
  282
);

const url =
  "https://content.interviewbit.com/assisted-live/dare-to-dream/Segment5";

export default function App() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [show, setShow] = useState(true);
  const [x2, setX2] = useState(false);

  const handlePlayToggle = useCallback(() => {
    timing.update({ velocity: playing ? 0 : 1 });
    setPlaying(!playing);
  }, [playing]);

  const seekBy = useCallback((amount:any) => {
    const { position } = timing.query();
    timing.update({ position: position + amount });
  }, []);

  const handleForward = useCallback(() => {
    seekBy(10);
  }, [seekBy]);

  const handleReverse = useCallback(() => {
    seekBy(-10);
  }, [seekBy]);

  const handlePlaybackSpeed = useCallback(() => {
    timing.update({ velocity: x2 ? 1 : 2 });
    setX2(!x2);
  }, [x2]);

  return (
    <div className="App">
      <div className="video-area">
        {show && (
          <div className="video-tiles">
            <div className="video-big">
              <Video
                muted={muted}
                controls={false}
                controller={timing}
                src={`${url}/screen.mp4`}
              />
            </div>
            <div className="video-small">
              <Video
                muted={muted}
                controls={false}
                controller={timing}
                src={`${url}/av.mp4`}
              />
            </div>
          </div>
        )}
      </div>
      <div className="video-controls">
        <button onClick={handleReverse} className="video-control">
          - 10s
        </button>
        <button className="video-control" onClick={handlePlayToggle}>
          {playing ? "Pause" : "Play"}
        </button>
        <button onClick={handleForward} className="video-control">
          10s +
        </button>
      </div>
      <div className="video-controls">
        <button
          onClick={() => setMuted((prevMuted) => !prevMuted)}
          className="video-control"
        >
          {muted ? "Unmute" : "Mute"}
        </button>
        <button
          className="video-control"
          onClick={() => setShow((prevShow) => !prevShow)}
        >
          {show ? "Hide" : "Show"} Videos
        </button>
        {playing && (
          <button className="video-control" onClick={handlePlaybackSpeed}>
            {x2 ? "1x" : "2x"}
          </button>
        )}
      </div>
    </div>
  );
}
