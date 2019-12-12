<template>

	

  <div id="app">

  	<div class="">
   
        <app-header/>
	    <router-view/>
	    <vue-snotify></vue-snotify>
        <b-modal id="unauthorizedModal" centered size="sm" no-close-on-esc no-close-on-backdrop  ref="unauthorizedModal" hide-header hide-footer>
          <h1>Se cerró tu sesión!</h1>
          <template v-if="unauthorizedError.data">
            <h2>{{unauthorizedError.data.message}}</h2>
          </template>

          <div class="text-right">
            <button class="btn btn-secondary btn-b d-inline mr-4" style="width: auto" v-on:click="goToLogin">Ir al inicio de sesión</button>
          </div>
      
      </b-modal>
    </div>
  </div>
</template>



<script>
import Vue from "vue";
import AppHeader from "@/components/AppHeader.vue";

export default Vue.extend({
  components: {
    AppHeader
  },

  data: function() {
    return {
      unauthorizedError: {}
    };
  },
  methods: {
    unauthorized(error) {
      this.unauthorizedError = error;
      this.$refs.unauthorizedModal.show();
    },


    goToLogin() {
      this.$router.replace({ name: "login" });
      this.$refs.unauthorizedModal.hide();
    }
  },

  mounted: function() {},


  
  watch: {
    
  },
});
</script>
<style lang="scss">
@import "~vue-snotify/styles/material";

@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";
@import "assets/_custome.scss";

</style>
