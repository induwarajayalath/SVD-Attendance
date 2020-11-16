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
      <v-toolbar-title>How to Use</v-toolbar-title>

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
            title="How to Use"
          >
            <center class="hidden-sm-and-down">
              <youtube
                video-id="UyDIBQe1GFw"
              />
            </center>
            <center class="hidden-md-and-up">
              <youtube
                video-id="UyDIBQe1GFw"
                player-width="300"
              />
            </center>
          </base-material-card>

          <base-material-card
            color="#455A64"
            class="px-5 py-3"
            title="About Us"
          >
            <p>
              GenixLabs is a revolutionary startup incorporated by few of the best minds from the UCSC (University of Colombo, School of Computing).
              We serve our clients with a multitude variation of skills acquired from working on multiple projects over the years in varied domains
              across the industry and serving many well known clients. Our services range from not only limited to software development but also
              network configuration and management, mobile app development, IOT projects etc. If you have an innovative idea to be implement something,
              this is the place for you to make it a reality
            </p>
            <p><b>Web App Developers - </b></P>
            <p>Induwara Jayalath<br>Tharinda Dilshan<br>Nishan Sameera<br>Isuru Sandaruwan</p>
            <p><b>Mobile App Developer - </b></P>
            <p>Dilshan Malaka</P>
            <p><b>Testers - </b></P>
            <p>Dinuka Jayalath <br> Lahiruka Wijesinghe</P>
            <p><b>Contact Us-</b></p>
            <p>GenixLabsLK@gmail.com<br>DJayalath@outlook.com</p>
          </base-material-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import VueYouTubeEmbed from 'vue-youtube-embed'
  Vue.use(VueYouTubeEmbed)
  export default {

  }
</script>
