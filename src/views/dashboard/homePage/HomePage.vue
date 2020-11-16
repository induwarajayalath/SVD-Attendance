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
      <v-toolbar-title>Subjects Related</v-toolbar-title>

      <v-spacer />
    </v-app-bar>
    <div
      v-if="!dataReady"
      align="center"

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
      <v-row>
        <v-col
          v-for="item in arrayReturn"
          :key="item.id"
          cols="12"
          md="4"
        >
          <base-material-card
            color="#455A64"
            :title="item.name"
            class="px-5 py-3"
          >
            <v-card-text class="px-0 pb-0">
              <v-sheet />
              <div class="my-2">
                <v-btn
                  color="#d6a21d"
                  @click="goToSubject(item.id)"
                >
                  Continue
                </v-btn>
              </div>
            </v-card-text>
          </base-material-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import Vuecookies from 'vue-cookies'
  const axios = require('axios')

  Vue.use(Vuecookies)
  var items = []

  export default {
    data: function () {
      return {
        dataReady: false,
        items: [
          {
            name: 'Foo',
            id: 12345,
          },
        ],
      }
    },
    computed: {
      arrayReturn: function () {
        return items
      },
    },
    async mounted () {
      // console.log(Vuecookies.get('folderID'))
      items = []
      // //console.log(subject)
      await axios.post(`https://us-central1-ds-portal-1585947467436.cloudfunctions.net/subjects?class='${Vuecookies.get('folderID')}'`)
        .then(function (response) {
          // console.log(response)
          response.data.forEach(element => {
            // console.log(element)
            items.push(element)
            // console.log('psuhed')
          })
          // location.reload()
        })
        .catch(function (error) {
          // console.log(error)
          // eslint-disable-next-line no-unused-vars
          const err = error
        })
      this.dataReady = true
    },
    methods: {
      goToSubject: function (e) {
        Vuecookies.remove('subject')
        Vuecookies.set('subject', e)
        Vuecookies.set('back', e)
        this.$router.push('/Documents')
      },
    },
  }
</script>
