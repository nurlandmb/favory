<script setup>
import { watch } from 'vue';
import Header from '../components/Header.vue';
import Loader from '../components/Loader.vue';
import Footer from '../components/Footer.vue';
</script>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination } from 'swiper/core';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import $api from '../https';
// import 'swiper/modules/pagination/pagination.min.css';

SwiperCore.use([Pagination]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      product: null,
      isLoading: true,
    };
  },
  methods: {
    async fetchProduct() {
      try {
        const { data } = await $api.get(`/product/${this.$route.params.id}`);
        if (!data) {
          return alert('Что-то пошло не так');
        }
        this.product = data;
        this.isLoading = false;
      } catch (err) {
        alert('Что-то пошло не так');
      }
    },
  },
  async mounted() {
    await this.fetchProduct();
  },
};
</script>
<template>
  <Header />

  <!-- <div class="product__img"> -->
  <Loader v-if="isLoading" />
  <div v-else-if="!isLoading && product" class="product">
    <div class="product__wrapper">
      <swiper
        space-between="30"
        class="product__img"
        :pagination="{
          clickable: true,
        }"
        slidesPerView="1"
      >
        <swiper-slide class="products__list-item" v-for="img in product.images">
          <img :src="img.src" alt="" />
        </swiper-slide>
      </swiper>
      <div class="product__content">
        <router-link class="product__close" to="/">
          <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24.3474"
            y="7.47296"
            width="2.72731"
            height="23.864"
            transform="rotate(45 24.3474 7.47296)"
            fill="#BBBBBB"
          />
          <rect
            x="7.4729"
            y="9.40149"
            width="2.72731"
            height="23.864"
            transform="rotate(-45 7.4729 9.40149)"
            fill="#BBBBBB"
          />
        </svg>
        </router-link>
        <h3 class="product__title">{{ product.title }}</h3>
        <p class="product__metal">{{ product.info.metal }}</p>
        <p class="product__descr">
          {{ product.description }}
        </p>
        <p class="product__code">Артикул: {{ product.sku }}</p>
        <p class="product__info">Характеристики</p>
        <ul class="product__list">
          <li class="product__list-item">
            <span>Вес</span>{{ product.info.weight }}
          </li>
          <li class="product__list-item">
            <span>Вставка</span>{{ product.info.setting }}
          </li>
          <li class="product__list-item">
            <span>Металл</span>{{ product.info.metal }}
          </li>
          <li class="product__list-item">
            <span>Проба</span>{{ product.info.content }}
          </li>
          <li class="product__list-item">
            <span>Коллекция</span>{{ product.info.collection }}
          </li>
          <li class="product__list-item">
            <span>Гарантия</span>{{ product.info.warranty }}
          </li>
        </ul>
        <p class="product__price">
          Цена: {{ product.price.toLocaleString('ru-RU') }} ₸
        </p>
      </div>
    </div>
  </div>
  <Footer />
</template>
<style>
.product__img .swiper-pagination-bullet-active {
  background: #000;
}
.product__img .swiper-wrapper {
  align-items: center;
}
.product__img .swiper-slide {
  text-align: center;
  border: none;
}
</style>
<style scoped>
.product {
  border-top: 1px solid #d5d5d5;
  position: relative;
}
.product__wrapper {
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 50px;
}
.product__close {
  position: absolute;
  top: 20px;
  right: 50px;
  background: transparent;
  border: none;
}
.product__img {
  flex: 0 0 35%;
  max-width: 100%;
}

.product__img img {
  max-width: 100%;
  /* border-radius: 15px; */
}
.product__content {
  flex: 0 0 45%;
}
.product__title {
  font-weight: 400;
  font-size: 32px;
  margin-bottom: 15px;
}
.product__metal{
  margin-bottom: 20px;
  color: #cecece;
}
.product__descr{
  margin-bottom: 20px;
  color: #6c6c6c;
  font-size: 20px;
  font-style: italic;
}
.product__code {
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  padding-bottom: 19px;
  color: #cecece;
  margin-bottom: 20px;
}
.product__info {
  font-weight: 500;
  font-size: 20px;

  color: #cecece;
  margin-bottom: 19px;
}
.product__list {
  list-style: none;
  padding-bottom: 25px;
  margin-bottom: 30px;
}
.product__list-item {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-style: italic;
  font-weight: normal;
  color: #474747;
}
.product__list-item span {
  font-weight: 500;
  flex: 0 1 200px;
  /* color: #adadad; */
}
.product__price {
  font-size: 24px;
  text-transform: uppercase;
  color: #000000;
}
@media (max-width: 1200px) {
  .wrapper {
    width: 80%;
  }
}
@media (max-width: 900px) {
  .wrapper {
    width: 100%;
    padding: 30px 0 0;
  }
  .product__wrapper {
    max-width: 90%;
    margin: 0 auto 20px;
    flex-direction: column;
    align-items: stretch;
  }
  .product__close{
    background-color: #fff;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    top: 25px;
    z-index: 11;
  }
  .product__close rect{
    fill: #000;
  }
  .product__content,
  .product__img {
    flex: 0 0 100%;
  }
  .popup img {
    max-width: 100%;
  }
  .product__content {
    flex-grow: 1;
  }
}
@media (max-width: 768px) {
  .popup {
    padding: 50px 17px 33px;
  }
  .product__title {
    font-size: 24px;
  }
}
</style>
