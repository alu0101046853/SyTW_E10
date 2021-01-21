<template>
<div class="register">
  <h1> Esta es la página de Log In </h1>
  <input type="text" v-model="email" placeholder="Email"><br>
  <input type="password" v-model="password" placeholder="Password"><br>
  <button @click="login">Log In</button>
  <p>¿No tienes una cuenta? <router-link to="/register">Click aqui</router-link></p>
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
          alert("Loggeado");
          this.$router.replace("home");
        },
        (err) => {
          alert("oops. " + err.message);
        }
      );
    }
  }
};
</script>

<style>
</style>