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
    <div class="carousel-container overflow-hidden px-10">
      <swiper-container
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grab-cursor="true"
        centered-slides="true"
        slides-per-view="auto"
        loop="true"
        autoplay-delay="3000"
        coverflow-effect-rotate="10"
        coverflow-effect-stretch="0"
        coverflow-effect-depth="100"
        coverflow-effect-modifier="1"
        coverflow-effect-slide-shadows="true"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="movie-slide">
            <img src="https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg" alt="Guardians of the Galaxy" />
            <div class="movie-content">
              <h2>Guardians of the Galaxy</h2>
              <p>A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="movie-slide">
            <img src="https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg" alt="Guardians of the Galaxy" />
            <div class="movie-content">
              <h2>Guardians of the Galaxy</h2>
              <p>A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="movie-slide">
            <img src="https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg" alt="Guardians of the Galaxy" />
            <div class="movie-content">
              <h2>Guardians of the Galaxy</h2>
              <p>A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="movie-slide">
            <img src="https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg" alt="Guardians of the Galaxy" />
            <div class="movie-content">
              <h2>Guardians of the Galaxy</h2>
              <p>A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="movie-slide">
            <img src="https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg" alt="Guardians of the Galaxy" />
            <div class="movie-content">
              <h2>Guardians of the Galaxy</h2>
              <p>A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="movie-slide">
            <img src="https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg" alt="Guardians of the Galaxy" />
            <div class="movie-content">
              <h2>Guardians of the Galaxy</h2>
              <p>A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="movie-slide">
            <img src="https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg" alt="Guardians of the Galaxy" />
            <div class="movie-content">
              <h2>Guardians of the Galaxy</h2>
              <p>A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
            </div>
          </div>
        </swiper-slide>
        {/* Add more slides similarly */}
      </swiper-container>
    </div>
  );
});
