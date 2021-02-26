<template>
  <v-app light >
    <v-app-bar app >
      <v-app-bar-nav-icon @click.stop="toggleDrawer">
        <v-icon v-if="!drawer"> mdi-menu </v-icon>
        <v-icon v-else> mdi-close </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span v-if="drawer">MENÚ</span>
        <span v-else>{{ pageTitle }} </span>
      </v-toolbar-title>

      <div v-if="$nuxt.isOnline" class="f-right">
        <v-tooltip  v-model="showOnline" bottom >
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" >
              <v-icon color="green">
                mdi-circle
              </v-icon>
            </v-btn>
          </template>
          <span>En línea</span>
        </v-tooltip>
      </div>

      <div v-else class="f-right">
        <v-tooltip  v-model="showOffline" bottom >
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" >
              <v-icon color="red">
                mdi-circle
              </v-icon>
            </v-btn>
          </template>
          <span>Estás desconectado. Los cambios se guardarán en el equipo pero no en la nube.</span>
        </v-tooltip>
      </div>

    </v-app-bar>
    <v-main>
      <v-container>
        <Navigation />  
        <nuxt />
      </v-container>
    </v-main>
    <v-snackbar v-model="snackbar.status" :timeout="snackbar.timeout" :color="snackbar.type" dark>
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="hideSnackbar()" >
          <v-icon> mdi-close </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import Navigation from '../components/navigation';

export default {
  components: {
    Navigation
  },
  computed: {
    drawer()    { return this.$store.getters["getDrawer"]},
    snackbar()  { return this.$store.getters["getSnackbar"]},
    pageTitle() { return this.$store.getters["getPageTitle"]},
  },
  data: () => ({
    showOnline: false,
    showOffline: false,
    isOnline: null
  }),
  methods: {
    toggleDrawer() {
      this.$store.dispatch('toggleDrawer');
    },
    hideSnackbar() {
      this.$store.dispatch('hideSnackbar');
    }
  },
  watch: {
    '$nuxt.isOnline': function( newValue, oldValue ) {
      this.$store.dispatch( 'toggleOnline', newValue );
    }
  },
}
</script>

<style>
  *{
    font-family: "Roboto";
  }
  .text-uppercase{
    text-transform: uppercase;
  }
  .f-right{
    position: absolute;
    right: 15px;
  }
  .v-main__wrap{
    background-color: transparent !important;
    background-image: url("../assets/imgs/wave.svg") ;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>