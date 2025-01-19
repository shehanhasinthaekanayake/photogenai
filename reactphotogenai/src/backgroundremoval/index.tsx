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
import video4Import from './new sample vids/video2/green screen AnimateDiff22_00036.mp4'
import video5Import from './new sample vids/video2/background applied - Made with Clipchamp.mp4'
import video6Import from './new sample vids/video2/removed background video.mp4'
import video4BackgroundImport from './new sample vids/video2/green-screen-8k-ultra-hd-plus-free-photo.jpg'
import video5BackgroundImport from './new sample vids/video2/nikolai-lehmann-2Evzm2fwRH8-unsplash (1).jpg'
import video6BackgroundImport from './new sample vids/video2/transparent-background-4k-empty-grid-checkered-layout-wallpaper-free-vector.jpg'


import videoOriginal3Import from './new sample vids/video 5/original - Made with Clipchamp.mp4'
import video7Import from './new sample vids/video 5/greenscreen - Made with Clipchamp.mp4'
import video8Import from './new sample vids/video 5/background replaced - Made with Clipchamp.mp4'
import video9Import from './new sample vids/video 5/empty_banckground.mp4'
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


import Lottie from 'lottie-react';
import animationData from './new sample vids/Animation - 1736837185654.json'


// import video2 from './AnimateDiff22_00012-audio.mp4'
import { useRef, useEffect, useState } from 'react';

interface VideoItem {
  id: number;
  image: string;
  video: string;
}

interface VideoBundle {
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
  bundles: VideoBundle[];
}


