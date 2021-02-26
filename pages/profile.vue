<template>
  <div>
    <v-col>
      <v-row class="imageContainer">
        <v-img
          height="180"
          :src="image"
          class="profileImage"
        ></v-img>
      </v-row>
      <v-row align="center">
        <h3 class="userName" v-if="user != null">
          {{ user.name }}
        </h3>
      </v-row>
      <v-row align="center" class="sotialNetworks" >
        <a class="iconBackground" href="#">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="iconBackground" href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a class="iconBackground" href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
    user: null,
  }),
  mounted(){
    this.$store .dispatch( 'getUser' )
                .then(user => {
                  console.log(user);
                  this.user = user.data;
                });
  }
}
</script>

<style>
  .imageContainer{
    width: 180px;
    margin: 0 auto;
  }
  .imageContainer .profileImage{
    border-radius: 100%;
    border: 10px solid whitesmoke;
  }
  .userName{
    font-weight: bold;
    font-size: 20pt;
    margin: 0 auto;
  }
  .sotialNetworks{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iconBackground {
    text-align: center;
    background: black;
    border-radius: 100%;
    padding: 4px;
    margin: 20px 15px;
    color: white !important;
    width: 30px;
    height: 30px;
  }
  .iconBackground:hover{
    background: #6b73ff;
  }
</style>