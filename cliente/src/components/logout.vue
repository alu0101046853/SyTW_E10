<template>
<div class="usuario">
    <a v-if="!user"><router-link to="/register">Registrarse</router-link></a>
    <a v-if="!user"><router-link to="/login"> | Log in</router-link></a>
    <button v-if="user" v-on:click="logout">Log Out</button>
</div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "LogOut",
  data () {
    return {
      user: ""
    };
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
      });
    }
  }
};
</script>

<style scoped>
button {
  background-color: red;
  color: white;
}
</style>