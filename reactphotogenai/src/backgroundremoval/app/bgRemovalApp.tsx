import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiPlay, FiPause, FiTrash2 } from 'react-icons/fi';
import { BiVideoRecording } from 'react-icons/bi';
import { MdOutlineAutoFixHigh } from 'react-icons/md';

interface VideoItem {
  id: string;
  name: string;
  status: 'processing' | 'completed' | 'failed';
  progress: number;
  url: string;
}

const BgRemovalApp = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Handle file upload logic here
      const newVideos = Array.from(files).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        status: 'processing' as const,
        progress: 0,
        url: URL.createObjectURL(file)
      }));
      setVideos([...videos, ...newVideos]);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 border-b border-white/10"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          AI Video Background Processor
        </h1>
        <p className="text-gray-400 mt-2">Transform your videos with AI-powered background manipulation</p>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Upload Video</h2>
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FiUpload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-400">MP4, MOV, or AVI (MAX. 500MB)</p>
              </div>
              <input type="file" className="hidden" onChange={handleFileUpload} accept="video/*" multiple />
            </label>
          </div>

          {/* Processing Queue */}
          <div className="mt-6 bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Processing Queue</h2>
            <div className="space-y-4">
              {videos.map(video => (
                <motion.div 
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <BiVideoRecording className="text-purple-500" />
                      <span className="text-sm truncate">{video.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      video.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      video.status === 'processing' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {video.status}
                    </span>
                  </div>
                  {video.status === 'processing' && (
                    <div className="mt-2 w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${video.progress}%` }}
                      ></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video Preview */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10 h-full">
            <h2 className="text-xl font-semibold mb-4">Video Preview</h2>
            <div className="aspect-video bg-black/50 rounded-lg overflow-hidden relative">
              {selectedVideo ? (
                <>
                  <video
                    src={selectedVideo.url}
                    className="w-full h-full object-contain"
                    controls
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{selectedVideo.name}</span>
                      <div className="flex space-x-2">
                        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                          {isPlaying ? <FiPause /> : <FiPlay />}
                        </button>
                        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                          <MdOutlineAutoFixHigh />
                        </button>
                        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <p>Select a video to preview</p>
                </div>
              )}
            </div>

            {/* Video Processing Options */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                <span className="block text-center">Remove Background</span>
              </button>
              <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                <span className="block text-center">Apply Green Screen</span>
              </button>
              <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                <span className="block text-center">Change Background</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BgRemovalApp;
