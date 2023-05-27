<script setup>
import { watch } from 'vue';
import MobileLinks from './MobileLinks.vue';
const props = defineProps(['active', 'product']);
const emits = defineEmits(['close'])
console.log(props.product);
</script>
<template>
  <div
    class="overflow"
    @click="$emit('close')"
    :class="{ active: props.active }"
  ></div>
  <div
    class="wrapper"
    @click="$emit('close')"
    v-if="props.active"
    :class="{ active: props.active }"
  >
    <div class="popup" @click.stop>
      <button class="close" @click="$emit('close')">
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
      </button>
      <div class="popup__img">
        <img :src="props.product.img.full" alt="" />
      </div>
      <div class="popup__content">
        <h3 class="popup__title">{{ props.product.title }}</h3>
        <p class="popup__code">{{ props.product.sku }}</p>
        <p class="popup__info">Характеристики</p>
        <ul class="popup__list">
          <li class="popup__list-item"><span>Вес</span>{{ props.product.info.weight }}</li>
          <li class="popup__list-item"><span>Вставка</span>{{ props.product.info.setting }}</li>
          <li class="popup__list-item"><span>Металл</span>{{ props.product.info.metal }}</li>
          <li class="popup__list-item"><span>Проба</span>{{ props.product.info.content }}</li>
          <li class="popup__list-item"><span>Коллекция</span>{{ props.product.info.collection }}</li>
          <li class="popup__list-item"><span>Гарантия</span>{{ props.product.info.warranty }}</li>
        </ul>
        <p class="popup__price">Цена: {{ props.product.price.toLocaleString('ru-RU') }} ₸</p>
      </div>
    </div>
    <MobileLinks inpopup="true" @click.stop />
  </div>
</template>
<style scoped>
.overflow {
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}
.overflow.active,
.wrapper.active {
  opacity: 1;
  visibility: visible;
}
.wrapper::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.wrapper {
  overflow: scroll;
  min-height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  padding: 30px 0;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  max-width: 892px;
  margin: 0 auto;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}
.popup {
  position: relative;
  padding: 36px 79px 50px 27px;
  background-color: #fff;
  border: 1px solid #adadad;
  border-radius: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 25px;
}
.close {
  position: absolute;
  top: 11px;
  right: 10px;
  background: transparent;
  border: none;
}
.popup__img{
  flex: 0 0 50%;
}
.popup__img img{
  max-width: 100%;
}
.popup__content{
  flex: 0 0 45%;
}
.popup__title {
  font-weight: 400;
  font-size: 32px;
  margin-bottom: 15px;
}
.popup__code {
  font-family: 'Avenir', sans-serif;
  font-weight: 900;
  font-size: 16px;
  text-transform: uppercase;
  padding-bottom: 19px;
  color: #adadad;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 20px;
}
.popup__info {
  font-family: 'Avenir', sans-serif;
  font-weight: 900;
  font-size: 16px;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 19px;
}
.popup__list {
  list-style: none;
  padding-bottom: 25px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 30px;
}
.popup__list-item {
  display: flex;
  align-items: center;
  font-family: 'Avenir', sans-serif;
  justify-content: space-between;
}
.popup__list-item span {
  font-weight: 900;
  font-size: 14px;
  color: #adadad;
}
.popup__price {
  font-family: 'Avenir', sans-serif;
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
  .popup {
    max-width: 90%;
    margin: 0 auto 20px;
    flex-direction: column;
    padding: 50px 20px;
    align-items: stretch;
  }
  .popup__content,
  .popup__img{
    flex: 0 0 100%;
  }
  .popup img {
    max-width: 100%;
  }
  .popup__content {
    flex-grow: 1;
  }
}
@media (max-width: 768px) {
  .popup {
    padding: 50px 17px 33px;
  }
  .popup__title {
    font-size: 24px;
  }
  .popup__info {
    font-size: 14px;
  }
}
</style>
