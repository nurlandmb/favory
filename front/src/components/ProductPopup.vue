<script setup>
import { onMounted, ref, watch } from 'vue';
import $api from '../https';

const props = defineProps(['active', 'product', 'isEditing', 'loadProducts']);
const emit = defineEmits(['close']);
const categories = ref([]);
const subCategories = ref([]);
const img = ref('');
const title = ref('');
const sku = ref('');
const price = ref('');
const category = ref('');
const subcategory = ref('');
const weight = ref('');
const setting = ref('');
const metal = ref('');
const content = ref('');
const collection = ref('');
const warranty = ref('');
const isLoading = ref(false);
const isImgLoading = ref(false);
watch(
  () => props.product,
  () => {
    img.value = props.product.img.small;
    title.value = props.product.title;
    sku.value = props.product.sku;
    price.value = props.product.price;
    category.value = props.product.category;
    subcategory.value = props.product.subcategory;
    weight.value = props.product.info.weight;
    setting.value = props.product.info.setting;
    metal.value = props.product.info.metal;
    content.value = props.product.info.content;
    collection.value = props.product.info.collection;
    warranty.value = props.product.info.warranty;
  },
  { deep: true }
);
function validateInputs() {
  if (!img.value) {
    return { valid: false, msg: 'Изображение не загружено' };
  }
  if (!title.value) {
    return { valid: false, msg: 'Название не найдено' };
  }
  if (!sku.value) {
    return { valid: false, msg: 'Код товара не найден' };
  }
  if (!price.value) {
    return { valid: false, msg: 'Цена не найдена' };
  }
  if (!category.value) {
    return { valid: false, msg: 'Категория не найдена' };
  }
  if (!subcategory.value) {
    return { valid: false, msg: 'Подкатегория не найдена' };
  }
  if (!weight.value) {
    return { valid: false, msg: 'Вес не найден' };
  }
  if (!setting.value) {
    return { valid: false, msg: 'Вставка не найдена' };
  }
  if (!metal.value) {
    return { valid: false, msg: 'Металл не найден' };
  }
  if (!content.value) {
    return { valid: false, msg: 'Проба не найдена' };
  }
  if (!collection.value) {
    return { valid: false, msg: 'Коллекция не найдена' };
  }
  if (!warranty.value) {
    return { valid: false, msg: 'Гарантия не найдена' };
  }
  return { valid: true };
}
function closePopup() {
  img.value = '';
  title.value = '';
  sku.value = '';
  price.value = '';
  category.value = '';
  weight.value = '';
  setting.value = '';
  metal.value = '';
  content.value = '';
  collection.value = '';
  warranty.value = '';
  emit('close');
}
async function getCategories() {
  const { data } = await $api.get('/allCategories');
  categories.value = data;
}
async function getSubcategories() {
  const { data } = await $api.get('/allSubCategories');
  subCategories.value = data;
}
async function submitHandler(e) {
  isLoading.value = true;
  const isValid = validateInputs();
  console.log(isValid);
  if (!isValid.valid) {
    isLoading.value = false;
    return alert(isValid.msg);
  }
  const product = {
    title: title.value.trim(),
    sku: sku.value.trim(),
    price: price.value,
    category: category.value.trim(),
    subcategory: subcategory.value.trim(),
    img: {
      small: img.value,
      full: img.value,
    },
    info: {
      weight: weight.value.trim(),
      setting: setting.value.trim(),
      metal: metal.value.trim(),
      content: content.value,
      collection: collection.value.trim(),
      warranty: warranty.value.trim(),
    },
  };
  if (props.isEditing) {
    product.id = props.product.id;
  }
  try {
    const url = props.isEditing ? '/edit' : '/create';
    const { data } = await $api.post(url, { product });
    props.loadProducts();
    closePopup();
    isLoading.value = false;
  } catch (error) {
    alert('Произошла ошибка. Пожалуйста, попробуйте снова');
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
    console.log(data);
    console.log('success');
    img.value = data;
    isImgLoading.value = false;
  } catch (err) {
    alert('Произошла ошибка. Пожалуйста, попробуйте снова');
    console.log(err);
    isImgLoading.value = false;
  }
}
onMounted(() => {
  getCategories();
  getSubcategories();
});
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
      <div></div>

      <label class="form__item">
        <span class="form__span"> Название </span>
        <input v-model="title" class="form__input" type="text" />
      </label>
      <label class="form__item">
        <span class="form__span"> Код </span>
        <input v-model="sku" class="form__input" type="text" />
      </label>
      <label class="form__item">
        <span class="form__span"> Цена </span>
        <input v-model="price" class="form__input" type="number" />
      </label>
      <label class="form__item">
        <span class="form__span"> Категория </span>
        <input v-model="category" class="form__input" type="text" />
        <ul class="form__autofill">
          <li
            class="form__autofill-item"
            v-for="categoryItem in categories.filter((item) =>
              item.toLowerCase().startsWith(category ? category.toLowerCase() : '')
            )"
          >
            <button type="button" @click="() => (category = categoryItem)">
              {{ categoryItem }}
            </button>
          </li>
        </ul>
      </label>
      <label class="form__item">
        <span class="form__span"> Подкатегория </span>
        <input v-model="subcategory" type="text" class="form__input" />
        <ul class="form__autofill">
          <li
            class="form__autofill-item"
            v-for="subCategoryItem in subCategories.filter((item) =>
              item.toLowerCase().startsWith(subcategory ? subcategory.toLowerCase() : '')
            )"
          >
            <button
              type="button"
              @click="() => (subcategory = subCategoryItem)"
            >
              {{ subCategoryItem }}
            </button>
          </li>
        </ul>
      </label>
      <label class="form__item">
        <span class="form__span">Вес</span>
        <input v-model="weight" type="text" class="form__input" />
      </label>
      <label class="form__item">
        <span class="form__span">Вставка</span>
        <input v-model="setting" type="text" class="form__input" />
      </label>
      <label class="form__item">
        <span class="form__span">Металл</span>
        <input v-model="metal" type="text" class="form__input" />
      </label>
      <label class="form__item">
        <span class="form__span">Проба</span>
        <input v-model="content" type="number" class="form__input" />
      </label>
      <label class="form__item">
        <span class="form__span">Коллекция</span>
        <input v-model="collection" type="text" class="form__input" />
      </label>
      <label class="form__item">
        <span class="form__span">Гарантия</span>
        <input v-model="warranty" type="text" class="form__input" />
      </label>
      <div></div>
      <button class="form__submit" :disabled="isLoading">Сохранить</button>
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
  display: block;
}
.form__file {
  display: none;
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
.form__input {
  margin-bottom: 10px;
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #000;
  padding: 10px;
}
.form__span {
  margin: 5px;
  position: absolute;
  left: 0;
  padding: 4px 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 5px;
  min-width: 125px;
  display: inline-block;
  text-align: center;
  box-shadow: 0px 0 12px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.form__input:focus ~ .form__autofill {
  opacity: 1;
  visibility: visible;
}
.form__autofill {
  position: absolute;
  top: 105%;
  right: 0;
  list-style: none;
  padding: 0;
  z-index: 3;
  width: calc(100% - 140px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.1s;
  max-height: 150px;
  overflow: hidden scroll;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
}
.form__autofill::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.form__autofill {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.form__autofill-item button {
  width: 100%;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .5);
  background: transparent;
  background: #fff;
  color: #000;
  margin-bottom: 2px;
  border: none;
  padding: 4px 10px;
  border-radius: 2px;
  border: 1px solid #000;
}
.form__span + .form__input {
  padding: 10px 10px 10px 140px;
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
