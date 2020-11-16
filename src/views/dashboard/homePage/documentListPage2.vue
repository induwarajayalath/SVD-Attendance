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
      <v-btn
        v-if="showBack"
        outlined
        color="white"
        height="30"
        @click="goBack"
      >
        <v-icon>arrow_back</v-icon>
        Back to Subject
      </v-btn>
      <v-spacer />
      <v-toolbar-title> Study Materials</v-toolbar-title>

      <v-spacer />
    </v-app-bar>
    <div
      v-if="!dataReady"
      align="center"
      justify="center"
      fill-height
    >
      <p>
        Loading... Please Wait
      </p>
      <v-progress-circular
        indeterminate
        color="amber"
      />
    </div>
    <div v-if="dataReady">
      <!-- folders----------------------------------------------------- -->
      <v-row>
        <v-col
          v-for="item in arrayReturnFolders"
          :key="item.id"
          cols="12"
          md="4"
        >
          <base-material-card
            color="#455A64"
            :title="item.name"
            class="px-5 py-3"
          >
            <v-card-actions color="primary">
              <v-spacer />
              <v-btn
                color="#d6a21d"
                @click="goToSubject(item.id)"
              >
                Continue
              </v-btn>
            </v-card-actions>
          </base-material-card>
        </v-col>
      </v-row>
      <!-- files------------------------------------------------------------ -->
      <v-row>
        <v-col
          v-for="item in arrayReturn"
          :key="item.id"
          cols="12"
          md="4"
        >
          <v-card
            color="secondary"
            dark
          >
            <v-card-title class="headline">
              {{ item.name }}
            </v-card-title>
            <v-card-actions color="primary">
              <v-btn
                text
                :href="item.webContentLink"
                target="_blank"
                class="my-3"
                outlined
              >
                Download Material
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import VueCookies from 'vue-cookies'
  const axios = require('axios')
  // eslint-disable-next-line no-unused-vars
  // const googleDrive = require('./drive/googledrive')
  // eslint-disable-next-line no-unused-vars
  // import googleDriveRun from './drive/googledrive'
  // const google = require('googleapis')
  // import google from 'vue-google-api'
  // const { google } = require('googleapis')
  Vue.use(VueCookies)
  var items = []
  var folders = []
  // var dataReady = false

  export default {
    data () {
      return {
        dataReady: false,
        items: items,
        folders: folders,
        showBack: true,
      }
    },
    computed: {
      arrayReturnFolders: function () {
        return folders
      },
      arrayReturn: function () {
        return items
      },
    },
    async mounted () {
      const subject = VueCookies.get('subject')
      const back = VueCookies.get('back')
      if (back === subject) {
        this.showBack = false
      }
      items = []
      folders = []
      // console.log(subject)
      // axios.post(`https://us-central1-ds-portal-1585947467436.cloudfunctions.net/lessonn?subject=${VueCookies.get('subject')}`)
      await axios.get(`https://us-central1-ds-portal-1585947467436.cloudfunctions.net/lessonn?subject='${subject}'`)
        .then(function (response) {
          // console.log(response)
          response.data.forEach(element => {
            // console.log(element.type)
            if (element.type === 'file') {
              items.push(element)
            } else {
              folders.push(element)
            }
          })
        })
        .catch(function (error) {
          // console.log(error)
          // eslint-disable-next-line no-unused-vars
          var err = error
        })
      // console.log('pushed')
      this.dataReady = true
      // console.log(folders)
      // console.log(items)
    },
    methods: {
      goToSubject: function (e) {
        // var backID = VueCookies.get('subject')
        // VueCookies.set('back', backID)
        VueCookies.remove('subject')
        VueCookies.set('subject', e)
        this.$router.push('/Documents')
      },
      goBack: function () {
        // console.log('going Back')
        var backID = VueCookies.get('back')
        VueCookies.set('subject', backID)
        this.$router.push('/Documents')
      },
    },

  }
</script>
