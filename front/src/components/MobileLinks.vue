<script setup>
const props = defineProps(['inpopup']);
</script>
<template>
  <section class="mobile" :class="{ popupMode: props.inpopup }">
    <div v-if="props.inpopup" class="mobile__logo">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <img class="mobile__img" src="../assets/phone.webp" alt="" />
    <div class="mobile__content">
      <p class="mobile__text">
        Заказывай ювелирные изделия через мобильное приложение Favory!
      </p>
      <ul class="mobile__links">
        <li class="mobile__links-item">
          <a href="#">
            <img src="../assets/appstore.svg" alt="" />
          </a>
        </li>
        <li class="mobile__links-item">
          <a href="#">
            <img src="../assets/googleplay.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
@keyframes rotate {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-30px) rotate(8deg);
  }
}
.mobile {
  overflow: hidden;
  background-color: #f1efea;
  padding: 12px 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mobile__logo {
  position: absolute;
  top: 78px;
  left: 130px;
  background: #ffffff;
  border-radius: 33px;
  padding: 33px 17px;
  box-shadow: 0px 0px 60px rgba(194, 189, 180, 0.3);
}
.mobile__img {
  max-width: 500px;
  /* animation: rotate 2s ease-in-out 0s infinite both alternate; */
}
.popupMode .mobile__logo {
  top: 27px;
  left: 26px;
  padding: 26px 13px;
}
.popupMode {
  border: 1px solid #adadad;
  border-radius: 15px;
  max-width: 100%;
  padding: 0;
  overflow: visible;
}
.popupMode .mobile__img {
  width: 280px;
  height: 254px;
  margin: -20px 0 -20px 27px;
}
.popupMode .mobile__logo img {
  width: 74px;
  height: 44px;
}
.mobile__logo img {
  width: 96px;
  height: 58px;
}
.mobile__content {
  margin-left: 99px;
}
.popupMode .mobile__content {
  margin-left: 48px;
}
.mobile__text {
  font-size: 36px;
  margin-bottom: 62px;
}
.popupMode .mobile__text {
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 25px;
}
.mobile__links {
  display: flex;
  list-style: none;
}
.mobile__links-item {
  margin-right: 21px;
}
@media (max-width: 1200px) {
  .mobile__logo {
    left: 25px;
    top: 25px;
  }
  .mobile__img {
    max-width: 40%;
  }
  .mobile__content {
    margin-left: 20px;
  }
  .mobile__text{
    font-size: 28px;
  }
}
@media (max-width: 768px) {
  .popupMode {
    border-radius: 0;
    /* margin: 0 -5%; */
  }
  .mobile {
    flex-direction: column;
    padding: 50px 30px 35px;
  }
  .mobile__logo {
    top: 24px;
    right: 22px;
    left: auto;
    padding: 25px 13px;
  }
  .popupMode .mobile__logo {
    left: auto;
  }
  .popupMode .mobile__content {
    margin-left: 0;
  }
  .mobile__logo img {
    width: 73px;
    height: 44px;
  }
  .popupMode .mobile__img {
    margin: 0 0 10px;
  }
  .mobile__img {
    max-width: 100%;
    transform: translateX(-200px);
  }
  .mobile__content {
    margin-left: 0;
  }
  .mobile__text {
    font-size: 24px;
    margin-bottom: 40px;
  }
}
@media (max-width: 500px) {
  .mobile__img {
    transform: translateX(-80px);
  }
  .mobile__links-item {
    flex: 0 0 48%;
  }
  .mobile__links-item img {
    max-width: 100%;
  }
}
</style>
