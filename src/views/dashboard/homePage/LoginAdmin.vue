
<template>
  <v-app>
    <v-content
      id="login"
      :bg="false"
    >
      <vue-particles
        color="#000044"
        :particle-opacity="0.3"
        :particles-number="120"
        shape-type="circle"
        :particle-size="6"
        lines-color="#FFA000"
        :lines-width="2"
        :line-linked="true"
        :line-opacity="0.4"
        :lines-distance="100"
        :move-speed="3"
        :hover-effect="true"
        hover-mode="grab"
        :click-effect="true"
        click-mode="repulse"
      />
    </v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
          lg="3"
        >
          <v-alert
            v-model="showError"
            type="error"
            dismissible
          >
            {{
              this.errormm
            }}
          </v-alert>
          <v-alert
            v-model="successBool"
            type="success"
            dismissible
            transition="scale-transition"
          >
            {{ this.successMsg }}
          </v-alert>

          <v-card
            class="elevation-9 pa-3"
            color="#ffffff"
          >
            <v-card-text>
              <div class="layout column align-center">
                <img
                  src="../../../assets/D._S._Senanayake_College_crest.png"
                  alt="DUC logo"
                  width="120"
                  height="120"
                >
                <h1 class="flex my-4 primary--text">
                  Admin Login
                </h1>
              </div>
              <v-form>
                <v-text-field
                  v-model="email"
                  append-icon="email"
                  name="email"
                  label="E-mail"
                  type="email"
                />
                <v-text-field
                  id="password"
                  v-model="password"
                  append-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                block
                color="primary"
                @click="login"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

/* eslint-disable no-unused-vars */
  import db from './api/firebaseInit'
  import firebase from 'firebase'
  import Vue from 'vue'
  import VueCookies from 'vue-cookies'
  import VueParticles from 'vue-particles'
  import VueSimpleAlert from 'vue-simple-alert'
  Vue.use(VueSimpleAlert)
  Vue.use(VueParticles)
  Vue.use(VueCookies)
  export default {
    data: () => ({
      loading: false,
      email: '',
      password: '',
      showError: false,
      errormm: ' ',
      successMsg: '',
      successBool: false,
    }),
    // watch: {
    //   loader () {
    //     const l = this.loader
    //     this[l] = !this[l]
    //     setTimeout(() => {
    //       this[l] = false
    //     }, 3000)
    //     this.loader = null
    //   },
    // },
    mounted () {
      // //console.log(VueCookies.isKey('user'));
      this.showError = false
      this.successBool = false
      if (VueCookies.isKey('user')) { // check if logged in
        this.$router.push('/')
      }
    },
    methods: {

      login: function (e) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              VueCookies.config('1d')
              this.showError = false
              // this.successMsg = 'Login Success'
              // this.successBool = true
              const uid = firebase.auth().currentUser.uid
              //console.log(uid)

              const userDetails = db
                .collection('admin')
                .doc(uid)
                .get()
                .then(doc => {
                  if (doc.exists) {
                    // e = doc.data().folderID
                    // VueCookies.set('folderID', e)
                    VueCookies.set('admin', uid)
                    this.$router.push('/adminHome')
                  } else {
                    this.$alert('You are not an Admin', '', 'error')
                    this.$router.push('/Login')
                  }
                })
                .catch(err => {
                  const error = err
                  this.$alert('You are not an Admin', '', 'error')
                // //console.log('Error getting document', err);
                })
            },
            err => {
              // alert(err.message);
              // this.errormm = err.message
              // this.showError = true
              this.$alert(err.message, '', 'error')
            },
          )
        e.preventDefault()
      },
    },
  }
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
.centered-input input {
  text-align: center
}
</style>
