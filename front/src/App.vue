<script setup></script>

<template>
  <router-view> </router-view>
</template>

<style>
@font-face {
  font-family: 'Avenir next';
  font-weight: 400;
  src: url('/fonts/avenirnextcyr-regular.woff2') format('woff2'),
    url('/fonts/avenirnextcyr-regular.woff') format('woff'),
    url('/fonts/avenirnextcyr-regular.eot') format('embedded-opentype'),
    url('/fonts/avenirnextcyr-regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Avenir next';
  font-weight: 900;
  src: url('/fonts/avenirnextcyr-heavy.woff2') format('woff2'),
    url('/fonts/avenirnextcyr-heavy.woff') format('woff'),
    url('/fonts/avenirnextcyr-heavy.eot') format('embedded-opentype'),
    url('/fonts/avenirnextcyr-heavy.ttf') format('truetype');
}
@font-face {
  font-family: 'Avenir';
  src: url('/fonts/AvenirLTStd-Book.otf') format('opentype');
  /* url('/fonts/Avenir-Book.woff') format('woff'),
    url('/fonts/Avenir-Book.eot') format('embedded-opentype'),
    url('/fonts/Avenir-Book.ttf') format('truetype'); */
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Avenir';
  src: url('/fonts/AvenirLTStd-Black.otf') format('opentype');
  /* url('/fonts/Avenir-Heavy.woff') format('woff'),
    url('/fonts/Avenir-Heavy.eot') format('embedded-opentype'),
    url('/fonts/Avenir-Heavy.ttf') format('truetype'); */
  font-weight: 900;
  font-style: normal;
}
</style>
