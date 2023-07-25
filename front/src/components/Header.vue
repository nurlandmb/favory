<script setup>
import { ref } from 'vue';
import Contacts from './Contacts.vue';
import Socials from './Socials.vue';
let isBurgerActive = ref(false);
</script>
<template>
  <header class="header">
    <div class="container">
      <div class="wrapper">
        <a
          href="https://api.whatsapp.com/send/?phone=77777778050&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.+%D0%A0%D0%B0%D1%81%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5+%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5+%D0%BF%D1%80%D0%BE+%D1%8E%D0%B2%D0%B5%D0%BB%D0%B8%D1%80%D0%BD%D1%8B%D0%B5+%D1%83%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F+Favory&type=phone_number&app_absent=0"
          class="whatsapp"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_184_814)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 13C0 20.1797 5.82032 26 13 26C20.1797 26 26 20.1797 26 13C26 5.82032 20.1797 0 13 0C5.82032 0 0 5.82032 0 13ZM21.1586 12.5025C21.157 16.7637 17.6906 20.2309 13.4285 20.2326H13.4253C12.1315 20.2322 10.8603 19.9076 9.7312 19.2917L5.63333 20.3667L6.72999 16.3609C6.0535 15.1886 5.69758 13.8588 5.69812 12.4964C5.69985 8.23425 9.1676 4.76667 13.4284 4.76667C15.4963 4.76756 17.4372 5.57261 18.8967 7.03376C20.3562 8.49485 21.1595 10.437 21.1586 12.5025Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.48933 18.5302L9.92109 17.8923L10.1557 18.0316C11.1422 18.6169 12.273 18.9267 13.4259 18.9272H13.4285C16.9698 18.9272 19.852 16.0448 19.8535 12.5021C19.8541 10.7853 19.1865 9.17104 17.9734 7.95657C16.7603 6.7421 15.1471 6.07292 13.431 6.07233C9.88697 6.07233 7.0047 8.95437 7.0033 12.4969C7.00281 13.7109 7.34249 14.8932 7.98566 15.9161L8.13841 16.1592L7.48933 18.5302ZM17.0584 14.1668C17.1931 14.2319 17.2841 14.2759 17.3229 14.3407C17.3712 14.4213 17.3712 14.808 17.2103 15.2593C17.0493 15.7104 16.2777 16.1222 15.9065 16.1776C15.5738 16.2274 15.1527 16.2481 14.69 16.1011C14.4094 16.0121 14.0497 15.8932 13.5888 15.6942C11.7781 14.9123 10.5544 13.1573 10.3231 12.8256C10.3069 12.8024 10.2955 12.7861 10.2893 12.7777L10.2877 12.7756C10.1855 12.6392 9.50054 11.7254 9.50054 10.7796C9.50054 9.88994 9.93761 9.42356 10.1388 9.2089C10.1525 9.19422 10.1652 9.18068 10.1766 9.16828C10.3536 8.9749 10.5629 8.92658 10.6917 8.92658C10.8204 8.92658 10.9493 8.92778 11.0618 8.93341C11.0757 8.93411 11.0902 8.93401 11.1051 8.93395C11.2177 8.93325 11.358 8.93244 11.4964 9.26496C11.5497 9.39296 11.6276 9.58265 11.7098 9.78269C11.876 10.1874 12.0596 10.6345 12.0919 10.6991C12.1402 10.7958 12.1724 10.9086 12.1081 11.0376C12.0984 11.0569 12.0894 11.0752 12.0809 11.0925C12.0326 11.1913 11.997 11.2639 11.9149 11.3598C11.8826 11.3975 11.8493 11.4381 11.8159 11.4786C11.7495 11.5596 11.683 11.6405 11.6252 11.6981C11.5285 11.7944 11.4278 11.899 11.5405 12.0924C11.6531 12.2857 12.0408 12.9182 12.615 13.4304C13.2322 13.9809 13.7687 14.2136 14.0406 14.3316C14.0937 14.3546 14.1367 14.3733 14.1683 14.3891C14.3614 14.4858 14.4741 14.4696 14.5867 14.3407C14.6994 14.2118 15.0696 13.7767 15.1983 13.5833C15.327 13.3901 15.4559 13.4223 15.6329 13.4867C15.81 13.5512 16.7596 14.0184 16.9527 14.1151C16.9904 14.134 17.0257 14.151 17.0584 14.1668Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_184_814">
                <rect width="26" height="26" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        
       
       
        
        <Contacts class="header__contacts" />
        <div class="logo">
          <a href="#">
            <img src="../assets/logo.svg" />
          </a>
        </div>
        <div class="flex">
          <a href="#" class="mobile"> Перейти в приложение </a>
          <Socials class="header__socials" />
        </div>
         <button
          class="burger"
          :class="{ active: isBurgerActive }"
          @click="() => (isBurgerActive = !isBurgerActive)"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
         <div class="burger__content" :class="{ active: isBurgerActive }">
          <Address class="" />
          <Contacts class="" />
          <Socials class="" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 34px 0 44px;
  position: relative;
}

.flex{
  
  /* display: flex; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  flex: 0 0 300px;
}
.logo{
  max-width: 160px;
}
.logo img{
  max-width: 100%;
}
.container {
  max-width: 1240px;
  width: 90%;
  margin: 0 auto;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__contacts{
  flex: 0 0 300px;
}
.header__socials{
  /* margin: 0 20px; */
}
.whatsapp,
.burger,
.burger__content {
  display: none;
}
.mobile {
  padding: 11px 19px;
  background-color: var(--color-black);
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  border: 1px solid var(--color-black);
  transition: all 0.2s;
}
.mobile:hover {
  background-color: #fff;
  color: var(--color-black);
}
@media (max-width: 1240px) {
  /* .wrapper {
    flex-wrap: wrap;
  } */
}
@media (max-width: 991px) {
  .header {
    padding: 10px 0;
  }
  .header__address,
  .header__contacts,
  .header__socials,
  .mobile {
    display: none;
  }
  .flex{
    display: none;
  }
  .wrapper{
    justify-content: space-between;
  }
  .whatsapp,
  .burger {
    transform: translateY(15px);
  }
  .whatsapp {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .burger {
    display: block;
    border: none;
    background: transparent;
  }
  .burger span {
    display: block;
    width: 24px;
    height: 3px;
    background-color: #000;
    margin-bottom: 5px;
    transition: all 0.3s;
  }
  .burger.active span:first-child {
    transform: translateY(8px) rotate(45deg);
  }
  .burger.active span:nth-child(2) {
    transform: scale(0);
  }
  .burger.active span:last-child {
    transform: translateY(-8px) rotate(-45deg);
  }
  .logo {
    max-width: 160px;
    text-align: center;
  }
  .logo img{
    width: 100%;
  }
  .burger span:last-child {
    margin-bottom: 0;
  }
  .burger__content {
    position: absolute;
    display: block;
    right: 5%;
    left: 5%;
    top: 120px;
    background: #fff;
    border-radius: 14px;
    border: 2px solid #000;
    padding: 10px;
    box-shadow: 0px 0 12px 0px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    transform: translateY(-40px);
    transition: all 0.2s;
  }
  .burger__content.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>
