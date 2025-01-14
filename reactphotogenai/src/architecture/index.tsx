// import type { DocumentHead } from '@builder.io/qwik-city';
// import { register } from 'swiper/element/bundle';
// import WaterDropGrid from '~/components/starter/dotsAnimation/dotsanimation';

// import Swiper from '~/components/starter/swiper/swiper';
// import { MouseBackground } from '~/components/starter/mouseBackground/MouseBackground';
import logo from '../2.33x/Asset 3.png'
import { Pricing } from '../components/pricing/pricing';
import { Youtube } from '../components/tutorial/youtube';

const Architecture = () => {
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
          <div className="w-1/2 flex items-center justify-center relative mt-8">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1646189985810-b2adb304d18f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
            <span className="absolute top-4 left-4 text-3xl font-bold text-white bg-black/50 p-2 rounded">Input Image</span>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
              <span className="text-lg font-semibold text-white bg-black/50 p-2 rounded w-full max-w-full break-words">Your descriptive text prompt goes here Your descriptive text prompt goes here Your descriptive text prompt goes here Your descriptive text prompt goes here</span>
              <div className="w-full bg-white/30 backdrop-blur-md border border-white/20 rounded-full h-2">
                <div className="bg-white/60 h-2 rounded-full" style={{ width: '50%' }}></div>
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
            <div className="w-1/2 p-1 relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1657662960615-8cbbda110742?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
              <span className="absolute top-4 left-4 mt-8 text-3xl font-bold text-white bg-black/50 p-2 rounded">Output variation Image 1</span>
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white bg-black/50 p-1 rounded">Description for Image 1</span>
            </div>
            <div className="w-1/2 p-1 relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1622649440998-772d29680c57?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
              <span className="absolute top-4 left-4 mt-8 text-3xl font-bold text-white bg-black/50 p-2 rounded">Output variation Image 2</span>
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white bg-black/50 p-1 rounded">Description for Image 2</span>
            </div>
            <div className="w-1/2 p-1 relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1713907908481-ad7a7b0d1085?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
              <span className="absolute top-4 left-4 mt-8 text-3xl font-bold text-white bg-black/50 p-2 rounded">Output variation Image 3</span>
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white bg-black/50 p-1 rounded">Description for Image 3</span>
            </div>
            <div className="w-1/2 p-1 relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1654897385787-be5a68dfdb88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
              <span className="absolute top-4 left-4 mt-8 text-3xl font-bold text-white bg-black/50 p-2 rounded">Output variation Image 4</span>
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white bg-black/50 p-1 rounded">Description for Image 4</span>
            </div>
          </div>
        </div>
      </div>

      <Youtube/>
      <Pricing/>
    </>

  );
}

export default Architecture