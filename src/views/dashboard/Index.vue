
<template>
  <v-app>
    <v-content id="login" :bg="false">
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
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4" lg="3">
          <v-alert v-model="showError" type="error">
            {{ this.errormm }}
          </v-alert>
          <v-card class="elevation-9 pa-3" color="#ffffff">
            <v-card-text>
              <div class="layout column align-center">
                <img
                  src="../../assets/D._S._Senanayake_College_crest.png"
                  alt="DUC logo"
                  width="200"
                  height="120"
                />
                <h1 class="flex my-4 primary--text">Mark Attendance</h1>
                <v-container fluid class="py-0">
                  <v-row>
                    <v-col>
                      <v-switch
                        inset
                        v-model="inSelected"
                        label="IN"
                        @change="InSelected()"
                      ></v-switch>
                    </v-col>
                    <v-col>
                      <v-switch
                        inset
                        v-model="outSelected"
                        label="OUT"
                        @change="OutSelected()"
                      ></v-switch>
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="justify-space-between">
                    <v-col cols="12" md="6 pr-5">
                      <v-select
                        v-model="userType"
                        label="Select User"
                        :items="users"
                        dense
                        outlined
                      />
                    </v-col>
                    <v-col cols="12" md="6 pr-5">
                      <v-select
                        v-model="dayType"
                        label="Select Time"
                        :items="times"
                        dense
                        outlined
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </div>
              <v-form v-on:submit.prevent="enterBarcode">
                <v-text-field
                  v-model="barcode"
                  append-icon="scanner"
                  name="barcode"
                  label="Scan the barcode"
                  type="number"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="primary" @click="enterBarcode">Enter</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="successBool"
      :timeout="1500"
      color="success"
      outlined
      right
      top
    >
      {{ this.successMsg }}
    </v-snackbar>
  </v-app>
</template>

<script>
/* eslint-disable no-unused-vars */
import db from './homePage/api/firebaseInit'
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
    barcode: '',
    showError: false,
    errormm: ' ',
    successMsg: '',
    successBool: false,
    toggle_exclusive: undefined,
    users: ['Teacher', 'Student'],
    userType: 'Student',
    times: ['Sunday', 'Poya', 'Thurunusavi'],
    dayType: 'Sunday',
    inOutType: '',
    outSelected: false,
    inSelected: false,
  }),
  methods: {
    InSelected: function() {
      console.log('In')
      this.inOutType = 'IN'
      this.outSelected = false
    },
    OutSelected: function() {
      console.log('Out')
      this.inOutType = 'OUT'
      this.inSelected = false
    },
    enterBarcode: function(e) {
      this.showError = true
      this.errormm = 'WAIT !!'
      let dateVar = new Date()
      let data = {
        userType: this.userType,
        category: this.dayType,
        type: this.inOutType,
        barcode: this.barcode,
        time:
          (dateVar.getHours() < 10 ? '0' : '') +
          dateVar.getHours() +
          ':' +
          (dateVar.getMinutes() < 10 ? '0' : '') +
          dateVar.getMinutes() +
          ':' +
          (dateVar.getSeconds() < 10 ? '0' : '') +
          dateVar.getSeconds(),
        date:
          dateVar.getFullYear() +
          '/' +
          (dateVar.getMonth() + 1) +
          '/' +
          dateVar.getDate(),
        timeStamp: dateVar,
      }
      console.log(data)
      // db.collection('attendance')
      //   .add(data)
      //   .then(() => {
      //     console.log('Done')
      //     this.showError = false
      //     this.successMsg = this.barcode + ' added'
      //     this.barcode = ''
      //     this.successBool = true
      //   })
      //   .catch(function(error) {
      //     this.showError = true
      //     console.error('Error writing document: ', error)
      //     this.errormm = 'ERROR OCCURED !!'
      //   })
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
  text-align: center;
}
</style>
