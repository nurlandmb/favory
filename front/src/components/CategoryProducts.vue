<script setup>
import { watch, ref } from 'vue';

const props = defineProps(['category']);
const activeCategory = ref('all');
const allProducts = Object.values(props.category.products).flat(1);
const filteredProducts = ref(allProducts);
const changeCategory = (category) => {};
watch(activeCategory, (newVal) => {
  if (newVal === 'all') {
    filteredProducts.value = allProducts;
  } else {
    filteredProducts.value = allProducts.filter(
      (item) => item.subcategory === newVal
    );
  }
});
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
<template>
  <section class="products">
    <h2 class="products__title">{{ props.category.category }}</h2>
    <nav class="products__nav">
      <button
        class="products__nav-btn"
        :class="{ active: 'all' === activeCategory }"
        @click="() => (activeCategory = 'all')"
      >
        Все
      </button>
      <button
        class="products__nav-btn"
        v-for="subcategory in Object.keys(props.category.products)"
        :class="{ active: subcategory === activeCategory }"
        @click="() => (activeCategory = subcategory)"
      >
        {{ subcategory }}
      </button>
    </nav>
    <swiper
      :breakpoints="{
        320: { slidesPerView: 1.5 },
        500: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1100: { slidesPerView: 4 },
      }"
      :pagination="pagination"
      space-between="30"
      class="products__list"
      :watch-overflow="true"
      :autoplay="{ delay: 3000 }"
    >
      <swiper-slide
        class="products__list-item product"
        v-for="product in filteredProducts"
      >
        <button @click="$emit('openPopup', product)">
          <div class="product__img">
            <img :src="product.images.find(img => img.isMain).src" :alt="product.title" />
          </div>

          <h3 class="product__name">{{ product.title }}</h3>
          <p class="product__price">
            {{ product.price.toLocaleString('ru-RU') }} ₸
          </p>
        </button>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>

    <!-- <ul class="products__list">
      <li
        class="products__list-item product"
        v-for="product in filteredProducts"
      >
        <button @click="$emit('openPopup', product)">
          <img
            :src="product.img.small"
            :alt="product.title"
            class="product__img"
          />
          <h3 class="product__name">{{ product.title }}</h3>
          <p class="product__price">
            {{ product.price.toLocaleString('ru-RU') }} ₸
          </p>
        </button>
      </li>
    </ul> -->
  </section>
</template>
<style>
.products {
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding: 44px 0;
}
.products__title {
  font-weight: 400;
  margin-bottom: 44px;
  font-size: 24px;
}
.products__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.products__nav-btn {
  background: transparent;
  border: none;
  color: #adadad;
  text-transform: uppercase;
  font-weight: 400;
  transition: color 0.3s;
}
.products__nav-btn:hover {
  color: var(--color-black);
}
.products__nav-btn.active {
  font-weight: 700;
  color: var(--color-black);
}
.products__nav-btn:not(:last-child) {
  margin-right: 37px;
}
.products__list {
  list-style: none;
  gap: 20px;
}
.products .swiper-pagination {
  text-align: center;
  position: relative;
}
.products .swiper-pagination-bullet {
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
.products .swiper-pagination-bullet-active {
  width: 16px;
  height: 6px;
  opacity: 1;
}
.products .product {
  padding: 20px 0;
  overflow: visible;
  min-width: 200px;
  font-family: 'Sen', sans-serif;
}
.products .product:nth-child(even) {
  /* transform: translateY(-40px); */
}
.products .product button {
  border: none;
  background: transparent;
}
.products .product:hover .product__img {
  transform: scale(1.1);
}
.products .product__img {
  margin-bottom: 18px;
  transition: transform 0.3s;
  max-width: 100%;
  max-height: 300px;
}
.products .product__img img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 15px;
}
.products .product__name {
  font-weight: 400;
  margin-bottom: 2px;
  font-size: 16px;
}
@media (max-width: 940px) {
  .products {
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
  }
  .products__title{
      
  }
  .products .products__nav {
    overflow: scroll hidden;
    justify-content: start;
    padding: 0 32px;
    margin-bottom: 44px;
  }
  .products .products__nav::-webkit-scrollbar,
  .products .products__list::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .products .products__nav,
  .products .products__list {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .products .products__nav-btn {
    white-space: nowrap;
  }
  .products .products__title {
    margin-bottom: 28px;
  }
  .products .products__list {
    padding: 20px 32px 0;
    /* overflow: scroll hidden; */
  }
  .products .products .product:nth-child(even) {
    /* transform: translateY(-20px); */
  }
}
</style>
