import { useEffect, useRef } from "react";
// import { setTimingsrc } from "timingsrc";
import MediaTimingSrc from "./mediaTimingsrc";

// Define prop types
interface VideoProps {
  controller: any;
  [key: string]: any; // Allows any other props (like `src`, `autoplay`, etc.)
}

function Video({ controller, ...remainingProps }: VideoProps) {
  // Ensure ref is correctly typed as HTMLVideoElement
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      const timingSrc = new MediaTimingSrc(ref.current, controller);
      timingSrc.connect();

      return () => {
        timingSrc.disconnect();
      };
    }
  }, [controller]);

  return <video playsInline ref={ref} {...remainingProps} />;
}

export default Video;