const BgReplace = () => {

  const [video1, setVideo1] = useState<string>(video1Import);
  const [video2, setVideo2] = useState<string>(video2Import);
  const [videoPlayable, setVideoPlayable] = useState<any>({
    video1Playable: false,
    video2Playable: false
  });
  const [syncing, setSyncing] = useState(false);
  const [loadedPercentage, setLoadedPercentage] = useState<any>(0);


  const [, setCurrentSelection] = useState(1);

  const video1Ref = useRef<HTMLVideoElement>(null!);
  const video2Ref = useRef<HTMLVideoElement>(null!);
  const syncTimeoutRef = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);

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
          { id: 0, image: video1BackgroundImport, video: video1Import },
          { id: 1, image: video2BackgroundImport, video: video2Import },
          { id: 2, image: video3BackgroundImport, video: video3Import },
        ],
      },
      {
        bundleId: 1,
        video1: videoOriginal2Import,
        items: [
          { id: 0, image: video4BackgroundImport, video: video4Import },
          { id: 1, image: video5BackgroundImport, video: video5Import },
          { id: 2, image: video6BackgroundImport, video: video6Import },
        ],
      },
      {
        bundleId: 2,
        video1: videoOriginal3Import,
        items: [
          { id: 0, image: video7BackgroundImport, video: video7Import },
          { id: 1, image: video8BackgroundImport, video: video8Import },
          { id: 2, image: video9BackgroundImport, video: video9Import },
        ],
      },
      {
        bundleId: 3,
        video1: videoOriginal4Import,
        items: [
          { id: 0, image: video10BackgroundImport, video: video10Import },
          { id: 1, image: video11BackgroundImport, video: video11Import },
          { id: 2, image: video12BackgroundImport, video: video12Import },
        ],
      },
    ],
  });


  const updateBufferedPercentage = (videoRef:any, id:number) => {
    const video = videoRef;
    if (video) {
      const buffered = video.buffered;
      const duration = video.duration;

      // if (buffered.length > 0 && duration > 0) {
        const bufferedEnd = buffered.end(buffered.length - 1); // Last buffered range
        const percentage = (bufferedEnd / duration) * 100;

        if (id == 1 && (percentage > 50)) {
          console.log(percentage, id , " up")

          setVideoPlayable({
            ...videoPlayable,
            video1Playable: true
          })
        }
  
        if ((id == 2) && (percentage > 50)) {
          console.log(percentage, id , " up")
          setVideoPlayable({
            ...videoPlayable,
            video2Playable: true
          })
        }

        console.log(percentage.toFixed(2))
        setLoadedPercentage(percentage.toFixed(2));
      // }
    }
  };

  const handleClick = (bundleId: number, itemId: number) => {
    if (video1Ref.current && video2Ref.current) {
      setSyncing(true);

      // Pause both videos
      video1Ref.current.pause();
      video2Ref.current.pause();

      const currentTime = video1Ref.current.currentTime;

      // console.log("stop the video");

      // Update state with the new selection
      setVideoState((prevState) => ({
        ...prevState,
        currentSelection: { bundleId, itemId },
        video1: prevState.bundles[bundleId].video1,
        video2: prevState.bundles[bundleId].items[itemId]?.video || null,
        image1: prevState.bundles[bundleId].items[0]?.image || '',
        image2: prevState.bundles[bundleId].items[1]?.image || '',
        image3: prevState.bundles[bundleId].items[2]?.image || '',
      }));

      // Update the videos
      setVideo1(videoState.bundles[bundleId].video1);
      setVideo2(videoState.bundles[bundleId].items[itemId]?.video || '');

      // Delay updating the video refs
      setTimeout(() => {
        if (video1Ref.current && video2Ref.current) {
          video1Ref.current.currentTime = currentTime;
          video2Ref.current.currentTime = currentTime;


          const playVideo1 = video1Ref.current?.play();
          const playVideo2 = video2Ref.current?.play();

          playVideo1
            .then(() => {
              playVideo2?.catch((err) => {
                console.error("Video 2 play error:", err);
                video1Ref.current?.pause();
                video2Ref.current?.pause();
              });
            })
            .catch((err) => {
              console.error("Video 1 play error:", err);
              video1Ref.current?.pause();
              video2Ref.current?.pause();
            });


        }
      }, 1000);
    }
  };

  const setSubVideo1 = (itemId: number) => {
    setSyncing(true);

    if (video1Ref.current && video2Ref.current) {
      video1Ref.current.pause();
      video2Ref.current.pause();
    }

    setVideoState((prevState) => ({
      ...prevState,
      currentSelection: { bundleId: prevState.currentSelection.bundleId, itemId },
    }));

    const selectedVideo =
      videoState?.bundles?.[videoState.currentSelection.bundleId]?.items?.find(
        (item) => item.id === itemId
      )?.video || '';

    setVideo2(selectedVideo);


    if (video1Ref.current && video2Ref.current) {
      const currentTime = video1Ref.current.currentTime;

      video1Ref.current.currentTime = currentTime;
      video2Ref.current.currentTime = currentTime;
    }

    setTimeout(() => {
      if (video1Ref.current && video2Ref.current) {
        setTimeout(() => {
          const playVideo1 = video1Ref.current?.play();
          const playVideo2 = video2Ref.current?.play();

          playVideo1
            .then(() => {
              playVideo2?.catch((err) => {
                console.error("Video 2 play error:", err);
                video1Ref.current?.pause();
                video2Ref.current?.pause();
              });
            })
            .catch((err) => {
              console.error("Video 1 play error:", err);
              video1Ref.current?.pause();
              video2Ref.current?.pause();
            });
        }, 500);
        setSyncing(false);
      }
    }, 1000);
  };

  const handleBGChange = (par1:number, par2:number) => {

    setTimeout(() => {
      if (video1Ref.current && video2Ref.current) {
        setSubVideo1(par1)
        setCurrentSelection(par2)
        setSyncing(false);
         
            setVideoPlayable({
              ...videoPlayable,
              video1Playable: false,
              video2Playable: false
            })    
          
      }
    }, 100);


  }

  useEffect(() => {
    setVideo1(videoState?.bundles?.[1].video1)
    setVideo2(videoState?.bundles?.[1].items?.[0].video)

  }, [])


  useEffect(() => {
    const handleSync = () => {
      if (video1Ref.current && video2Ref.current) {

        let currentTime1 = video1Ref.current.currentTime;

        const currentTime2 = video2Ref.current.currentTime;

        if (Math.abs(currentTime1 - currentTime2) > 0.15) {
          // video1Ref.current.pause();
          // video2Ref.current.pause();
          currentTime1 = video1Ref.current.currentTime;
          video2Ref.current.currentTime = currentTime1;
          setTimeout(() => {
            const playVideo1 = video1Ref.current?.play();
            const playVideo2 = video2Ref.current?.play();

            playVideo1
              .then(() => {
                playVideo2?.catch((err) => {
                  console.error("Video 2 play error:", err);
                  setVideoPlayable({
                    ...videoPlayable,
                    video1Playable: false,
                    video2Playable: false
                  }) 
                });
              })
              .catch((err) => {
                console.error("Video 1 play error:", err);
                setVideoPlayable({
                  ...videoPlayable,
                  video1Playable: false,
                  video2Playable: false
                }) 
              });
          }, 100);

        }

        const duration = video1Ref.current.duration || 1;
        setProgress((currentTime1 / duration) * 100);
      }
    };

    const handlePlay = (id: any) => {

      if (id == 1) {
        setVideoPlayable({
          ...videoPlayable,
          video1Playable: true
        })
      }

      if (id == 2) {
        setVideoPlayable({
          ...videoPlayable,
          video2Playable: true
        })
      }

    };

    const handleStalled = (id: any) => {
      console.error("Video is stalled. Pausing playback.");

      if (id == 1) {
        setVideoPlayable({
          ...videoPlayable,
          video1Playable: false
        })
      }

      if (id == 2) {
        setVideoPlayable({
          ...videoPlayable,
          video2Playable: false
        })
      }

    };

    const handleError = (id: number) => {
      console.error("Error loading video. Pausing playback.");

      if (id == 1) {
        setVideoPlayable({
          ...videoPlayable,
          video1Playable: false
        })
      }

      if (id == 2) {
        setVideoPlayable({
          ...videoPlayable,
          video2Playable: false
        })
      }

    };

    const handleCanPlay = (id: number) => {
      console.log("Video is ready to play.");

      if (id == 1) {
        setVideoPlayable({
          ...videoPlayable,
          video1Playable: true
        })
      }

      if (id == 2) {
        setVideoPlayable({
          ...videoPlayable,
          video2Playable: true
        })
      }

    };

    const handleEnd = (id: number) => {
      if (video1Ref.current && video2Ref.current) {

        if (id == 1) {
          setVideoPlayable({
            ...videoPlayable,
            video1Playable: false
          })
        }

        if (id == 2) {
          setVideoPlayable({
            ...videoPlayable,
            video2Playable: false
          })
        }

        setTimeout(() => {
          const playVideo1 = video1Ref.current?.play();
          const playVideo2 = video2Ref.current?.play();

          playVideo1
            .then(() => {
              playVideo2?.catch((err) => {
                console.error("Video 2 play error:", err);
                video1Ref.current?.pause();
                video2Ref.current?.pause();
              });
            })
            .catch((err) => {
              console.error("Video 1 play error:", err);
              video1Ref.current?.pause();
              video2Ref.current?.pause();
            });
        }, 2000);
      }
    };

    if (video1Ref.current && video2Ref.current) {
      const video1 = video1Ref.current;
      const video2 = video2Ref.current;

      const throttledSync = () => {
        if (syncTimeoutRef.current) return;


        setTimeout(() => {
          handleSync();
          syncTimeoutRef.current = null;
        }, 200); // Adjust the interval as needed
      };


      video1.addEventListener("timeupdate", throttledSync);
      video2.addEventListener("timeupdate", throttledSync);

      video1.addEventListener("canplaythrough", () => {
        handleCanPlay(1)
      });
      video2.addEventListener("canplaythrough", () => {
        handleCanPlay(2)
      });

      video1.addEventListener("play", () => { handlePlay(1) });
      video2.addEventListener("play", () => { handlePlay(2) });

      video1.addEventListener("progress", () => {updateBufferedPercentage(video1, 1)});
      video2.addEventListener("loadeddata", () => {updateBufferedPercentage(video2, 2)});

      video1.addEventListener("stalled", () => { handleStalled(1) });
      video2.addEventListener("stalled", () => { handleStalled(2) });
      
      video1.addEventListener("error", () => { handleError(1) });
      video2.addEventListener("error", () => { handleError(2) });

      video1.addEventListener("ended", () => handleEnd(1));
      video2.addEventListener("ended", () => handleEnd(2));

      return () => {

        video1.removeEventListener("timeupdate", throttledSync);
        video2.removeEventListener("timeupdate", throttledSync);

        video1.removeEventListener("canplaythrough", () => {
          handleCanPlay(1)
        });
        video2.removeEventListener("canplaythrough", () => {
          handleCanPlay(2)
        });


        video1.removeEventListener("play", () => { handlePlay(1) });
        video2.removeEventListener("play", () => { handlePlay(2) });

        video1.removeEventListener("progress", () => {updateBufferedPercentage(video1, 1)});
        video2.removeEventListener("loadeddata", () => {updateBufferedPercentage(video2, 2)});

        video1.removeEventListener("stalled", () => { handleStalled(1) });
        video2.removeEventListener("stalled", () => { handleStalled(2) });
        
        video1.removeEventListener("error", () => { handleError(1) });
        video2.removeEventListener("error", () => { handleError(2) });

        video1.removeEventListener("ended", () => handleEnd(1));
        video2.removeEventListener("ended", () => handleEnd(2));

        if (syncTimeoutRef.current) {
          clearTimeout(syncTimeoutRef.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    console.log(videoPlayable.video1Playable,videoPlayable.video2Playable)
    if ( videoPlayable.video1Playable && videoPlayable.video2Playable) {
      // console.log("Both videos are ready and page is visible");
      setTimeout(() => {
        const playVideo1 = video1Ref.current?.play();
        const playVideo2 = video2Ref.current?.play();

        playVideo1
          .then(() => {
            playVideo2?.catch((err) => {
              console.error("Video 2 play error:", err);
              video1Ref.current?.pause();
              video2Ref.current?.pause();
            });
          })
          .catch((err) => {
            console.error("Video 1 play error:", err);
            video1Ref.current?.pause();
            video2Ref.current?.pause();
          });
      }, 200);
    } else {
      // console.log("Videos not ready or page not visible");
      // // setTimeout(() => {
      video1Ref.current?.pause();
      video2Ref.current?.pause();


      // }, 200);
    }
  }, [videoPlayable]);


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
                  {/* <Lottie options={defaultOptions}
                    height={300}
                    width={300}

                  // isStopped={this.state.isStopped}
                  // isPaused={this.state.isPaused}
                  /> */}
                  <Lottie height={300}
                    width={300} animationData={animationData} loop={true} />
                </div>
              )
            }


            <ReactCompareSlider
              className="absolute h-full"
              itemOne={
                <video
                  className="w-full h-full object-cover"
                  src={video1}
                  autoPlay
                  // loop
                  muted
                  playsInline
                  ref={video1Ref}
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>

              }
              itemTwo={
                <video
                  className="w-full h-full object-cover"
                  src={video2}
                  autoPlay
                  // loop
                  muted
                  playsInline
                  ref={video2Ref}
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
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
                <button onClick={() => { handleBGChange(0,0) }} className="bg-white/30 backdrop-blur-md border border-white/20 text-lg font-semibold text-white hover:bg-white/50 transition duration-300 rounded-lg px-6 py-2 cursor-pointer w-32">
                  green
                </button>
                <button onClick={() => { handleBGChange(1,1) }} className="bg-white/30 backdrop-blur-md border border-white/20 text-lg font-semibold text-white hover:bg-white/50 transition duration-300 rounded-lg px-6 py-2 cursor-pointer w-32">
                  BG
                </button>
                <button onClick={() => { handleBGChange(2,2) }} className="bg-white/30 backdrop-blur-md border border-white/20 text-lg font-semibold text-white hover:bg-white/50 transition duration-300 rounded-lg px-6 py-2 cursor-pointer w-32">
                  Empty
                </button>
                {/* <img src={videoState.image1} onClick={() => { setSubVideo1(0); setCurrentSelection(0) }} className={`w-10 h-10 bg-green-700 border-2 border-white cursor-pointer ${(currentSelection == 0) && 'border-4'}`} />
                <img src={videoState.image2} onClick={() => { setSubVideo1(1); setCurrentSelection(1) }} className={`w-10 h-10 bg-green-700 border-2 border-white cursor-pointer ${(currentSelection == 1) && 'border-4'}`} />
                <img src={videoState.image3} onClick={() => { setSubVideo1(2); setCurrentSelection(2) }} className={`w-10 h-10 bg-green-700 border-2 border-white cursor-pointer ${(currentSelection == 2) && 'border-4'}`} /> */}
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
            <div className="w-1/2 p-1 relative" onClick={() => handleClick(0, 0)}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1657662960615-8cbbda110742?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
              <span className="absolute top-4 left-4 mt-8 text-3xl font-bold text-white bg-black/50 p-2 rounded">Output variation Image 1</span>
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white bg-black/50 p-1 rounded">Description for Image 1</span>
            </div>
            <div className="w-1/2 p-1 relative" onClick={() => handleClick(1, 0)}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1622649440998-772d29680c57?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
              <span className="absolute top-4 left-4 mt-8 text-3xl font-bold text-white bg-black/50 p-2 rounded">Output variation Image 2</span>
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white bg-black/50 p-1 rounded">Description for Image 2</span>
            </div>
            <div className="w-1/2 p-1 relative" onClick={() => handleClick(2, 0)}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1713907908481-ad7a7b0d1085?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
              <span className="absolute top-4 left-4 mt-8 text-3xl font-bold text-white bg-black/50 p-2 rounded">Output variation Image 3</span>
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white bg-black/50 p-1 rounded">Description for Image 3</span>
            </div>
            <div className="w-1/2 p-1 relative" onClick={() => handleClick(3, 0)}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1654897385787-be5a68dfdb88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
              <span className="absolute top-4 left-4 mt-8 text-3xl font-bold text-white bg-black/50 p-2 rounded">Output variation Image 4</span>
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white bg-black/50 p-1 rounded">Description for Image 4</span>
            </div>
          </div>
        </div>
      </div>

      <Youtube />
      <Pricing />
    </>

  );
}

export default BgReplace















