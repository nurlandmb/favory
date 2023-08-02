<script setup>
import Contacts from './Contacts.vue';
import Socials from './Socials.vue';
import FooterPopup from './FooterPopup.vue';
import { ref, watch } from 'vue';
let activePopup = ref(null);
const closePopup = () => {
  activePopup.value = null;
};
watch(activePopup, async (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
</script>

<template>
  <FooterPopup :activeCategory="activePopup" @close="closePopup" />
  <footer class="footer">
    <div class="container">
      <div class="wrapper">
        <div class="logo">
          <a href="#">
            <img src="../assets/logo-hor.svg" />
          </a>
        </div>
        <div class="contacts-wrapper">
          <Contacts class="contacts" />
        </div>
        <div class="socials-wrapper">
          <Socials class="socials" />
        </div>
        <nav class="footer__popup">
          <button
            class="footer__popup-item"
            @click="
              () => {
                activePopup = 'about';
              }
            "
          >
            О компании
          </button>
          <button
            @click="
              () => {
                activePopup = 'politics';
              }
            "
            class="footer__popup-item"
          >
            Публичная оферта
          </button>
          <button
            @click="
              () => {
                activePopup = 'warranty';
              }
            "
            class="footer__popup-item"
          >
            Возврат / Гарантия
          </button>
          <button
            @click="
              () => {
                activePopup = 'shipment';
              }
            "
            class="footer__popup-item"
          >
            Доставка и оплата
          </button>
        </nav>
        <nav class="footer__popup">
          <button
            @click="
              () => {
                activePopup = 'keepment';
              }
            "
            class="footer__popup-item"
          >
            Хранение и уход
          </button>
          <button
            @click="
              () => {
                activePopup = 'table';
              }
            "
            class="footer__popup-item"
          >
            Таблица размеров
          </button>
          <button
            @click="
              () => {
                activePopup = 'faq';
              }
            "
            class="footer__popup-item"
          >
            Вопросы-ответы
          </button>
        </nav>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  padding: 34px 0 44px;
}
.footer__popup {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* flex-wrap: wrap; */
  gap: 10px;
  /* margin-top: 40px;  */
}
.footer__popup-item {
  display: block;
  background: transparent;
  border: none;
  font-family: 'Avenir next', sans-serif;
  transition: 0.3s;
  /* margin-bottom: 10px; */
}
.footer__popup-item:hover {
  /* opacity: 0.8; */
  color: #202525;
  /* background-color: var(--color-black);
  color: #fff; */
}
.footer__popup-item:last-child {
  /* margin-bottom: 0; */
}
.footer-title{
  margin-bottom: 15px;
  font-size: 18px;
}
.container {
  max-width: 1340px;
  width: 90%;
  margin: 0 auto;
}
.wrapper {
  display: flex;
  /* align-items: center; */
  align-items: flex-start;
  justify-content: space-between;
}
.mobile {
  padding: 11px 19px;
  text-transform: uppercase;
  font-size: 14px;
  transition: all 0.3s;
}
.mobile:hover {
  background-color: var(--color-black);
  color: #fff;
}
@media (max-width: 1200px) {
  .wrapper {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .logo {
    flex: 0 0 33%;
    order: -1;
  }
  .contacts-wrapper{
    flex: 0 0 33%;
  }
  .footer__popup{
    flex: 0 0 33%;
  }
  .socials-wrapper{
    order: -1;
    flex: 0 0 33%;
  }
  .address {
  } 
}
@media (max-width: 991px) {
  .logo {
    /* margin-bottom: 42px; */
  }
  .wrapper {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
  .footer-title{
    margin-bottom: 5px;
  }
  .address {
    text-align: left;
    justify-content: flex-start;
    margin-bottom: 26px;
  }
  .wrapper .address span {
    text-align: left;
  }
  .mobile {
    display: none;
  }
  .footer__popup {
    margin-top: 10px;
    flex-direction: column;
    gap: 10px;
  }
  .footer__popup-item {
    text-align: left;
  }
}
</style>
