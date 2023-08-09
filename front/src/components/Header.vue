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
        <div class="header__contacts">
          <ul class="header__contacts-list">
            <li class="header__contacts-item">
              <a
                class="header__contacts-item-link"
                href="https://2gis.kz/almaty/firm/9429940000787107"
                target="_blank"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.9012 7C13.9012 8.65686 12.5581 10 10.9012 10C9.24437 10 7.90118 8.65686 7.90118 7C7.90118 5.34315 9.24437 4 10.9012 4C12.5581 4 13.9012 5.34315 13.9012 7ZM12.9012 7C12.9012 8.10457 12.0058 9 10.9012 9C9.79657 9 8.90118 8.10457 8.90118 7C8.90118 5.89543 9.79657 5 10.9012 5C12.0058 5 12.9012 5.89543 12.9012 7Z"
                    fill="#202525"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1422 16.8498C14.1532 14.8779 17.9012 10.7054 17.9012 7C17.9012 3.11 14.7672 0 10.9012 0C7.03518 0 3.90118 3.11 3.90118 7C3.90118 10.7054 7.64921 14.8779 9.66017 16.8498C10.3588 17.5349 11.4436 17.5349 12.1422 16.8498ZM14.9481 12.0138C16.1026 10.3111 16.9012 8.54794 16.9012 7C16.9012 3.66452 14.2172 1 10.9012 1C7.58523 1 4.90118 3.66452 4.90118 7C4.90118 8.54794 5.69982 10.3111 6.85426 12.0138C7.99045 13.6896 9.37867 15.1732 10.3603 16.1358C10.6701 16.4396 11.1323 16.4396 11.4421 16.1358C12.4237 15.1732 13.8119 13.6896 14.9481 12.0138Z"
                    fill="#202525"
                  />
                  <path
                    d="M4.32877 13.8631C4.0963 13.6307 3.70658 13.682 3.5422 13.9667L0.203198 19.75C-0.374149 20.75 0.347538 22 1.50224 22H20.3031C21.4578 22 22.1795 20.75 21.6022 19.75L18.2621 13.9648C18.0977 13.6801 17.708 13.6288 17.4755 13.8612C17.3155 14.0213 17.2829 14.2688 17.396 14.4648L20.7361 20.25C20.9286 20.5833 20.688 21 20.3031 21H1.50224C1.11734 21 0.876778 20.5833 1.06923 20.25L4.40823 14.4667C4.52138 14.2707 4.48879 14.0232 4.32877 13.8631Z"
                    fill="#202525"
                  />
                </svg>
              </a>
            </li>
            <li class="header__contacts-item">
              <a class="header__contacts-item-link" href="tel:+77777007333">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.3033 13.5394C13.743 13.163 13.9973 12.614 14 12.0352V10.2745C14 9.66086 13.6004 9.11877 13.0143 8.93719L10.3407 8.10881C9.90325 7.97329 9.42718 8.0603 9.06591 8.34177L7.97965 9.18808C7.37478 8.76436 6.79826 8.28234 6.25793 7.74208C5.71767 7.20175 5.23565 6.62523 4.81193 6.02036L5.65313 4.95209C5.93761 4.59073 6.02651 4.11265 5.89092 3.67316L5.06207 0.987191C4.88097 0.40031 4.33849 0 3.72431 0H1.96483C1.38601 0.002667 0.836961 0.25697 0.460578 0.696725C0.149498 1.06019 -0.0265587 1.52388 0.00326829 2.00137C0.191281 5.01078 1.43494 7.96622 3.73435 10.2657C6.03379 12.5651 8.98926 13.8087 11.9986 13.9967C12.4761 14.0266 12.9398 13.8505 13.3033 13.5394ZM4.26197 5.58728C4.07093 5.82989 4.06143 6.16904 4.23859 6.42195C4.68556 7.06007 5.19377 7.66781 5.76296 8.23705C6.3322 8.80622 6.93994 9.31442 7.57806 9.76145C7.82992 9.93785 8.16739 9.92924 8.40994 9.74024L9.49613 8.89393C9.6768 8.75323 9.9148 8.70969 10.1335 8.77745L12.8072 9.60583C13.1002 9.69663 13.3 9.96767 13.3 10.2745V12.0334C13.2978 12.4083 13.133 12.7638 12.8481 13.0076C12.6063 13.2146 12.3174 13.3153 12.0423 13.2981C9.19653 13.1203 6.40353 11.9449 4.22933 9.77069C2.05511 7.59648 0.879696 4.80348 0.701903 1.95771C0.684718 1.68261 0.785413 1.39373 0.992389 1.15189C1.2362 0.867028 1.59172 0.702143 1.96662 0.700001H3.72431C4.0314 0.700001 4.30264 0.90016 4.39319 1.19359L5.22204 3.87957C5.28985 4.09931 5.2454 4.33835 5.10313 4.51903L4.26197 5.58728Z"
                    fill="#202525"
                  />
                </svg>
              </a>
            </li>
            <li class="header__contacts-item">
              <a
                class="header__contacts-item-link"
                href="mailto:info@favory.kz"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 1.375C0 0.615608 0.626801 0 1.4 0H12.6C13.3732 0 14 0.615608 14 1.375V9.625C14 10.3844 13.3732 11 12.6 11H1.4C0.626801 11 0 10.3844 0 9.625V1.375ZM0.7 1.375C0.7 0.995308 1.0134 0.6875 1.4 0.6875H12.6C12.9866 0.6875 13.3 0.995308 13.3 1.375V1.77203L7 5.34531L0.7 1.77203V1.375ZM7.35007 5.94069L13.3 2.56594V9.625C13.3 10.0047 12.9866 10.3125 12.6 10.3125H1.4C1.0134 10.3125 0.7 10.0047 0.7 9.625V2.56594L6.64993 5.94069C6.86658 6.06354 7.13342 6.06354 7.35007 5.94069Z"
                    fill="#202525"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="logo">
          <router-link to="/">
            <img src="../assets/logo-1.svg" />
          </router-link>
        </div>
        <div class="flex header__links">
          <div class="header__links-lang">
            <button class="header__links-lang__item active">RU</button>
            <span class="header__links-lang__separator">|</span>
            <button class="header__links-lang__item">ENG</button>
          </div>
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
  padding: 35px 0 30px;
  position: relative;
}

.flex {
  /* display: flex; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  flex: 0 0 300px;
}
.logo {
  max-width: 320px;
}
.logo img {
  max-width: 100%;
}
.logo img {
  width: 195px;
}
.container {
  max-width: 1920px;
  width: 93%;
  margin: 0 auto;
}
.wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.header__contacts {
  flex: 0 0 300px;
}
.header__links {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header__links-lang__item {
  background: transparent;
  border: none;
  font-size: 18px;
}
.header__links-lang__separator {
  display: inline-block;
  margin: 0 10px;
}
.header__links-lang {
  font-size: 25px;
}
.header__contacts-list {
  display: flex;
  list-style: none;
}
.header__contacts-item {
  margin-right: 15px;
}
.header__contacts-item path{
  fill: #454545;
  transition: all .3s;
}
.header__contacts-item:hover path{
  fill: #000;
}
.header__socials {
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
  .flex {
    display: none;
  }
  .wrapper {
    align-items: center;
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
    max-width: 140px;
    text-align: center;
  }
  .logo img {
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
