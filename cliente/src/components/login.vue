<template>
<div class="register">
  <h1> Esta es la página de Log In </h1>
  <input type="text" v-model="email" placeholder="Email"><br>
  <input type="password" v-model="password" placeholder="Password"><br>
  <button @click="login">Log In</button>
  <p>¿No tienes una cuenta?</p>
</div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data () {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace("home");
        },
        (err) => {
        }
      );
    }
  }
};
</script>

<style>
</style>