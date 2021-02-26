<template>
  <div class="formContainer">
    <v-form action="" class="form" ref="form" @submit.prevent="saveData">
      <v-row>
        <h3 class="title">Formulario</h3>
      </v-row>
      <v-row>
        <span class="subtitle">
          Por favor complete el siguiente formulario
        </span>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="form.names"
            :rules="nameRules"
            label="Nombres *"
            required
            class="formField-custom"
            filled solo
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="form.address"
            label="Dirección"
            class="formField-custom"
            filled solo
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-select
            v-model="form.genre"
            :items="genres"
            label="Género"
            class="formField-custom"
            filled solo
          ></v-select>
        </v-col>
        <v-col cols="12" md="12">
          <span class="note">
            * Campos requeridos
          </span>
        </v-col>
        <v-col cols="12" md="12">
          <v-btn class="buttonSend" type="submit" block x-large dark>
            ENVIAR
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    genres: ['Masculino','Femenino','Otro'],
    nameRules: [
      field => !!field || 'El nombre es requerido',
    ],
    form: {
      names:    null,
      address:  null,
      genre:    null
    }
  }),
  methods: {
    saveData(){ 
      if( this.form.names == '' || this.form.names == null || this.form.names == " " )
        return false;
      this.$store.dispatch( 'saveUser', JSON.stringify(this.form) );
    }
  }
}
</script>

<style>
  .formContainer{
    padding: 25px;
  }
  .title{
    display: block;
    width: 100%;
    font-weight: bold;
    padding: 0 15px;
  }
  .subtitle{
    display: block;
    width: 100%;
    font-size: 12pt;
    padding: 0 15px;
    margin-bottom: 25px;
  }
  .formField-custom .v-input__slot{
    background: rgb( 238, 238, 238 ) !important;
    border-radius:5px;
    padding: 0px 20px !important;
    border: 0px !important;
    box-shadow: none !important;
  }
  .formField-custom .v-input__slot label{
    color: black !important;
  }
  .formField-custom .v-select__slot label{
    color: black !important;
    position: initial !important;
  }
  .formField-custom .v-input__slot input{
    background: rgb( 238, 238, 238 ) !important;
  }
  .buttonSend{
    background: rgb(114,234,242);
    background: linear-gradient(170deg, rgba(114,234,242,1) 0%, rgba(107,120,254,1) 100%);
    font-weight: bold;
    color: white;
    text-shadow: 0px 4px 3px gray;
    font-size: 16pt !important;
    border-radius: 5px;
    padding: 20px 0px !important;
  }

</style>