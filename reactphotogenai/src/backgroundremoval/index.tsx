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

const BgReplace = () => {

  const [video1, setVideo1] = useState<string>(video1Import);
  const [video2, setVideo2] = useState<string>(video2Import);
  const [syncing, setSyncing] = useState<boolean>(false);

  const [currentSelection, setCurrentSelection] = useState<number>(1);

  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
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

  const handleClick = (bundleId: number, itemId: number): void => {
    // Reset loading states when changing videos
    setVideosLoading(true);
    setLoadingStatus({ video1: false, video2: false });

    if (video1Ref.current && video2Ref.current) {
      setSyncing(true);
      video1Ref.current.pause();
      video2Ref.current.pause();
      const currentTime = video1Ref.current.currentTime;

      setVideoState((prevState: any) => ({
        ...prevState,
        currentSelection: { bundleId, itemId },
        video1: videoState?.bundles?.[bundleId].video1,
        video2: videoState?.bundles?.[bundleId].items?.[itemId].video,
        image1: videoState?.bundles?.[bundleId].items?.[0].image,
        image2: videoState?.bundles?.[bundleId].items?.[1].image,
        image3: videoState?.bundles?.[bundleId].items?.[2].image,
      }));

      setVideo1(videoState?.bundles?.[bundleId].video1);
      setVideo2(videoState?.bundles?.[bundleId].items?.[itemId].video);

      // Wait for both videos to load before playing
      const checkAndPlayVideos = () => {
        if (!videosLoading) {
          if (video1Ref.current && video2Ref.current) {
            video1Ref.current.currentTime = currentTime;
            video2Ref.current.currentTime = currentTime;
            video1Ref.current.play();
            video2Ref.current.play();
            setSyncing(false);
          }
        }
      };

      // Watch for loading state changes
      const loadingInterval = setInterval(() => {
        if (!videosLoading) {
          checkAndPlayVideos();
          clearInterval(loadingInterval);
        }
      }, 100);
    }
  };


  const setSubVideo1 = (itemId: number): void => {
    setSyncing(true)
    
    if (video1Ref.current && video2Ref.current) {
      
      video1Ref.current.pause();
      video2Ref.current.pause();
    }
    setVideoState((prevState: any) => ({
      ...prevState,
      currentSelection: { bundleId: prevState.currentSelection.bundleId, itemId }
    }));
    setVideo2(videoState?.bundles?.[videoState?.currentSelection?.bundleId]?.items?.[itemId]?.video)
    
    if (video1Ref.current && video2Ref.current) {
      const currentTime = video1Ref.current.currentTime; // Get the current playback time

     // Sync the current time for both videos
     video1Ref.current.currentTime = currentTime;
     video2Ref.current.currentTime = currentTime;

    }
     setTimeout(() => {
       if (video1Ref.current && video2Ref.current) {
         
   

        // Play both videos
        video1Ref.current.play();
        video2Ref.current.play();
        setSyncing(false)

      }
    }, 1000); // Small delay to ensure refs are updated

  }

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

  useEffect(() => {
    const syncVideos = () => {
      if (video1Ref.current && video2Ref.current) {
        const time1 = video1Ref.current.currentTime;
        const time2 = video2Ref.current.currentTime;
        const timeDiff = Math.abs(time1 - time2);

        // If videos are out of sync by more than 0.1 seconds
        if (timeDiff > 0.1) {
          video2Ref.current.currentTime = time1;
        }

        // Update progress
        const duration = video1Ref.current.duration || 1;
        setProgress((time1 / duration) * 100);
      }
    };

    const handleVideoEnd = () => {
      if (video1Ref.current && video2Ref.current) {
        // Reset both videos to start
        video1Ref.current.currentTime = 0;
        video2Ref.current.currentTime = 0;
        
        // Play both videos
        Promise.all([
          video1Ref.current.play(),
          video2Ref.current.play()
        ]).catch(error => console.log("Error restarting videos:", error));
      }
    };

    const handleVideoEvents = (event: string) => {
      if (!video1Ref.current || !video2Ref.current) return;

      switch (event) {
        case 'play':
          video2Ref.current.play();
          syncVideos();
          break;
        case 'pause':
          video2Ref.current.pause();
          syncVideos();
          break;
        case 'seeking':
          video2Ref.current.currentTime = video1Ref.current.currentTime;
          break;
        case 'waiting':
          video2Ref.current.pause();
          break;
        case 'playing':
          video2Ref.current.play();
          syncVideos();
          break;
        case 'ended':
          handleVideoEnd();
          break;
      }
    };

    if (video1Ref.current && video2Ref.current) {
      const video1 = video1Ref.current;
      const video2 = video2Ref.current;

      video1.playbackRate = 1;
      video2.playbackRate = 1;

      // Add event listeners with better error handling
      const events = ['play', 'pause', 'seeking', 'waiting', 'playing', 'ended'];
      events.forEach(event => {
        video1.addEventListener(event, () => handleVideoEvents(event));
      });

      // Sync videos every 100ms
      const syncInterval = setInterval(syncVideos, 100);

      // Cleanup function
      return () => {
        events.forEach(event => {
          video1.removeEventListener(event, () => handleVideoEvents(event));
        });
        clearInterval(syncInterval);
      };
    }
  }, []);

  // Modify the generateThumbnail function to handle loading better
  const generateThumbnail = (videoUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.src = videoUrl;
      video.crossOrigin = 'anonymous';
      video.preload = 'metadata';
      
      video.onloadedmetadata = () => {
        video.currentTime = 0;
      };
      
      video.onseeked = () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth || 640;  // fallback width
        canvas.height = video.videoHeight || 360; // fallback height
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', 0.8));
        } else {
          resolve(''); // Fallback if context creation fails
        }
      };

      video.onerror = () => {
        console.error('Error loading video for thumbnail:', videoUrl);
        resolve(''); // Fallback if video loading fails
      };
    });
  };

  // Update the loadThumbnails function to handle errors better
  useEffect(() => {
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
      } catch (error) {
        console.error('Error generating thumbnails:', error);
      }
    };

    loadThumbnails();
  }, [videoState.bundles]); // Add dependency on bundles to ensure thumbnails update if videos change

  // Update the thumbnail display JSX to include loading states and error handling
  const renderThumbnailPair = (bundleIndex: number, onClick: () => void): JSX.Element => {
    const bundleKey = `bundle${bundleIndex}` as keyof typeof videoThumbnails;
    const thumbnails = videoThumbnails[bundleKey];
    
    return (
      <div className="w-1/2 p-1 relative cursor-pointer hover:opacity-90" onClick={onClick}>
        <div className="flex h-full bg-gray-800">
          {thumbnails.original ? (
            <img 
              className="w-1/2 h-full object-cover" 
              src={thumbnails.original} 
              alt={`Original video ${bundleIndex + 1}`}
            />
          ) : (
            <div className="w-1/2 h-full flex items-center justify-center bg-gray-700">
              Loading...
            </div>
          )}
          {thumbnails.modified ? (
            <img 
              className="w-1/2 h-full object-cover" 
              src={thumbnails.modified} 
              alt={`Modified video ${bundleIndex + 1}`}
            />
          ) : (
            <div className="w-1/2 h-full flex items-center justify-center bg-gray-700">
              Loading...
            </div>
          )}
        </div>
        <span className="absolute top-4 left-4 mt-8 text-3xl font-bold text-white bg-black/50 p-2 rounded">
          Output variation {bundleIndex + 1}
        </span>
      </div>
    );
  };

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
                  {videosLoading && (
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
                    src={video1}
                    autoPlay
                    muted
                    ref={video1Ref}
                    onLoadedData={() => handleVideoLoad('video1')}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              }
              itemTwo={
                <div className="relative w-full h-full">
                  {videosLoading && (
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
                    src={video2}
                    autoPlay
                    muted
                    ref={video2Ref}
                    onLoadedData={() => handleVideoLoad('video2')}
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