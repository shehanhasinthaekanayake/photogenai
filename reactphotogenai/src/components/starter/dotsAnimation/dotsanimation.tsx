import { component$, useVisibleTask$, $, useSignal } from '@builder.io/qwik';
import type { QwikMouseEvent } from '@builder.io/qwik';
import anime from 'animejs';

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;
const TOTAL_DOTS = GRID_WIDTH * GRID_HEIGHT;

export default component$(() => {
  return (
    <div class="relative grid place-content-center px-8 py-12">
      <DotGrid />
    </div>
  );
});

const DotGrid = component$(() => {
  const containerRef = useSignal<Element>();

  // Function to trigger animation at a specific index
  const triggerAnimation = $((index: number) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: index,
      }),
    });
  });

  // Initialize anime.js and start random animations
  useVisibleTask$(({ cleanup }) => {
    if (!containerRef.value) return;

    // Start the interval for random animations
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * TOTAL_DOTS);
      triggerAnimation(randomIndex);
    }, 5000);

    // Cleanup interval on component unmount
    cleanup(() => clearInterval(intervalId));
  });

  const handleDotClick = $((e: QwikMouseEvent) => {
    const target = e.target as HTMLElement;
    const index = target.dataset.index;
    triggerAnimation(Number(index));
  });

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          class="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            class="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-[#FFD700]/50 to-white/30 opacity-50 
                   group-hover:from-[#FFD700] group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      ref={containerRef}
      onClick$={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      class="grid w-full h-full"
    >
      {dots}
    </div>
  );
});