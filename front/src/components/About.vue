<script setup></script>
<template>
  <section class="about">
    <div class="about__svg-wrapper">
      <svg class="about__svg" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.6714 33.3565C4.74718 24.9632 11.049 18.2212 19.1786 15.5228C22.6937 26.3532 32.8752 34.2068 44.8612 34.2068C47.0845 34.2068 49.2397 33.925 51.3058 33.413C48.469 44.1902 38.6675 52.1412 27 52.1412C15.3112 52.1412 5.48765 44.1633 2.6714 33.3565ZM1.85874 26.9996C1.85874 16.2396 8.62108 7.06223 18.1259 3.47418C17.9547 4.69476 17.8621 5.93911 17.8621 7.2064C17.8621 9.45834 18.1431 11.6448 18.6649 13.737C11.049 16.2436 4.92166 22.0559 1.98169 29.4695C1.90224 28.6567 1.85874 27.8336 1.85874 26.9996ZM27 1.85874C40.885 1.85874 52.1413 13.1152 52.1413 26.9996C52.1413 27.7263 52.1036 28.4439 52.043 29.1549C48.0036 19.3295 38.3398 12.391 27.0754 12.391C24.7891 12.391 22.5708 12.681 20.4499 13.2192C19.9748 11.2909 19.7176 9.27812 19.7176 7.2064C19.7176 5.71056 19.8528 4.24667 20.1059 2.82375C22.2971 2.19952 24.608 1.85874 27 1.85874ZM44.8612 32.3505C33.7181 32.3505 24.2509 25.0622 20.961 15.0034C22.9189 14.5119 24.966 14.2465 27.0754 14.2465C38.2153 14.2465 47.6752 21.534 50.9665 31.5886C49.0105 32.0818 46.9682 32.3505 44.8612 32.3505ZM54 26.9996C54 21.4389 52.3167 16.2723 49.4356 11.9773C44.5902 4.75456 36.3509 0 27 0C17.6491 0 9.40998 4.75456 4.56453 11.9773C1.68272 16.2723 0 21.4389 0 26.9996C0 41.9113 12.0886 54 27 54C41.9114 54 54 41.9113 54 26.9996Z"
          fill="#303936" />
      </svg>
    </div>
    <h2 class="about__title">ИНТЕРНЕТ МАГАЗИН ЮВЕЛИРНЫХ УКРАШЕНИЙ</h2>
    <p class="about__descr">
      <b>FAVORY</b> <i>- это место для истинных ценителей ювелирного искусства и роскоши.
        Мы разработали современный и удобный интерфейс нашего онлайн-магазина,
        чтобы он был максимально прост и понятен, и вы легко могли найти
        интересующее вас ювелирное изделие.</i>
    </p>
    <hr class="about__line" />
  </section>
</template>
<style scoped>
.about {
  padding: 10px;
  text-align: center;
  max-width: 100%;
  overflow: hidden;
}

.about__svg {
  width: 40px;
  height: 40px;
}

.about__svg-wrapper {
  margin-bottom: 25px;

  position: relative;
}

.about__svg-wrapper::after,
.about__svg-wrapper::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50vw;
  height: 1px;
  background-color: #000;
}

.about__svg-wrapper::before {
  left: -70px;
}

.about__svg-wrapper::after {
  right: -70px;
}

.about__title {
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 30px;
}

.about__descr {
  font-size: 21px;
  max-width: 760px;
  margin: 0 auto 65px;
  font-weight: 400;
  text-align: justify;
  text-align-last: center;
}

.about__line {
  max-width: 24%;
  margin: 0 auto;
  background-color: #d9d9d9;
  height: 1px;
  border: none;
}

@media (max-width: 768px) {
  .about {
    padding: 0 35px 10px;
  }

  .about__svg {
    width: 42px;
    height: 42px;
  }

  .about__svg-wrapper {
    margin-bottom: 20px;
  }

  .about__title {
    font-size: 22px;
  }

  .about__descr {
    font-size: 16px;
    margin-bottom: 50px;
  }

  .about__line {
    max-width: 60%;
  }
}</style>
