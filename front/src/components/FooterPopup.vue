<template>
  <div
    @click="closePopup"
    class="overflow"
    :class="{ active: props.activeCategory }"
  ></div>
  <button
    :class="{ active: props.activeCategory }"
    class="footer-popup__close"
    @click="closePopup"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      width="24px"
      height="24px"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
  <div class="footer-popup" :class="{ active: props.activeCategory }">
    <div class="footer-popup__content">
      <AboutUs v-if="props.activeCategory === 'about'" />
      <Warranty v-if="props.activeCategory === 'warranty'" />
      <Politics v-if="props.activeCategory === 'politics'" />
      <Shipment v-if="props.activeCategory === 'shipment'" />
      <Keepment v-if="props.activeCategory === 'keepment'" />
      <Table v-if="props.activeCategory === 'table'" />
      <FAQ v-if="props.activeCategory === 'faq'" />
    </div>
  </div>
</template>
<script setup>
import { watch } from 'vue';
import Politics from './FooterContent/Politics.vue';
import Warranty from './FooterContent/Warranty.vue';
import AboutUs from './FooterContent/AboutUs.vue';
import Shipment from './FooterContent/Shipment.vue';
import Keepment from './FooterContent/Keepment.vue';
import Table from './FooterContent/Table.vue';
import FAQ from './FooterContent/FAQ.vue';

let props = defineProps(['activeCategory']);
let emit = defineEmits(['close']);
function closePopup() {
  emit('close');
}
</script>
<style>
.footer-popup h2 {
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
}
.footer-popup h3 {
  font-weight: 400;
  margin-bottom: 40px;
  font-size: 22px;
}
.footer-popup h4 {
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 500;
  text-transform: uppercase;
}
.footer-popup table {
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: 30px;
}
.footer-popup td,
.footer-popup th {
  border: 1px solid #000;
  padding: 5px;
  text-align: center;
}
.footer-popup th {
  font-weight: 500;
  text-transform: uppercase;
  /* font-size: 20px; */
}
.footer-popup div {
  padding-left: 30px;
}
.footer-popup ul,
.footer-popup ol{
  padding-left: 20px;
}
.footer-popup p {
  margin-top: 15px;
  font-weight: 500;
}
.footer-popup a {
  text-decoration: underline;
}
.footer-popup .table-scroll{
  padding: 0;
}
@media(max-width: 540px){
  .footer-popup .table-scroll{
    /* width: 600px; */
    overflow-x: auto;
    margin: 0 -20px;
    padding: 0 20px;
  }
  .footer-popup .table-scroll table{
    width: 600px;
  }
}
</style>
<style scoped>
.overflow {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}
.overflow.active {
  opacity: 1;
  visibility: visible;
}
.footer-popup {
  background: #fff;
  z-index: 2;
  padding: 40px 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 70%;
  width: 700px;
  overflow: hidden scroll;
  border-radius: 20px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}
.footer-popup__content{
  padding: 0;
}
.footer-popup.active {
  opacity: 1;
  visibility: visible;
}
.footer-popup__close {
  z-index: 3;
  position: fixed;
  right: 20px;
  top: 20px;
  background: transparent;
  border: none;
  transition: opacity 0.3s;
  opacity: 1;
  visibility: hidden;
  display: none;
}
.footer-popup__close.active {
  visibility: visible;
  display: block;
}
.footer-popup__close svg {
  stroke: #fff;
}
.footer-popup__close:hover {
  opacity: 0.5;
}

.footer-popup::-webkit-scrollbar {
  display: none;
}
@media (max-width: 768px) {
  .footer-popup {
    left: 0;
    width: 100%;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translate(0, 0);
    border-radius: 0;
    height: 100vh;
    max-height: unset;
  }
  .footer-popup__close svg {
    stroke: #000;
    border-radius: 50%;
    padding: 5px;
    width: 32px;
    height: 32px;
    background: #fff;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  }
 
}
</style>
