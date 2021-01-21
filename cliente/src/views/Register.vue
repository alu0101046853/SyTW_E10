<template>
<div class="register">
  <h1> Esta es la página de Registro </h1>
  <input type="text" v-model="email" placeholder="Email"><br>
  <input type="password" v-model="password" placeholder="Password"><br>
  <button @click="signUp">Sign Up</button>
  <p>¿Ya tienes una cuenta? <router-link to="/login">Click aqui</router-link></p>
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
          alert("Usuario Creado Correctamente");
          this.$router.replace("Home");
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