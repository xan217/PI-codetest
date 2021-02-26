<template>
  <v-navigation-drawer :value="drawer" color="background" absolute>
    <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.to" router exact>
      <v-list-item-content @click="setPageTitle(item.title)">
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
    <div class="bottom-section">
      <span>
        Versión 0.1<br>
        Todos los derechos reservados
      </span>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({
    menuItems: [
      {
        title: 'Captura de Datos',
        to: '/get-data'
      },
      {
        title: 'Mi Perfil',
        to: '/profile'
      },
    ],
  }),
  computed: {
    drawer() { return this.$store.getters["getDrawer"]},
    pageTitle() { return this.$store.getters["getPageTitle"]}
  },
  methods: {
    setPageTitle(pageTitle){
      this.$store.dispatch('setTitle', pageTitle);
      this.$store.dispatch('toggleDrawer');
    },
  },
}
</script>

<style>
  .bottom-section{
    width: 100%;
    position: absolute;
    bottom: 0;
    color: #B0B0B0;
    font-size: 10pt;
    padding: 1rem;
    font-weight: 200;
  }
  .theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: #FFF;
    font-weight: bold;
}
  
</style>