<template>
  <div class="home">
    <button @click="logout" id="logout" v-if="user">logut</button><br>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import firebase from "firebase";
export default {
  name: "Home",
  components: {
    HelloWorld
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
#logout {
  background-color: red;
  color: white;
}
</style>