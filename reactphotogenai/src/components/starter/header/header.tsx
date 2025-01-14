import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';

export default component$(() => {
  return (
    <header class="fixed w-full top-0 z-50">
      <div class="relative backdrop-blur-md bg-white/10 border-b border-white/10 supports-[backdrop-filter]:bg-white/5 max-h-16">
        <div class="mx-auto max-w-7xl py-2 flex justify-between items-center">
          <div class="flex items-center relative">
            <div class="absolute -inset-1 bg-[#FFD700]/20 rounded-full blur-xl"></div>
            <a href="/" title="qwik" class="relative hover:scale-105 transition-transform duration-300">
              <QwikLogo height={35} width={100} />
            </a>
          </div>
          <div class="flex items-center gap-6">
            <ul class="flex gap-6">
              <li>
                <a href="https://qwik.builder.io/docs/components/overview/" 
                   target="_blank"
                   class="bg-gradient-to-r from-[#FFD700] via-yellow-400 to-white bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium">
                  Docs
                </a>
              </li>
              <li>
                <a href="https://qwik.builder.io/examples/introduction/hello-world/" 
                   target="_blank"
                   class="bg-gradient-to-r from-[#FFD700] via-yellow-400 to-white bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium">
                  Examples
                </a>
              </li>
              <li>
                <a href="https://qwik.builder.io/tutorial/welcome/overview/" 
                   target="_blank"
                   class="bg-gradient-to-r from-[#FFD700] via-yellow-400 to-white bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium">
                  Tutorials
                </a>
              </li>
            </ul>
            
            <div class="flex items-center gap-4">
              <button
                onClick$={() => {/* Implement Google OAuth */}}
                class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <img src="/google-icon.svg" alt="Google" class="w-5 h-5" />
                <span class="text-white">Sign in with Google</span>
              </button>
              
              {/* Add reCAPTCHA container */}
              <div id="g-recaptcha" data-size="compact" class="hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
