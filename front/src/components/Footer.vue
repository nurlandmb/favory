<script setup>
import Address from './Address.vue';
import Contacts from './Contacts.vue';
import Socials from './Socials.vue';
import FooterPopup from './FooterPopup.vue';
import { ref, watch } from 'vue';
let activePopup = ref(null);
const closePopup = () => {
  console.log('closed');
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
        <Address class="address" />
        <Contacts class="contacts" />
        <Socials class="socials" />
        <a href="#" class="mobile"> Перейти в приложение </a>
      </div>
      <div class="wrapper">
        <nav class="footer__popup">
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
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}
.footer__popup-item {
  display: block;
  background: transparent;
  border: none;
  font-family: 'Avenir next', sans-serif;
  transition: 0.3s;
}
.footer__popup-item:hover {
  opacity: 0.8;
  /* background-color: var(--color-black);
  color: #fff; */
}
.footer__popup-item:last-child {
  margin-bottom: 0;
}
.container {
  max-width: 1340px;
  width: 90%;
  margin: 0 auto;
}
.wrapper {
  display: flex;
  align-items: center;
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
    /* flex-direction: column; */
  }
  .logo {
    flex: 0 0 50%;
  }
  .address {
    flex: 0 0 50%;
    text-align: right;
    justify-content: flex-end;
  }
}
@media (max-width: 768px) {
  .logo {
    margin-bottom: 42px;
  }
  .wrapper {
    flex-direction: column;
    align-items: flex-start;
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
  }
}
</style>
