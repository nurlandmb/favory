<script setup>
import { ref, watch } from 'vue';
import $api from '../https';
let props = defineProps(['active', 'product', 'isEditing', 'loadProducts', 'loadBanners']);
let emit = defineEmits(['close']);
let img = ref('');
let isLoading = ref(false);
let isImgLoading = ref(false);

function closePopup() {
  emit('close');
}
async function submitHandler(e) {
  const val = img.value
  if(!val.trim()){
    return alert('Изображение не выбрано');
  }
  isLoading.value = true;
  try {
    const { data } = await $api.post('/banner/create', { src: val });
    await props.loadBanners();
    closePopup();
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    console.log(error);
  }
}
async function imgUploadHandler(e) {
  isImgLoading.value = true;
  const file = e.target.files[0];
  const bodyFormData = new FormData();
  bodyFormData.append('file', file);
  try {
    const { data } = await $api.post('/upload', bodyFormData);
    img.value = data;
    isImgLoading.value = false;
  } catch (err) {
    console.log(err);
    isImgLoading.value = false;
  }
}
</script>
<template>
  <div
    class="overflow"
    @click="closePopup"
    :class="{ active: props.active }"
  ></div>
  <div class="popup" :class="{ active: props.active }">
    <button class="popup__close" @click="closePopup">
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
    <div class="img" v-if="img">
      <img :src="img" alt="picture" class="img__item" />
      <button @click="() => (img = null)">Удалить</button>
    </div>
    <form class="form" @submit.prevent="submitHandler">
      <label class="form__item" v-if="!img">
        <p class="form__descr" :class="{ loading: isImgLoading }">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <span>Выберите изображение</span>
        </p>
        <input
          class="form__file"
          v-on:change="(e) => imgUploadHandler(e)"
          type="file"
          accept=".jpg,.png"
          :disabled="isImgLoading"
        />
      </label>
      <button class="form__submit" :disabled="isLoading">Отправить</button>
    </form>
  </div>
</template>
<style scoped>
.overflow {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  z-index: 1;
}
.popup {
  width: 70%;
  max-width: 340px;
  position: fixed;
  top: 20px;
  bottom: 20px;
  left: 50%;
  height: 100%;
  max-height: 90vh;
  overflow: scroll;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 14px;
  padding: 50px 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  z-index: 2;
}
.popup.active,
.overflow.active {
  opacity: 1;
  visibility: visible;
}

.img {
  margin-bottom: 10px;
  position: relative;
}
.img img {
  max-width: 100%;
}
.img button {
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background: #fff;
  border: 1px solid #cc0033;
  color: #cc0033;
  transition: all 0.3s;
}
.img button:hover {
  background: #cc0033;
  color: #fff;
}
.popup::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.popup {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.popup__close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
}
.form__item {
  position: relative;
}
.form__file {
  display: none;
}
.form__submit {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  background: transparent;
  transition: all 0.3s;
}
.form__submit:hover {
  background: #000;
  color: #fff;
}
.form__submit:disabled {
  opacity: 0.5;
  cursor: wait;
  background: #000;
  color: #fff;
}
.form__descr {
  text-align: center;
  cursor: pointer;
  border: 1.5px solid #000;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
}
.form__descr.loading {
  opacity: 0.5;
  cursor: wait;
  background: #000;
  color: #fff;
}
.form__descr.loading svg {
  stroke: #fff;
}
.form__descr:hover {
  background: #000;
  color: #fff;
}
.form__descr svg {
  width: 50px;
  height: 50px;
  display: block;
  margin-right: 10px;
  stroke: #000;
  transition: stroke 0.2s;
}
.form__descr:hover svg {
  stroke: #fff;
}
@media (max-width: 500px) {
  .popup {
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    max-height: 100vh;
    max-width: 100vw;
    transform: translateX(0);
    border-radius: 0;
  }
}
</style>
