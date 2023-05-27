<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import $api from '../https/index.js';
const router = useRouter();
const email = ref('');
const password = ref('');
const isValid = ref(true);
const isLoading = ref(false);

const submitHandler = async () => {
  isLoading.value = true;
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  if(!emailVal || !passwordVal){
    isValid.value = false;
    isLoading.value = false;
    return;
  }else{
    isValid.value = true;
  }
  try {
    const res = await $api.post('/login', {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem('favory-token', res.data.accessToken);
    router.push('/products');
  } catch (err) {
    isLoading.value = false;
    console.log(err);
  }
};
</script>

<template>
  <section class="login">
    <div class="wrapper">
      <div class="img">
        <img src="../assets/logo.svg" alt="" />
      </div>
      <form class="form" @submit.prevent="submitHandler">
        <label class="form-item">
          <input v-model.trim="email" type="text" placeholder="Почта" />
        </label>
        <label class="form-item">
          <input v-model.trim="password" type="password" placeholder="Пароль" />
          <button></button>
        </label>
        <button class="form-submit" :disabled="isLoading">Войти</button>
        <p class="form-wrong" :class="{active: !isValid}">Заполните все поля</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f1efea;
}
.wrapper{
  background: #fff;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.2);
  padding: 40px 20px 20px;
}
.img {
  margin-bottom: 20px;
}
.form-item {
  display: block;
  position: relative;
  margin-bottom: 15px;
}
.form-item input {
  width: 300px;
  padding: 10px 10px;
  border-radius: 5px;
  /* box-shadow: 0 5px 8px 2px rgba(0, 0, 0, 0.2); */
  border: 2px solid #72a479;
  color: #72a479;

}
.form-item input::placeholder{
  color: #72a479;
}
.form-submit {
  margin-top: 20px;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  background-color: #72a479;
  color: #fff;
  border: none;
  transition: all 0.3s;
  border: 1px solid #72a479;
}
.form-submit:hover {
  color: #72a479;
  background-color: #fff;
}
.form-submit:disabled{
  opacity: .5;
  pointer-events: none;
}
.form-wrong{
  margin-top: 10px;
  color: #cc0033;
  font-size: 16px;
  opacity: 0;
  visibility: hidden;
  transition: all .2s;
}
.form-wrong.active{
  opacity: 1;
  visibility: visible;
}

</style>
