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
  // const syncTimeoutRef = useRef<number | null>(null);

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

    // If both videos are loaded, set videosLoading to false
    if (videoKey === 'video1' && loadingStatus.video2 || 
        videoKey === 'video2' && loadingStatus.video1) {
      setVideosLoading(false);
    }
  };

  // Add error handling to video operations
  const handleVideoError = (error: Error) => {
    console.error('Video error:', error);
    setError('Failed to load or play video. Please try again.');
    setSyncing(false);
    setVideosLoading(false);
  };

  // Update the loadThumbnails function to return a promise
  const loadThumbnails = async () => {
    try {
      console.log('Starting thumbnail generation...');
      const thumbnails = {
        bundle0: {
          original: await generateThumbnail(videoState.bundles[0].video1),
          modified: await generateThumbnail(videoState.bundles[0].items[0].video),
        },
        bundle1: {
          original: await generateThumbnail(videoState.bundles[1].video1),
          modified: await generateThumbnail(videoState.bundles[1].items[0].video),
        },
        bundle2: {
          original: await generateThumbnail(videoState.bundles[2].video1),
          modified: await generateThumbnail(videoState.bundles[2].items[0].video),
        },
        bundle3: {
          original: await generateThumbnail(videoState.bundles[3].video1),
          modified: await generateThumbnail(videoState.bundles[3].items[0].video),
        },
      };
      console.log('Thumbnails generated:', thumbnails);
      setVideoThumbnails(thumbnails);
      setThumbnailsLoaded(true);
    } catch (error) {
      console.error('Error generating thumbnails:', error);
      // Set thumbnails loaded even on error to prevent infinite loading
      setThumbnailsLoaded(true);
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

  // Update handleClick to check for thumbnails
  const handleClick = (bundleId: number, itemId: number): void => {
    if (!thumbnailsLoaded) {
      console.log('Waiting for thumbnails to load...');
      return;
    }

    setVideosLoading(true);
    setLoadingStatus({ video1: false, video2: false });

    const currentTime = video1Ref.current?.currentTime || 0;
    
    // Update video sources first
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

    // Wait for videos to load before playing
    const checkAndPlayVideos = () => {
      if (!videosLoading && video1Ref.current && video2Ref.current) {
        video1Ref.current.currentTime = currentTime;
        video2Ref.current.currentTime = currentTime;
        Promise.all([
          video1Ref.current.play(),
          video2Ref.current.play()
        ]).catch(error => console.error("Error playing videos:", error));
        setSyncing(false);
      }
    };

    const loadingInterval = setInterval(() => {
      if (!videosLoading) {
        checkAndPlayVideos();
        clearInterval(loadingInterval);
      }
    }, 100);
  };

  const setSubVideo1 = (itemId: number): void => {
    setSyncing(true);
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

    // Wait for the new video to load
    setTimeout(() => {
      if (video1Ref.current && video2Ref.current) {
        video2Ref.current.currentTime = currentTime;
        Promise.all([
          video1Ref.current.play(),
          video2Ref.current.play()
        ]).catch(error => console.error("Error playing videos:", error));
        setSyncing(false);
      }
    }, 500);
  };

  useEffect(() => {
    // Initial video and background setup
    setVideo1(videoState?.bundles?.[0].video1);
    setVideo2(videoState?.bundles?.[0].items?.[0].video);
    
    // Set the initial backgrounds
    setVideoState((prevState: any) => ({
      ...prevState,
      image1: videoState?.bundles?.[0].items?.[0].image,
      image2: videoState?.bundles?.[0].items?.[1].image,
      image3: videoState?.bundles?.[0].items?.[2].image,
      currentSelection: { bundleId: 0, itemId: 0 }
    }));
  }, []);

  // Update backgrounds whenever video1 changes
  useEffect(() => {
    const currentBundleId = videoState.bundles.findIndex(bundle => bundle.video1 === video1);
    if (currentBundleId !== -1) {
      setVideoState((prevState: any) => ({
        ...prevState,
        image1: videoState.bundles[currentBundleId].items[0].image,
        image2: videoState.bundles[currentBundleId].items[1].image,
        image3: videoState.bundles[currentBundleId].items[2].image,
        currentSelection: { bundleId: currentBundleId, itemId: 0 }
      }));
    }
  }, [video1]);

  // Update video sync logic with better buffering handling
  useEffect(() => {
    const video1Element = video1Ref.current;
    const video2Element = video2Ref.current;

    if (!video1Element || !video2Element) return;

    const syncVideos = () => {
      if (!video1Element || !video2Element || syncing) return;

      const timeDiff = Math.abs(video1Element.currentTime - video2Element.currentTime);
      if (timeDiff > 0.05) {
        video2Element.currentTime = video1Element.currentTime;
      }

      setProgress((video1Element.currentTime / (video1Element.duration || 1)) * 100);
    };

    const handleVideoEvent = async (event: string) => {
      if (!video1Element || !video2Element) return;

      switch (event) {
        case 'play':
          try {
            await Promise.all([video1Element.play(), video2Element.play()]);
          } catch (error) {
            console.error('Error playing videos:', error);
          }
          break;
        case 'pause':
          video1Element.pause();
          video2Element.pause();
          break;
        case 'seeking':
          setSyncing(true);
          video2Element.currentTime = video1Element.currentTime;
          setSyncing(false);
          break;
        case 'waiting':
          video1Element.pause();
          video2Element.pause();
          setSyncing(true);
          break;
        case 'playing':
          if (syncing) {
            try {
              video2Element.currentTime = video1Element.currentTime;
              await Promise.all([video1Element.play(), video2Element.play()]);
              setSyncing(false);
            } catch (error) {
              console.error('Error resuming videos:', error);
            }
          }
          break;
        case 'ended':
          video1Element.currentTime = 0;
          video2Element.currentTime = 0;
          try {
            await Promise.all([video1Element.play(), video2Element.play()]);
          } catch (error) {
            console.error('Error restarting videos:', error);
          }
          break;
      }
    };

    const events = ['play', 'pause', 'seeking', 'waiting', 'playing', 'ended'];
    const eventListeners = events.map(event => {
      const listener = () => handleVideoEvent(event);
      video1Element.addEventListener(event, listener);
      return { event, listener };
    });

    const syncInterval = setInterval(syncVideos, 50);

    return () => {
      eventListeners.forEach(({ event, listener }) => {
        video1Element?.removeEventListener(event, listener);
      });
      clearInterval(syncInterval);
    };
  }, [syncing]);

  // Update thumbnail generation to maintain aspect ratio
  const generateThumbnail = async (videoUrl: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.src = videoUrl;
      video.crossOrigin = 'anonymous';
      video.preload = 'metadata';

      const timeoutId = setTimeout(() => {
        reject(new Error('Thumbnail generation timeout'));
      }, 10000);

      video.onloadedmetadata = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          clearTimeout(timeoutId);
          reject(new Error('Failed to get canvas context'));
          return;
        }

        // Set canvas dimensions to match video aspect ratio
        const aspectRatio = video.videoWidth / video.videoHeight;
        const maxWidth = 320;
        const maxHeight = 180;
        let width = video.videoWidth;
        let height = video.videoHeight;

        if (width > maxWidth) {
          width = maxWidth;
          height = width / aspectRatio;
        }

        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }

        canvas.width = width;
        canvas.height = height;

        // Capture the first frame
        video.currentTime = 0.1; // Slightly offset to ensure the frame is loaded
      };

      video.onseeked = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          clearTimeout(timeoutId);
          resolve(canvas.toDataURL('image/jpeg', 0.85)); // Increased quality
        } else {
          clearTimeout(timeoutId);
          reject(new Error('Failed to get canvas context'));
        }
      };

      video.onerror = (error) => {
        clearTimeout(timeoutId);
        reject(error);
      };
    });
  };

  // Update the thumbnail display component to maintain aspect ratio
  const renderThumbnailPair = (bundleIndex: number, onClick: () => void): JSX.Element => {
    const bundleKey = `bundle${bundleIndex}` as keyof typeof videoThumbnails;
    const thumbnails = videoThumbnails[bundleKey];
    
    return (
      <div className="w-1/2 p-1 relative cursor-pointer hover:opacity-90" onClick={onClick}>
        <div className="flex h-full bg-gray-800">
          {thumbnails.original ? (
            <div className="w-1/2 h-full flex items-center justify-center overflow-hidden">
              <img 
                className="w-full h-full object-contain" 
                src={thumbnails.original} 
                alt={`Original video ${bundleIndex + 1}`}
              />
            </div>
          ) : (
            <div className="w-1/2 h-full flex items-center justify-center bg-gray-700">
              <div className="animate-pulse">Loading...</div>
            </div>
          )}
          {thumbnails.modified ? (
            <div className="w-1/2 h-full flex items-center justify-center overflow-hidden">
              <img 
                className="w-full h-full object-contain" 
                src={thumbnails.modified} 
                alt={`Modified video ${bundleIndex + 1}`}
              />
            </div>
          ) : (
            <div className="w-1/2 h-full flex items-center justify-center bg-gray-700">
              <div className="animate-pulse">Loading...</div>
            </div>
          )}
        </div>
        <span className="absolute top-4 left-4 mt-8 text-3xl font-bold text-white bg-black/50 p-2 rounded">
          Output variation {bundleIndex + 1}
        </span>
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
      <div className="bg-[#121212] min-h-screen max-h-screen flex flex-col relative p-4 text-white">
        <div className="mb-2 p-4 justify-between rounded-lg shadow-lg flex flex-col items-center">
          <span className="text-4xl font-bold text-white"><img src={logo} className="w-36"></img></span>
          <div className="flex flex-row items-center my-1 justify-center gap-2 ml-4">
            <span className="text-md font-semibold text-white mt-2">Unlock your creativity and start designing amazing projects today!</span>
            <div className="flex gap-4">
              <div>
                <a className="inline-flex justify-center whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-200 dark:text-slate-800 bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]" href="#0">Get started</a>
              </div>

            </div>
          </div>
          <div className="flex flex-row justify-between p-2 gap-2 bg-white/5 h-fit rounded-lg shadow-lg border border-white/20">
            <span className="text-md font-bold text-white hover:text-gray-400 transition duration-300 cursor-pointer">Architectural Design</span>
            <span className="text-md font-bold text-white hover:text-gray-400 transition duration-300 cursor-pointer">Tryon Cloths</span>
            <span className="text-md font-bold text-white hover:text-gray-400 transition duration-300 cursor-pointer">Sketch to Image</span>
            <span className="text-md font-bold text-white hover:text-gray-400 transition duration-300 cursor-pointer">Text to Image</span>
          </div>
        </div>





        <div className="flex flex-row relative flex-grow rounded-lg overflow-hidden">
          <div className="absolute z-50 w-full">
            <div className="flex flex-row text-center justify-evenly items-center mb-2 p-2 rounded-lg shadow-lg border border-white/20 bg-white/30 backdrop-blur-md">
              <span className="text-md font-bold text-gray-300 text-center hover:text-gray-200 transition duration-300 cursor-pointer border border-black/20 p-1 rounded">Input Image</span>
              <span className="text-md font-bold text-gray-300 text-center hover:text-gray-200 transition duration-300 cursor-pointer border border-black/20 p-1 rounded">Output Images</span>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center relative mt-8 bg-slate-900">

            {
              (syncing) && (
                <div className='w-full h-full absolute z-9999 flex items-center justify-center'>
                  <Lottie options={defaultOptions}
                    height={300}
                    width={300}
                  // isStopped={this.state.isStopped}
                  // isPaused={this.state.isPaused}
                  />
                </div>
              )
            }

            {/* <ReactCompareSlider className='absolute inset-0 bg-cover bg-center'
              itemOne={<img className='w-full h-full' src="https://images.unsplash.com/photo-1646189985810-b2adb304d18f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" srcSet="https://images.unsplash.com/photo-1646189985810-b2adb304d18f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image one" />}
              itemTwo={<img className='h-full object-fill' src="https://images.unsplash.com/photo-1657662960615-8cbbda110742?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" srcSet="https://images.unsplash.com/photo-1657662960615-8cbbda110742?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image two" />}
            /> */}
            <ReactCompareSlider
              className="absolute h-full"
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




            {/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1646189985810-b2adb304d18f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div> */}
            <span className="absolute top-4 left-4 text-3xl font-bold text-white bg-black/50 p-2 rounded">Input Image</span>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
              <div className="w-full bg-white/30 backdrop-blur-md border border-white/20 rounded-full h-2">
                <div
                  className="bg-white/60 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              {/* Add play button before the "Apply Backgrounds" text */}
              <div 
                className="flex items-center justify-center cursor-pointer bg-white/30 backdrop-blur-md border border-white/20 rounded-full p-2 hover:bg-white/50 transition-all"
                onClick={togglePlayPause}
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
              </div>

              <span className="text-lg font-semibold text-center text-white bg-black/50 p-2 rounded w-full max-w-full break-words">Apply Backgrounds</span>

              <div className='flex gap-5 border rounded-md'>
                <img src={videoState.image1} onClick={() => { setSubVideo1(0); setCurrentSelection(1) }} className={`w-10 h-10 bg-green-700 border-2 border-white cursor-pointer ${(currentSelection == 1) && 'border-4'}`} />
                <img src={videoState.image2} onClick={() => { setSubVideo1(1); setCurrentSelection(2) }} className={`w-10 h-10 bg-green-700 border-2 border-white cursor-pointer ${(currentSelection == 2) && 'border-4'}`} />
                <img src={videoState.image3} onClick={() => { setSubVideo1(2); setCurrentSelection(3) }} className={`w-10 h-10 bg-green-700 border-2 border-white cursor-pointer ${(currentSelection == 3) && 'border-4'}`} />
              </div>

              <div className="flex space-x-4">
                <button className="bg-white/30 backdrop-blur-md border border-white/20 text-lg font-semibold text-white hover:bg-white/50 transition duration-300 rounded-lg px-6 py-2 cursor-pointer w-32">
                  Previous
                </button>
                <button className="bg-white/30 backdrop-blur-md border border-white/20 text-lg font-semibold text-white hover:bg-white/50 transition duration-300 rounded-lg px-6 py-2 cursor-pointer w-32">
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap flex-row w-1/2 rounded-lg overflow-hidden">
            {renderThumbnailPair(0, () => handleClick(0, 0))}
            {renderThumbnailPair(1, () => handleClick(1, 0))}
            {renderThumbnailPair(2, () => handleClick(2, 0))}
            {renderThumbnailPair(3, () => handleClick(3, 0))}
          </div>
        </div>
      </div>

      <Youtube />
      <Pricing />
    </>

  );
}

export default BgReplace