<script setup>
const props = defineProps(['inpopup']);
</script>
<template>
  <section class="mobile" :class="{ popupMode: props.inpopup }">
    <div class="mobile__content">
      <p class="mobile__text">
        Мобильное приложение
      </p>
      <p class="mobile__descr">
        <i>
          Скачивай наше мобильное приложение и узнавай о новинках первым

        </i>
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
  background-color: #ededed;
  margin-top: 15px;
  padding: 40px 40px 35px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile__content {
  margin: 0 auto;
  text-align: center;
}

.mobile__text {
  font-size: 30px;
  margin-bottom: 10px;
}
.mobile__descr{
  font-size: 21px;
  margin-bottom: 35px;
}
.mobile__links {
  list-style: none;
  filter: grayscale(100%);
}
.mobile__links-item {
  margin-bottom: 10px;
}
.mobile__links-item img{
  width: 190px;
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
    /* margin-left: 20px; */
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
