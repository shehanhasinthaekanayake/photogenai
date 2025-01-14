import { YouTubeTutorial } from './YouTubeTutorial';
const features = [
  'Automatic room layout suggestions',
  'Furniture placement optimization',
  'Space utilization analysis',
  'Theme-based design recommendations',
  'Customizable style presets',
  'Room color palette suggestions',
  'AI-driven decor matching',
  'Accessibility and ergonomic design tips',
  'Lighting arrangement recommendations',
  'Personalized design preferences tracking',
];

export const Youtube = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-[#121212] shadow-lg">


      <div className="flex flex-row w-full">

        <div className="w-1/2 pl-10">
          <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
          <div className="flex gap-2 flex-row flex-wrap space-y-2 text-gray-300">
          {features.map((feature) => (
              <span className="flex items-center p-2 bg-gray-800 rounded-md shadow-md" key={feature}>
                 {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="w-1/2">

          <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-bold text-white mb-4">YouTube Tutorial</h1>
            <YouTubeTutorial videoId="YOUR_VIDEO_ID_HERE" /> {/* Replace with your YouTube video ID */}
          </div>
          <p className="text-gray-300 mt-4 text-center">
            Watch this tutorial to learn more about the topic. Don't forget to like and subscribe!
          </p>
        </div>



      </div>


    </div>
  );
};