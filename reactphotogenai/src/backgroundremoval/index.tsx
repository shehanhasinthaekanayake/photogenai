// import type { DocumentHead } from '@builder.io/qwik-city';
// import { register } from 'swiper/element/bundle';
// import WaterDropGrid from '~/components/starter/dotsAnimation/dotsanimation';

// import Swiper from '~/components/starter/swiper/swiper';
// import { MouseBackground } from '~/components/starter/mouseBackground/MouseBackground';
import { ReactCompareSlider } from 'react-compare-slider';
import logo from '../2.33x/Asset 3.png'
import { Pricing } from '../components/pricing/pricing';
import { Youtube } from '../components/tutorial/youtube';

import videoOriginal1Import from './new sample vids/video1/Worth It .mp4'
import video1Import from './new sample vids/video1/AnimateDiff22_00011-audio.mp4'
import video2Import from './new sample vids/video1/AnimateDiff22_00012-audio.mp4'
import video3Import from './new sample vids/video1/removed background.mp4'
import video1BackgroundImport from './new sample vids/video1/green-screen-8k-ultra-hd-plus-free-photo.jpg'
import video2BackgroundImport from './new sample vids/video1/istockphoto-1297470894-612x612.jpg'
import video3BackgroundImport from './new sample vids/video1/transparent-background-4k-empty-grid-checkered-layout-wallpaper-free-vector.jpg'

import videoOriginal2Import from './new sample vids/video2/original video - Made with Clipchamp.mp4'
import video4Import from './new sample vids/video2/background applied - Made with Clipchamp.mp4'
import video5Import from './new sample vids/video2/removed background video.mp4'
import video6Import from './new sample vids/video2/green screen AnimateDiff22_00036.mp4'
import video4BackgroundImport from './new sample vids/video2/green-screen-8k-ultra-hd-plus-free-photo.jpg'
import video5BackgroundImport from './new sample vids/video2/nikolai-lehmann-2Evzm2fwRH8-unsplash (1).jpg'
import video6BackgroundImport from './new sample vids/video2/transparent-background-4k-empty-grid-checkered-layout-wallpaper-free-vector.jpg'


import videoOriginal3Import from './new sample vids/video3/original - Made with Clipchamp.mp4'
import video7Import from './new sample vids/video3/greenscreen - Made with Clipchamp.mp4'
import video8Import from './new sample vids/video3/appliedbackground - Made with Clipchamp.mp4'
import video9Import from './new sample vids/video3/empty background.mp4'
import video7BackgroundImport from './new sample vids/video3/1.webp'
import video8BackgroundImport from './new sample vids/video3/photo-1461782296610-c552d61b149a.png'
import video9BackgroundImport from './new sample vids/video3/transparent-background-4k-empty-grid-checkered-layout-wallpaper-free-vector.jpg'

import videoOriginal4Import from './new sample vids/video4/original video - Made with Clipchamp.mp4'
import video10Import from './new sample vids/video4/green screen - Made with Clipchamp.mp4'
import video11Import from './new sample vids/video4/background applied - Made with Clipchamp.mp4'
import video12Import from './new sample vids/video4/removed background.mp4'
import video10BackgroundImport from './new sample vids/video4/green-screen-8k-ultra-hd-plus-free-photo.jpg'
import video11BackgroundImport from './new sample vids/video4/bernard-hermant-c4Ccpa8sMlI-unsplash.jpg'
import video12BackgroundImport from './new sample vids/video4/transparent-background-4k-empty-grid-checkered-layout-wallpaper-free-vector.jpg'


import Lottie from 'react-lottie';
import animationData from './new sample vids/Animation - 1736837185654.json'


// import video2 from './AnimateDiff22_00012-audio.mp4'
import { useRef, useEffect, useState } from 'react';

interface VideoItem {
  id: number;
  image: string;
  video: string;
}

interface Bundle {
  bundleId: number;
  video1: string;
  items: VideoItem[];
}

