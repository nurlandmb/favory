<script setup>
import { onMounted, ref, watch } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import ProductPopup from '../components/ProductPopup.vue';
import $api from '../https';

const router = useRouter();

let isPopupActive = ref(false);
let popupProduct = ref({ info: {}, img: {} });
let isPopupEdit = ref(false);
let products = ref(null);
let categories = ref(null);
watch(isPopupActive, async (newStatus) => {
  if (newStatus) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
function closePopup() {
  isPopupEdit.value = false;
  popupProduct.value = { info: {}, img: {} };
  isPopupActive.value = false;
}

function openPopup(product = { info: {}, img: {} }, edit = false) {
  if (edit) {
    isPopupEdit.value = true;
    console.log('edit mode');
  }
  console.log();
  popupProduct.value = product;
  isPopupActive.value = true;
}
async function logout() {
  try {
    const response = await $api.post(`/logout`);
    localStorage.removeItem('favory-token');
    router.push('/login');
  } catch (error) {
    localStorage.removeItem('favory-token');
    router.push('/login');
  }
}
async function deleteProduct(e, product) {
  console.log(e.target.textContent);
  if (e.target.textContent.trim() == 'Удалить') {
    setTimeout(() => {
      e.target.textContent = 'Удалить';
    }, 3000)
    e.target.textContent = 'Вы уверены?';
  } else {
    try {
      await $api.delete('/delete', { id: product.id });
      await getProducts();
    } catch (error) {
      console.log(error);
    }
  }
}
async function getProducts() {
  const { data } = await $api.get('/all');
  products.value = data;
}
async function checkAuth() {
  try {
    const response = await $api.get(`http://localhost:5000/api/refresh`, {
      withCredentials: true,
    });
    localStorage.setItem('favory-token', response.data.accessToken);
  } catch (error) {
    localStorage.removeItem('favory-token');
    router.push('/login');
  }
}
onMounted(() => {
  checkAuth();
  getProducts();
});
</script>

<template>
  <ProductPopup
    :active="isPopupActive"
    @close="closePopup"
    :isEditing="isPopupEdit"
    :product="popupProduct"
    :loadProducts="getProducts"
  />
  <div>
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <a href="#" class="logo">
            <img src="../assets/logo.svg" alt="" />
          </a>
          <button class="header__logout" @click="logout">Выйти</button>
        </div>
      </div>
    </header>
    <section class="products">
      <div class="container">
        <div class="top">
          <h2 class="top__title">Все товары</h2>
          <button class="top__add" @click="() => openPopup()">Добавить</button>
        </div>
        <div class="products__list">
          
          <div v-for="product in products" class="product">
            <div class="product__img">
              <div class="product__category">{{product.category}}</div>

              <img :src="product.img.small" alt="" />
            </div>
            <h3 class="product__title">
              {{ product.title }}
            </h3>
            <div class="product__wrapper">
              <button
                class="product__button red"
                @click="(e) => deleteProduct(e, product)"
              >
                Удалить
              </button>
              <button
                class="product__button green"
                @click="() => openPopup(product, true)"
              >
                Редактировать
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.header {
  padding: 10px 0;
}
.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__logout {
  padding: 10px 20px;
  border-radius: 5px;
  background: transparent;
  border: 2px solid #cc0033;
  color: #cc0033;
  font-size: 20px;
  transition: all 0.3s;
}
.header__logout:hover {
  background: #cc0033;
  color: #fff;
}
.container {
  margin: 0 auto;
  width: 90%;
}
.top {
  display: flex;
  justify-content: space-between;
  margin: 10px 0 20px;
}
.top__title {
  font-weight: 400;
  font-size: 24px;
  color: #000;
}
.top__add {
  padding: 10px 20px;
  background: transparent;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s;
}
.top__add:hover {
  background: #000;
  color: #fff;
}
.products__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.product {
  text-align: center;
  border: 1px solid #000;
  padding: 10px;
  border-radius: 5px;
}
.product__img{
  position: relative;
}
.product__category{
  top: 10px;
  left: 10px;
  position: absolute;
  padding: 5px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
  color: #000;
}
.product__img img {
  max-width: 100%;
}
.product__title {
  margin-bottom: 10px;
  font-weight: 400;
}
.product__wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.product__button {
  padding: 5px;
  border-radius: 5px;
  background: transparent;
  border: 1px solid #000;
}
.product__button.red{
  border-color: #cc0033;
  color: #cc0033;
}
.product__button.green{
  color: #49734e;
  border-color: #49734e;
}
@media(max-width: 1100px){
  .products__list{
    grid-template-columns: repeat(3, 1fr);
  }
}
@media(max-width: 800px){
  .products__list{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media(max-width: 520px){
  .products__list{
    grid-template-columns: 1fr;
  }
}
</style>
