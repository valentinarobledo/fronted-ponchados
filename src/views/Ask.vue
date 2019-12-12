<template>
	<div class="ask-page">
		<div class="container">

		<div class="ask">
			<i class="material-icons">playlist_add_check</i>
			<h3 class="name-ask">Cuestionario 1</h3>
				<h class="number-students">Número de preguntas: 15</h></br>
				<button class="btn btn-game">
				<router-link class="btn2" :to="{name: 'game'}">Jugar</router-link>
				</button></br>		
		</div>

		<div class="ask">
			<i class="material-icons">playlist_add_check</i>
			<h3 class="name-ask">Cuestionario 2</h3>
				<h class="number-students">Número de preguntas: 20</h></br>
				<button class="btn btn-game">
				<router-link class="btn2" :to="{name: 'game'}">Jugar</router-link>
				</button></br>		
		</div>

		<div class="ask">
			<i class="material-icons">playlist_add_check</i>
			<h3 class="name-ask">Cuestionario 3</h3>
				<h class="number-students">Número de preguntas: 30</h></br>
				<button class="btn btn-game">
				<router-link class="btn2" :to="{name: 'game'}">Jugar</router-link>
				</button></br>		
		</div>

		<div class="ask">
			<i class="material-icons">playlist_add_check</i>
			<h3 class="name-ask">Taller 1</h3>
				<h class="number-students">Número de preguntas: 30</h></br>
				<button class="btn btn-game">
				<router-link class="btn2" :to="{name: 'game'}">Jugar</router-link>
				</button></br>		
		</div>




	    </div>
		
	</div>
</template>

<script>
export default {

 	data: function() {
	    return {
	      	form: {}
		}
	},
	methods: {
		mostrar () {
			console.log(this.form.group);
			this.$refs.createGroup.hide();
		}
		
}	
}
</script>


<style lang="scss">
.ask-page{
	background:#F0F0F0;
	padding: 30px;
	min-height: 100vh;

	.ask{
		background:#DDDDDD;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border-radius: 2px;
		padding: 20px;
		max-width: 50%;
		margin: 0 auto;
		margin-top: 30px;
		max-height: 100vh;
		font-size: 20px;
		text-align: center;

	.btn2{
		text-decoration: none;
		color: white;
	}

	.btn-game{
		max-width: 50%;
	}

	.material-icons{
		float: left;
		font-size: 50px;
	}
}
}

</style>