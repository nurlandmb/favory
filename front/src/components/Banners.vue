<template>
  <section class="banners">
    <div class="swiper-pagination"></div>
    <swiper
      :breakpoints="{ 600: { slidesPerView: 1 }, 900: { slidesPerView: 1.2 } }"
      space-between="30"
      :centered-slides="true"
      :pagination="pagination"
      class="pagination-slider"
      :auto-height="true"
    >
      <swiper-slide v-for="banner in props.banners">
        <img :src="banner.src" />
      </swiper-slide>
    </swiper>
  </section>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps(['banners']);
</script>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination } from 'swiper/core';
// Import Swiper styles
import 'swiper/swiper.min.css';

// import 'swiper/modules/pagination/pagination.min.css';

SwiperCore.use([Pagination]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
    };
  },
};
</script>
<style>
.banners {
  margin-bottom: 70px;
}
.banners .swiper-pagination {
  text-align: center;
}
.banners .swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  display: inline-block;
  background: var(--color-black);
  opacity: 0.2;
  transition: all 0.3s;
  border-radius: 14px;
  margin: 0 6px;
  cursor: pointer;
}
.banners .swiper-pagination-bullet-active {
  width: 16px;
  height: 6px;
  opacity: 1;
}
.banners .swiper-slide-prev,
.banners .swiper-slide-next {
  opacity: 0.5;
}
.banners .swiper-slide-active {
  opacity: 1;
}
.banners .swiper-slide,
.banners .swiper-slide-active,
.banners .swiper-slide-prev,
.banners .swiper-slide-next {
  overflow: hidden;
}
.banners .swiper-slide{
  max-height: 70vh;
}
.banners .swiper-slide img,
.banners .swiper-slide-active img,
.banners .swiper-slide-prev img,
.banners .swiper-slide-next img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
}
@media (max-width: 768px) {
  .banners {
    margin: 0 5% 53px;
    max-height: 400px;
  }
}
</style>
