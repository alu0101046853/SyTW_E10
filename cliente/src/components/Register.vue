<template>
<div class="register">
  <h1> Esta es la página de Registro </h1>
  <input type="text" v-model="email" placeholder="Email"><br>
  <input type="password" v-model="password" placeholder="Password"><br>
  <button @click="signUp">Sign Up</button>
  <p>¿Ya tienes una cuenta?</p>
</div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "signUp",
  data () {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace("Home");
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