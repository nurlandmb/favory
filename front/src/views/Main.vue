<script setup>
import { onMounted, ref, watch } from 'vue';
import About from '../components/About.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import CategoryProducts from '../components/CategoryProducts.vue';
import MobileLinks from '../components/MobileLinks.vue';
import Banners from '../components/Banners.vue';
import Popup from '../components/Popup.vue';
import Loader from '../components/Loader.vue'
import $api from '../https';
let isPopupActive = ref(false);
let popupProduct = ref(null);
let isBannersLoading = ref(true);
let isProductsLoading = ref(true);
let categories = ref();
let banners = ref([]);
const getProducts = async () => {
  try {
    const { data } = await $api.get('/byCategories');
    categories.value = data;
    isProductsLoading.value = false;

  } catch (error) {
    console.log(error);
  }
};
const getBanners = async () => {
  try {
    const { data } = await $api.get('/banner/all');
    banners.value = data;
    isBannersLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};
const closePopup = () => {
  isPopupActive.value = false;
  popupProduct.value = null;
};
const openPopup = (product) => {
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
  getBanners();
});
</script>
<template>
  <!-- <Popup :active="isPopupActive" @close="closePopup" :product="popupProduct" /> -->
  <Header />
  <Loader v-if="isBannersLoading" />
  <Banners v-else :banners="banners" />
   <About />
  <Loader v-if="isProductsLoading" />
  <CategoryProducts
    v-else
    @open-popup="openPopup"
    v-for="category in categories"

    :category="category"
    />
   <MobileLinks />
  <Footer /> -->
</template>
