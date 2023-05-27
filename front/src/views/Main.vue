<script setup>
import { onMounted, ref, watch } from 'vue';
import About from '../components/About.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import CategoryProducts from '../components/CategoryProducts.vue';
import MobileLinks from '../components/MobileLinks.vue';
import Banners from '../components/Banners.vue';
import Popup from '../components/Popup.vue';
import $api from '../https';
let isPopupActive = ref(false);
let popupProduct = ref(null);
let categories = ref();
const getProducts = async () => {
  try {
    const { data } = await $api.get('/byCategories');
    categories.value = data;
  } catch (error) {
    console.log(error);
  }
};
const closePopup = () => {
  isPopupActive.value = false;
  popupProduct.value = null;
};
const openPopup = (product) => {
  console.log(product);
  popupProduct.value = product;
  isPopupActive.value = true;
};
watch(isPopupActive, async (newStatus) => {
  if (newStatus) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
onMounted(() => {
  getProducts();
});
</script>
<template>
  <Popup :active="isPopupActive" @close="closePopup" :product="popupProduct" />
  <Header />
  <Banners />
  <About />

  <CategoryProducts
    @open-popup="openPopup"
    v-for="category in categories"
    :category="category"
  />
  <MobileLinks />
  <Footer />
</template>
