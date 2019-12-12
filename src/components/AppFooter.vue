<template>
	<footer class="page-footer font-small indigo">

    <div class="footer-copyright text-center py-3">
      <div class="float-right">
        <a href="https://www.wecoding.co" target="_blank">
          <img src="https://www.wecoding.co/img/logo.png" class="b-logo">
        </a>
      </div>
    
      CashFactoring - {{$t('footer.rights')}}
    </div>
    <!-- Copyright -->

  </footer>
</template>


<script>
import Vue from "vue";

export default Vue.extend({
  name: "app-footer",

  methods: {}
});
</script>


<style>
footer {
  overflow: hidden;
  margin-top: 30px;
  background: #fff;

  .logo {
    padding: 50px;
    max-width: 100%;
  }
}
.b-logo {
  height: 60px;
}
</style>
