<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <div class="mx-3" />

    <v-btn
      class="ml-2"
      min-width="0"
      text
      @click="logout"
    >
      <v-card-text>Logout</v-card-text>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  // Components
  // import { VHover, VListItem } from 'vuetify/lib'

  // Utilities
  import { mapState, mapMutations } from 'vuex'
  // eslint-disable-next-line no-unused-vars
  import db from '../../homePage/api/firebaseInit'
  import firebase from 'firebase'
  import Vue from 'vue'
  import VueCookies from 'vue-cookies'
  Vue.use(VueCookies)

  export default {
    name: 'DashboardCoreAppBar',

    components: {

    },

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      ...mapState(['drawer']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
      logout () {
        firebase.auth().signOut().then(() => {
          // // //console.log(VueCookies.keys());
          VueCookies.remove('user')
          VueCookies.remove('folderID')
          VueCookies.remove('subject')
          VueCookies.remove('admin')
          // //console.log(VueCookies.keys());

          // VueCookies.config('1s');
          // //console.log('Logged out');
          // this.isLoggedIn = false
          this.$router.push('/Login')
          // window.getApp.$emit('APP_LOGOUT')
        })
      },
    },
  }
</script>
