
interface YouTubeTutorialProps {
  videoId: string; // YouTube video ID
}

export const YouTubeTutorial = ({ videoId }: YouTubeTutorialProps) => {
  return (
    <div className="flex justify-center">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube tutorial"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}; 