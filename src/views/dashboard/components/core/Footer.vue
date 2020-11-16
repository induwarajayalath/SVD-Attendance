<template>
  <v-footer
    absolute
    padless
    max-height="45"
  >
    <!-- <v-container> -->
    <v-spacer />
    <div class="body-1 font-weight-light text-center">
      by <a href="https://www.facebook.com/GenixLabs">GenixLabs</a>
    </div>
    <!-- </v-container> -->
  </v-footer>
</template>

<script>
  export default {
    name: 'DashboardCoreFooter',
  }
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
      // margin-bottom: 0em
</style>
