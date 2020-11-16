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
      <v-toolbar-title>What you feel</v-toolbar-title>

      <v-spacer />
    </v-app-bar>

    <div>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <base-material-card
            color="#455A64"
            class="px-5 py-3"
            title="Let us know what we've done"
          >
            <p>
              Please drop us a message on how you feel the experience on this portal. Any comments and suggestions are also highly welcome.<br>

              Please note that all the feedback forms <b>must contain your name</b> with first name and last name. Otherwise your feedback would
              be considered as spam and will be discarded automatically. As all your login sessions are saved in our system please do not put bogus details
              in your feedback form.

              <br><br>Cheers!
              <br><br>
              Best Regards,
              <br>
              GenixLabsLK
            </p>
            <p><b>Give a feedback - </b></P>
            <v-text-field
              v-model="name"
              append-icon="person"
              name="name"
              label="Full Name"
              type="text"
              required
            />
            <v-textarea
              v-model="msg"
              placeholder="Type your feedback here"
              full-width
              height="100"
              required
            />
            <v-btn
              block
              color="success"
              @click="sendFeedback"
            >
              Send Feedback
            </v-btn>
          </base-material-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  import db from './api/firebaseInit'
  import Vue from 'vue'
  import VueCookies from 'vue-cookies'
  import VueSimpleAlert from 'vue-simple-alert'
  Vue.use(VueSimpleAlert, VueCookies)

  const userEmail = VueCookies.get('userEmail')
  // console.log(userEmail)

  export default {
    data () {
      return {
        msg: '',
        name: '',
      }
    },
    methods: {
      sendFeedback: function () {
        // console.log(userEmail)
        // console.log(this.msg)
        // console.log(this.name)
        if (this.msg === '' || this.name === '') {
          this.$alert('Fill all fields', '', 'warning')
        } else {
          const data = {
            name: this.name,
            email: userEmail,
            message: this.msg,
          }

          // Add a new document in collection "cities" with ID 'LA'
          db.collection('feedbacks').doc().set(data).then(() => {
            this.$alert('Message Sent Successfully', '', 'success')
            this.$router.push('/')
          })
        }
      },
    },
  }
</script>
