<template>
	
	<div :class="'loader '+this.size + ' '+this.align" v-if="flag"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "app-loader",
  props: ["flag", "size", "align"]
});
</script>

<style>
.loader {
  margin: 0 auto;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  &.sm {
    width: 35px;
    height: 35px;
    border-width: 7px;
    // border-color: #fff;
    // border-top-color:#3498db;
  }

  &.left {
    margin: 0;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
