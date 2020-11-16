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
      <v-app-bar-nav-icon />

      <v-toolbar-title>
        Admin Pannel
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        color="#d6a21d"
        @click="logout"
      >
        Logout
      </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-row>
      <v-col
        cols="12"
        md="8"
      >
        <center>
          <base-material-card
            color="#455A64"
            title="Add new one"
            class="px-5 py-3"
          >
            <v-card-text class="px-0 pb-0">
              <v-sheet />
              Login email
              <v-text-field
                v-model="loginEmail"
                type="email"
                @change="genPassword"
              />
              Class Name
              <v-text-field v-model="className" />
              <!-- Teacher email
              <v-text-field
                v-model="teacherEmail"
                type="email"
              /> -->
              Login Password
              <v-text-field v-model="password" />
              <v-btn
                color="#d6a21d"
                @click="addNew"
              >
                Submit
              </v-btn>
            </v-card-text>
          </base-material-card>
        </center>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import Vuecookies from 'vue-cookies'
  // eslint-disable-next-line no-unused-vars
  import db from '../homePage/api/firebaseInit'
  import firebase from 'firebase'
  import VueSimpleAlert from 'vue-simple-alert'
  const axios = require('axios')
  Vue.use(VueSimpleAlert)
  Vue.use(Vuecookies)
  var hash = require('object-hash')

  // var google = require('googleapis')
  // eslint-disable-next-line no-unused-vars
  // var fs = require('fs')
  // var OAuth2 = google.auth.OAuth2
  // var CLIENT_ID = '703374651518-t65ik5gui3nirdq2h5udriqv2nvh6lui.apps.googleusercontent.com'
  // var CLIENT_SECRET = 'ynzNem8K-ywiTBfrabJfa-Qq'
  // var REDIRECT_URL = 'http://localhost:8080'
  // var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
  // var drive = google.drive({ version: 'v3', auth: oauth2Client })

  // import Vue from 'vue'
  // import VueCookies from 'vue-cookies'
  // Vue.use(VueCookies)

  export default {
    data: () => ({
      className: '',
      // teacherEmail: '',
      loginEmail: '',
      password: '',
      // drive: '',

    }),
    mounted () {
      this.showError = false
      this.successBool = false
      if (!Vuecookies.isKey('admin')) { // check if admin home or a donor
        this.$router.push('/adminHome')
      }
    },
    methods: {

      addNew: function () {
        // //console.log(this.className + '->' + this.teacherEmail + '->' + this.loginEmail + '->' + this.password)
        firebase.auth().createUserWithEmailAndPassword(this.loginEmail, this.password) // create user with enterd password and email
          .then(user => {
                  axios.get(`https://us-central1-ds-portal-1585947467436.cloudfunctions.net/createFolder?classs=${this.className}&email=${this.loginEmail}&uid=${user.user.uid}`)
                    .then(() => {
                      // //console.log(response)
                      // response.data.forEach(element => {
                      // alert('Success')
                      this.$alert('Added', '', 'success')
                      // })
                    })
                    .catch(function (error) {
                      alert('Error occured '.error)
                      // eslint-disable-next-line no-unused-vars
                      const err = error
                    })
                },

                err => {
                  // alert(err.message);
                  this.$alert(err.message, '', 'error')
                },

          )
      },
      genPassword: function () {
        // loginEmail
        // console.log(hash(this.loginEmail).slice(1, 7))
        this.password = hash(this.loginEmail).slice(1, 7)
      },
      // addNew: function () {
      //   var google = require('googleapis')
      //   // eslint-disable-next-line no-unused-vars
      //   var fs = require('fs')
      //   var OAuth2 = google.auth.OAuth2
      //   var CLIENT_ID = '703374651518-t65ik5gui3nirdq2h5udriqv2nvh6lui.apps.googleusercontent.com'
      //   var CLIENT_SECRET = 'ynzNem8K-ywiTBfrabJfa-Qq'
      //   var REDIRECT_URL = 'http://localhost:8080'
      //   var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
      //   var drive = google.drive({ version: 'v3', auth: oauth2Client })
      //   var fileMetadata = {
      //     name: 'Invoices',
      //     mimeType: 'application/vnd.google-apps.folder',
      //   }
      //   drive.files.create({
      //     resource: fileMetadata,
      //     fields: 'id',
      //   }, function (err, file) {
      //     if (err) {
      //       // Handle error
      //       console.error(err)
      //     } else {
      //       //console.log('Folder Id: ', file.id)
      //     }
      //   })

      //   //console.log(this.className + '->' + this.teacherEmail + '->' + this.loginEmail + '->' + this.password)
      //   this.$alert('Added', '', 'success')
      // },

      logout () {
        firebase.auth().signOut().then(() => {
          Vuecookies.remove('user')
          Vuecookies.remove('folderID')
          Vuecookies.remove('subject')
          Vuecookies.remove('admin')
          this.$router.push('/Login')
        })
      },
    },
  }
</script>
