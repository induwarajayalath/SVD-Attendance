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
      <v-toolbar-title>Download the Android App</v-toolbar-title>
    </v-app-bar>

    <v-row>
      <v-col cols="12">
        <!-- <v-card-text class="px-0 pb-0"> -->
        <v-sheet>

        <center>
          <br>
          <p class="headline mb-1">Scan Me on Android</p>
          <img src="../../../assets/qr-code.png" class="hidden-sm-and-down" >
          <img src="../../../assets/qr-code.png" class="hidden-md-and-up" height="250px" width="250px"><br>
          <p class="headline mb-1">Or click here</p>
          <v-btn class="primary" href="https://play.google.com/store/apps/details?id=com.boostingmedia.dswebportal" target="_new">Download</v-btn>
        </center>
        
        </v-sheet>
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
