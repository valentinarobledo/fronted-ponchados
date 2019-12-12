<template>
	<div class="profile-page">
		<div class="form">
			<label class="name">Valentina Robledo</label></br>	
			<label class="info">
				<i class="material-icons">
					perm_identity
				</i>
				student_1
			</label></br>
			<label class="info">
				<i class="material-icons">
					email
				</i> valenrobledo31@gmail.com
			</label></br>
			<label class="info">
				<i class="material-icons">
					call
				</i>  Mi numero: 3135863061
			</label></br>
			<label class="info">
				<i class="material-icons">
					star_border
				</i>
				Mis puntos: 500
			</label></br>
			<label class="info" href="#/ask">
				<i class="material-icons">
					group
				</i>
				Mi grupo: Team 1
			</label></br>
			<button class="btn btn-link">
				<router-link class="btn2" :to="{name: 'ask'}">
				<i class="material-icons">
					playlist_add_check
				</i> Cuestionarios: 5
				
				</router-link>
			</button></br>

			<button v-b-modal.editInfo class="btn btn-edit">Editar información</button>
			
		</div>
		
		<b-modal id="editInfo" ref="editInfo" hide-footer hide-header size="md" centered>
			<div>
				<div>
				<input type="text" class="form-control" placeholder="Editar nombre" v-model="form.name">
				<input type="password" class="form-control" placeholder="Cambiar contraseña" v-model="form.password">
				<input type="number" class="form-control" placeholder="Cambiar numero" v-model="form.number">
				<input type="email" class="form-control" placeholder="Cambiar email"v-model="form.email">
				</div>
				<button class="btn btn-game" v-on:click="show()">Enviar</button>
			</div>
		</b-modal>
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
		show () {
			console.log(this.form.name, this.form.password, this.form.number, this.form.email);
			this.$refs.editInfo.hide();

		}
}	
}
</script>

<style>
.profile-page{
	background:#CFCFCF;
	padding: 20px;
	min-height: 100vh;

}

.form {
		max-width: 500px;
		margin: 0 auto;
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 0 5px rgba(0,0,0,0.2);
		padding: 70px 0;
	}

.info{
	font-size: 16px;
	font-family: sans-serif;
	margin-bottom: 10px; 


}

.btn-edit{
	margin-top: 15px;
	background: #1CB0F6;
	border-bottom: 5px solid #198bce;
	border-radius: 5px;
	margin-top: 20px;

}




.name{
	font-size: 30px;
	font-weight: bold;

}

.material-icons{
	font-size:16px;
	font-weight: bold;
}

.btn-2 {
	text-decoration: none;
	color:#2c3238;
}


</style>