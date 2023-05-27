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
    <ul class="products__list">
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
    </ul>
  </section>
</template>
<style scoped>
.products {
  font-family: 'Avenir', sans-serif;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding: 44px 0;
}
.products__title {
  font-weight: 400;
  margin-bottom: 44px;
}
.products__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 118px;
}
.products__nav-btn {
  background: transparent;
  border: none;
  color: #adadad;
  text-transform: uppercase;
  font-weight: 900;
}
.products__nav-btn.active {
  font-weight: 900;
  color: var(--color-black);
}
.products__nav-btn:not(:last-child) {
  margin-right: 37px;
}
.products__list {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  list-style: none;
  gap: 20px;
}
.product:nth-child(even) {
  transform: translateY(-40px);
}
.product button {
  border: none;
  background: transparent;
}
.product:hover .product__img {
  transform: scale(1.1);
}
.product__img {
  margin-bottom: 18px;
  transition: transform 0.3s;
  max-width: 100%;
  max-height: 100%;
}
.product__name {
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
  .products__nav {
    overflow: scroll hidden;
    justify-content: start;
    padding: 0 32px;
    margin-bottom: 44px;
  }
  .products__nav::-webkit-scrollbar,
  .products__list::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .products__nav,
  .products__list {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .products__nav-btn {
    white-space: nowrap;
  }
  .products__title {
    margin-bottom: 28px;
  }
  .products__list {
    padding: 20px 32px 0;
    overflow: scroll hidden;
  }
  .product:nth-child(even) {
    transform: translateY(-20px);
  }
}
</style>
