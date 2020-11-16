<template>
  <v-container
    id="HomePage"
    fluid
    tag="section"
  >
    <v-app-bar
      color="#b88611"
      dense
      dark
    >
      <v-toolbar-title>Welcome to DSSC DLP</v-toolbar-title>
    </v-app-bar>

    <v-row>
      <v-col cols="12">
        <!-- <v-card-text class="px-0 pb-0"> -->
        <!-- <v-sheet> -->
        <center>
          <img src="../../../assets/D._S._Senanayake_College_crest.png">
        </center>
        <!-- </v-sheet> -->
        <!-- </v-card-text> -->
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import Vue from 'vue'
  import VueCookies from 'vue-cookies'
  Vue.use(VueCookies)

  export default {
    // mounted () {
    //   // //console.log(VueCookies.isKey('user'));
    //   // //console.log(VueCookies.isKey('home'));
    //   // //console.log(VueCookies.isKey('admin'));
    //   this.showError = false
    //   this.successBool = false
    //   if (!VueCookies.isKey('user')) { // check if admin home or a donor
    //     this.$router.push('/Login')
    //   }
    // },
  }
</script>
