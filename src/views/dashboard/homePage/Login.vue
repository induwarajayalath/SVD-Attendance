
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
          <v-alert v-model="showError" type="error" dismissible>
            {{ this.errormm }}
          </v-alert>
          <v-alert
            v-model="successBool"
            type="success"
            dismissible
            transition="scale-transition"
            >{{ this.successMsg }}</v-alert
          >
          <v-card class="elevation-9 pa-3" color="#ffffff">
            <v-card-text>
              <div class="layout column align-center">
                <img
                  src="../../../assets/D._S._Senanayake_College_crest.png"
                  alt="DUC logo"
                  width="200"
                  height="120"
                />
                <h1 class="flex my-4 primary--text">Mark Attendance</h1>
              </div>
              <v-form>
                <v-text-field
                  v-model="barcode"
                  append-icon="scanner"
                  name="barcode"
                  label="Scan the barcode"
                  @keyup.enter.native="enterBarcode"
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
  </v-app>
</template>

<script>
/* eslint-disable no-unused-vars */
import db from "./api/firebaseInit";
import firebase from "firebase";
import Vue from "vue";
import VueCookies from "vue-cookies";
import VueParticles from "vue-particles";
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);
Vue.use(VueParticles);
Vue.use(VueCookies);
export default {
  data: () => ({
    loading: false,
    barcode: "",
    showError: false,
    errormm: " ",
    successMsg: "",
    successBool: false,
  }),
  methods: {
    enterBarcode: function (e) {
      let dateVar = new Date();
      let data = {
        barcode: this.barcode,
        timestamp: dateVar,
        date:
          dateVar.getFullYear() +
          "/" +
          (dateVar.getMonth() + 1) +
          "/" +
          dateVar.getDate(),
      };
      console.log(data);
      db.collection("attendance")
        .add(data)
        .then(() => {
          console.log("Done");
          this.barcode = "";
          this.addSubjectBool = false;
        });
    },
  },
};
// login: function (e) {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(this.email, this.password)
//     .then(
//       (user) => {
//         VueCookies.config("7d");
//         this.showError = false;
//         this.successMsg = "Login Success";
//         this.successBool = true;
//         const uid = firebase.auth().currentUser.uid;
//         // console.log(uid)

//         const userDetails = db
//           .collection("userDetails")
//           .doc(uid)
//           .get()
//           .then((doc) => {
//             if (doc.exists) {
//               e = doc.data().folderName;
//               VueCookies.set("user", uid);
//               VueCookies.set("folderID", e);
//               VueCookies.set("userEmail", this.email);
//               this.$router.push("/");
//             } else {
//               this.successBool = false;
//               this.$alert("Contact Admin", "", "warning");
//               this.$router.push("/Login");
//             }
//           })
//           .catch((err) => {
//             const error = err;
//             // //console.log('Error getting document', err);
//           });
//       },
//       (err) => {
//         // alert(err.message);
//         // this.errormm = err.message
//         // this.showError = true
//         this.$alert(err.message, "", "error");
//         this.$router.push("/Login");
//       }
//     );
//   e.preventDefault();
// }
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
