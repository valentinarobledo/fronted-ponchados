<template>

	<ul class="pagination" v-if="data.last_page > 1">
	    <li class="page-item">
	      <a class="page-link"  v-on:click="goToPage(page-1)" v-if="page>1" aria-label="Previous">
	        <span aria-hidden="true">&laquo;</span>
	        <span class="sr-only">Anterior</span>
	      </a>
	    </li>
	    <li v-for="(i, index) in paginate(page, data)" :key="index" v-bind:class="(page == i) ? 'page-item active' : 'page-item'" >
	    	<a class="page-link"  v-on:click="goToPage(i)">{{i}}</a>
	    </li>
	   
	    <li class="page-item">
	      <a class="page-link" v-if="page < data.last_page"  v-on:click="goToPage(page+1)" aria-label="Next">
		        <span aria-hidden="true">&raquo;</span>
		        <span class="sr-only">Siguiente</span>
		      </a>
		 </li>
	</ul>


</template>



<script type="text/javascript">
export default {
  name: "app-pagination",
  props: ["data", "page"],
  methods: {
    goToPage(page) {
      this.$parent.goToPage(page);
    }
  }
};
</script>
