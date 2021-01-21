<template>
  <div class="home">
    <LogOut/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LogOut from "@/components/logout.vue";
import firebase from "firebase";
export default {
  name: "Home",
  components: {
    HelloWorld,
    LogOut
  },
  data () {
    return {
      user: firebase.auth().currentUser
    };
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        alert("Deslogeado Correctamente");
        this.$router.replace("login");
      });
    }
  }
};
</script>

<style>
</style>