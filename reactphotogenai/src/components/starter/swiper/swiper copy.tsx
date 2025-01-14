// src/components/3DCarousel.tsx
import { component$, useVisibleTask$ } from '@builder.io/qwik';
import './swiper-bundle.min.css';
import './carousole.css';
import { register } from 'swiper/element/bundle';

// Import Swiper modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';

export default component$(() => {
  useVisibleTask$(() => {
    register();
  });

  return (
    <div class="carousel-container overflow-hidden">
      <swiper-container
        effect="coverflow"
        grab-cursor="true"
        centered-slides="true"
        slides-per-view="auto"
        loop="true"
        autoplay-delay="3000"
        coverflow-effect-rotate="50"
        coverflow-effect-stretch="0"
        coverflow-effect-depth="100"
        coverflow-effect-modifier="1"
        coverflow-effect-slide-shadows="true"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
});