interface VideoState {
  currentSelection: {
    bundleId: number;
    itemId: number;
  };
  video1: string | null;
  video2: string | null;
  image1: string;
  image2: string;
  image3: string;
  bundles: Bundle[];
}

interface VideoThumbnails {
  [key: string]: {
    original: string;
    modified: string;
  };
}

interface VideoRef extends HTMLVideoElement {
  // Add any additional properties if needed
}

const BgReplace = () => {

  const [video1, setVideo1] = useState<string>(video1Import);
  const [video2, setVideo2] = useState<string>(video2Import);
  const [syncing, setSyncing] = useState<boolean>(false);

  const [currentSelection, setCurrentSelection] = useState<number>(1);

  const video1Ref = useRef<VideoRef>(null);
  const video2Ref = useRef<VideoRef>(null);
  const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [progress, setProgress] = useState<number>(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [videoState, setVideoState] = useState<VideoState>({
    currentSelection: { bundleId: 0, itemId: 0 },
    video1: null,
    video2: null,
    image1: '',
    image2: '',
    image3: '',
    bundles: [
      {
        bundleId: 0,
        video1: videoOriginal1Import,
        items: [
          { id: 1, image: video1BackgroundImport, video: video1Import },
          { id: 2, image: video2BackgroundImport, video: video2Import },
          { id: 3, image: video3BackgroundImport, video: video3Import },
        ],
      },
      {
        bundleId: 1,
        video1: videoOriginal2Import,
        items: [
          { id: 1, image: video4BackgroundImport, video: video4Import },
          { id: 2, image: video5BackgroundImport, video: video5Import },
          { id: 3, image: video6BackgroundImport, video: video6Import },
        ],
      },
      {
        bundleId: 2,
        video1: videoOriginal3Import,
        items: [
          { id: 1, image: video7BackgroundImport, video: video7Import },
          { id: 2, image: video8BackgroundImport, video: video8Import },
          { id: 3, image: video9BackgroundImport, video: video9Import },
        ],
      },
      {
        bundleId: 3,
        video1: videoOriginal4Import,
        items: [
          { id: 1, image: video10BackgroundImport, video: video10Import },
          { id: 2, image: video11BackgroundImport, video: video11Import },
          { id: 3, image: video12BackgroundImport, video: video12Import },
        ],
      },
    ],
  });

  const [videoThumbnails, setVideoThumbnails] = useState<VideoThumbnails>({
    bundle0: { original: '', modified: '' },
    bundle1: { original: '', modified: '' },
    bundle2: { original: '', modified: '' },
    bundle3: { original: '', modified: '' },
  });

  // Add new loading state
  const [videosLoading, setVideosLoading] = useState<boolean>(true);

  // Add loading tracking for individual videos
  const [loadingStatus, setLoadingStatus] = useState({
    video1: false,
    video2: false
  });

  // Add error boundaries
  const [error, setError] = useState<string | null>(null);

  // Add new state for thumbnail loading
  const [thumbnailsLoaded, setThumbnailsLoaded] = useState<boolean>(false);

  // Add new state for play/pause
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Function to handle video loading
  const handleVideoLoad = (videoKey: 'video1' | 'video2') => {
    setLoadingStatus(prev => ({
      ...prev,
      [videoKey]: true
    }));

    // Check if both videos are loaded
    if (loadingStatus.video1 && loadingStatus.video2) {
      setVideosLoading(false);
      setSyncing(false);
    }
  };

  // Add error handling to video operations
  const handleVideoError = (error: Error) => {
    console.error('Video error:', error);
    setError('Failed to load or play video. Please try again.');
    setSyncing(false);
    setVideosLoading(false);
  };

  // Add timeout for loading state
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (videosLoading) {
        setVideosLoading(false);
        console.log('Force stopped loading after timeout');
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(loadingTimeout);
  }, [videosLoading]);

  // Update the loadThumbnails function
  const loadThumbnails = async () => {
    try {
      console.log('Starting thumbnail generation...');
      const thumbnails = {
        bundle0: {
          original: await generateThumbnail(videoState.bundles[0].video1, 2000),
          modified: await generateThumbnail(videoState.bundles[0].items[0].video, 2000),
        },
        bundle1: {
          original: await generateThumbnail(videoState.bundles[1].video1, 2000),
          modified: await generateThumbnail(videoState.bundles[1].items[0].video, 2000),
        },
        bundle2: {
          original: await generateThumbnail(videoState.bundles[2].video1, 2000),
          modified: await generateThumbnail(videoState.bundles[2].items[0].video, 2000),
        },
        bundle3: {
          original: await generateThumbnail(videoState.bundles[3].video1, 2000),
          modified: await generateThumbnail(videoState.bundles[3].items[0].video, 2000),
        },
      };
      console.log('Thumbnails generated:', thumbnails);
      setVideoThumbnails(thumbnails);
      setThumbnailsLoaded(true);
    } catch (error) {
      console.error('Error generating thumbnails:', error);
      setThumbnailsLoaded(true); // Set to true even on error to prevent infinite loading
      // Set default thumbnails or error state
      setVideoThumbnails({
        bundle0: { original: '', modified: '' },
        bundle1: { original: '', modified: '' },
        bundle2: { original: '', modified: '' },
        bundle3: { original: '', modified: '' },
      });
    }
  };

  // Update the initial useEffect to wait for thumbnails
  useEffect(() => {
    const initializeVideos = async () => {
      // Load thumbnails first
      await loadThumbnails();
      
      // Only proceed with video setup after thumbnails are loaded
      setVideo1(videoState?.bundles?.[0].video1);
      setVideo2(videoState?.bundles?.[0].items?.[0].video);
      
      setVideoState((prevState: any) => ({
        ...prevState,
        image1: videoState?.bundles?.[0].items?.[0].image,
        image2: videoState?.bundles?.[0].items?.[1].image,
        image3: videoState?.bundles?.[0].items?.[2].image,
        currentSelection: { bundleId: 0, itemId: 0 }
      }));
    };

    initializeVideos();
  }, []);

  // Update handleClick with better loading management
  const handleClick = (bundleId: number, itemId: number): void => {
    if (!thumbnailsLoaded) return;

    // Clear any existing sync timeout
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }

    setVideosLoading(true);
    setSyncing(true);
    setLoadingStatus({ video1: false, video2: false });

    const currentTime = video1Ref.current?.currentTime || 0;

    setVideoState(prevState => ({
      ...prevState,
      currentSelection: { bundleId, itemId },
      video1: videoState.bundles[bundleId].video1,
      video2: videoState.bundles[bundleId].items[itemId].video,
      image1: videoState.bundles[bundleId].items[0].image,
      image2: videoState.bundles[bundleId].items[1].image,
      image3: videoState.bundles[bundleId].items[2].image,
    }));

    setVideo1(videoState.bundles[bundleId].video1);
    setVideo2(videoState.bundles[bundleId].items[itemId].video);

    // Set a timeout to force stop loading state
    syncTimeoutRef.current = setTimeout(() => {
      setVideosLoading(false);
      setSyncing(false);
    }, 5000); // 5 second timeout
  };

  // Update setSubVideo1 with better loading management
  const setSubVideo1 = (itemId: number): void => {
    // Clear any existing sync timeout
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }

    setSyncing(true);
    setVideosLoading(true);
    const currentTime = video1Ref.current?.currentTime || 0;

    setVideoState(prevState => ({
      ...prevState,
      currentSelection: { 
        bundleId: prevState.currentSelection.bundleId, 
        itemId 
      }
    }));

    const newVideo = videoState.bundles[videoState.currentSelection.bundleId].items[itemId].video;
    setVideo2(newVideo);

    // Set a timeout to force stop loading state
    syncTimeoutRef.current = setTimeout(() => {
      if (video1Ref.current && video2Ref.current) {
        video2Ref.current.currentTime = currentTime;
        Promise.all([
          video1Ref.current.play(),
          video2Ref.current.play()
        ]).catch(error => console.error("Error playing videos:", error))
        .finally(() => {
          setVideosLoading(false);
          setSyncing(false);
        });
      } else {
        setVideosLoading(false);
        setSyncing(false);
      }
    }, 1000);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
    };
  }, []);

  // Update video sync effect
  useEffect(() => {
    const video1Element = video1Ref.current;
    const video2Element = video2Ref.current;

    if (!video1Element || !video2Element) return;

    const handleLoadedData = () => {
      if (video1Element.readyState >= 3 && video2Element.readyState >= 3) {
        setVideosLoading(false);
        setSyncing(false);
      }
    };

    video1Element.addEventListener('loadeddata', handleLoadedData);
    video2Element.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video1Element.removeEventListener('loadeddata', handleLoadedData);
      video2Element.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [video1, video2]);

  // Update the generateThumbnail function with better error handling
  const generateThumbnail = async (videoUrl: string, timeout: number = 5000): Promise<string> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.src = videoUrl;
      video.crossOrigin = 'anonymous';
      video.preload = 'metadata';

      const timeoutId = setTimeout(() => {
        reject(new Error('Thumbnail generation timeout'));
      }, timeout);

      video.onloadedmetadata = () => {
        video.currentTime = 0.1; // Set to first frame
      };

      video.onloadeddata = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 320; // Fixed width
          canvas.height = 180; // Fixed height (16:9 aspect ratio)
          
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            throw new Error('Failed to get canvas context');
          }

          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          clearTimeout(timeoutId);
          resolve(canvas.toDataURL('image/jpeg', 0.8));
        } catch (error) {
          clearTimeout(timeoutId);
          reject(error);
        }
      };

      video.onerror = (error) => {
        clearTimeout(timeoutId);
        reject(error);
      };
    });
  };

  // Update the renderThumbnailPair function
  const renderThumbnailPair = (bundleIndex: number, onClick: () => void): JSX.Element => {
    const bundleKey = `bundle${bundleIndex}` as keyof typeof videoThumbnails;
    const thumbnails = videoThumbnails[bundleKey];
    
    return (
      <div className="w-full h-full relative cursor-pointer group">
        <div className="flex h-full bg-purple-900/20 rounded-xl overflow-hidden">
          <div className="w-1/2 h-full flex items-center justify-center overflow-hidden">
            {thumbnails.original ? (
              <img 
                className="w-full h-full object-cover"
                src={thumbnails.original}
                alt={`Original video ${bundleIndex + 1}`}
                onError={(e) => {
                  e.currentTarget.src = 'fallback-image-url.jpg'; // Add a fallback image
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-purple-800/20">
                <span className="text-white/60">Loading...</span>
              </div>
            )}
          </div>
          <div className="w-1/2 h-full flex items-center justify-center overflow-hidden">
            {thumbnails.modified ? (
              <img 
                className="w-full h-full object-cover"
                src={thumbnails.modified}
                alt={`Modified video ${bundleIndex + 1}`}
                onError={(e) => {
                  e.currentTarget.src = 'fallback-image-url.jpg'; // Add a fallback image
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-purple-800/20">
                <span className="text-white/60">Loading...</span>
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-4 left-4 text-xl font-bold text-white bg-purple-900/80 px-4 py-2 rounded-lg">
          Output variation {bundleIndex + 1}
        </div>
      </div>
    );
  };

  // Add play/pause toggle function
  const togglePlayPause = async () => {
    if (!video1Ref.current || !video2Ref.current) return;
    
    try {
      if (isPlaying) {
        video1Ref.current.pause();
        video2Ref.current.pause();
      } else {
        await Promise.all([
          video1Ref.current.play(),
          video2Ref.current.play()
        ]);
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error toggling play/pause:', error);
    }
  };

  // Update video sync effect to handle play state
  useEffect(() => {
    const video1Element = video1Ref.current;
    const video2Element = video2Ref.current;

    if (!video1Element || !video2Element) return;

    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    video1Element.addEventListener('pause', handlePause);
    video1Element.addEventListener('play', handlePlay);

    return () => {
      video1Element.removeEventListener('pause', handlePause);
      video1Element.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen max-h-screen flex flex-col relative p-4 text-white">
        {/* Header Section */}
        <div className="mb-4 p-6 justify-between rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/10">
          <div className="flex flex-col items-center space-y-4">
            {/* Logo with animation */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img src={logo} className="w-40 animate-fade-in" alt="Logo" />
            </div>
            
            {/* Tagline with gradient text */}
            <div className="flex flex-row items-center justify-center gap-4">
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Unlock your creativity and start designing amazing projects today!
              </span>
              
              {/* CTA Button with gradient and animation */}
              <a className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-lg group">
                <span className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-lg group-hover:bg-opacity-0 duration-400">
                  Get Started
                </span>
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-row justify-between p-4 mt-4 gap-4 bg-white/5 rounded-xl backdrop-blur-md border border-white/10">
            {['Architectural Design', 'Tryon Cloths', 'Sketch to Image', 'Text to Image'].map((item) => (
              <button key={item} className="text-md font-medium text-white/80 hover:text-white transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-white/10">
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-row relative flex-grow rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10">
          {/* Tab Navigation */}
          <div className="absolute z-50 w-full p-4">
            <div className="flex flex-row justify-center gap-4 mb-2">
              {['Input Image', 'Output Images'].map((tab) => (
                <button key={tab} className="px-6 py-2 text-white/90 font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Video Comparison Section */}
          <div className="w-1/2 flex items-center justify-center relative mt-16 bg-gradient-to-br from-slate-800 to-slate-900">
            {/* Only show loading animation when actually loading or syncing */}
            {(videosLoading || syncing) && (
              <div className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                <Lottie options={defaultOptions} height={300} width={300} />
              </div>
            )}

            {/* Video Compare Slider */}
            <ReactCompareSlider
              className="absolute h-full transition-opacity duration-300"
              itemOne={
                <div className="relative w-full h-full">
                  {(!thumbnailsLoaded || videosLoading) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                      />
                    </div>
                  )}
                  <video
                    className="w-full h-full object-cover"
                    src={thumbnailsLoaded ? video1 : undefined}
                    autoPlay={false}
                    muted
                    ref={video1Ref}
                    onLoadedData={() => handleVideoLoad('video1')}
                    onError={(e) => handleVideoError(e.error)}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              }
              itemTwo={
                <div className="relative w-full h-full">
                  {(!thumbnailsLoaded || videosLoading) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                      />
                    </div>
                  )}
                  <video
                    className="w-full h-full object-cover"
                    src={thumbnailsLoaded ? video2 : undefined}
                    autoPlay={false}
                    muted
                    ref={video2Ref}
                    onLoadedData={() => handleVideoLoad('video2')}
                    onError={(e) => handleVideoError(e.error)}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              }
            />

            {/* Controls Section */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-xl px-6">
              {/* Progress Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="mb-4 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>

              {/* Background Selection */}
              <div className="flex justify-center gap-4 mb-4">
                {[videoState.image1, videoState.image2, videoState.image3].map((image, index) => (
                  <button
                    key={index}
                    onClick={() => { setSubVideo1(index); setCurrentSelection(index + 1) }}
                    className={`w-12 h-12 rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 ${
                      currentSelection === index + 1 ? 'ring-2 ring-purple-500 scale-110' : ''
                    }`}
                  >
                    <img src={image} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4">
                {['Previous', 'Next'].map((btn) => (
                  <button
                    key={btn}
                    className="px-6 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnails Grid */}
          <div className="w-1/2 grid grid-cols-2 gap-4 p-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                onClick={() => handleClick(index, 0)}
                className="relative group rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {renderThumbnailPair(index, () => {})}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Youtube />
      <Pricing />
    </>
  );
}

// Add these animations to your global CSS or Tailwind config
const customStyles = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
`;

export default BgReplace