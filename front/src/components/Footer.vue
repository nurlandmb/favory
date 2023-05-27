<script setup>
import Address from './Address.vue';
import Contacts from './Contacts.vue';
import Socials from './Socials.vue';
</script>

<template>
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
    </div>
  </footer>
</template>
<style scoped>
.footer {
  padding: 34px 0 44px;
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
@media(max-width: 1200px){
  .wrapper{
    flex-wrap: wrap;
    /* flex-direction: column; */
  }
  .logo{
    flex: 0 0 50%;
  }
  .address{
    flex: 0 0 50%;
    text-align: right;
    justify-content: flex-end;
  }
}
@media(max-width: 768px){
  .logo{
    margin-bottom: 42px;
  }
  .wrapper{
    flex-direction: column;
    align-items: flex-start;
  }
  .address{
    text-align: left;
    justify-content: flex-start;
    margin-bottom: 26px;
  }
  .wrapper .address span{
    text-align: left;
  }
  .mobile{
    display: none;
  }
}
</style>
