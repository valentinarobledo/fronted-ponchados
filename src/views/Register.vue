<template>
		<div class="register-page">
			<div class="form">
			<form v-on:submit.prevent="register()">
					<div class="input-group">
					<input type="text" class="form-control input-form v1" placeholder="Nombre completo" v-model="form.name">
					</div>
					<div class="input-group">
						<input type="email" class="form-control input-form v2" placeholder="Email" v-model="form.email">
					</div>
					<div class="input-group">
						<input type="number" class="form-control input-form v2" placeholder="Número de celular" v-model="form.number" >
					</div>
					<div class="input-group">
						<input type="password" class="form-control input-form v2" placeholder="Contraseña" v-model="form.password">
					</div>
					<div class="input-group">
						<input type="password" class="form-control input-form" placeholder="Confirmar Contraseña" v-model="form.verifyPassword">
					</div>
					<div>
						<button class="btn btn-game" type = "submit">Aceptar</button>
					</div>	
					</form>			
		</div>
	</div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import {
	REGISTER
} from "@/store/actions.type";
export default {
	computed: {

	},
	data: function(){
		return{
			form:{}
		}
	},
	methods: {
		register(){
			console.log(this.form);
			this.$store.dispatch(REGISTER, this.form)
			.then(() => this.$router.push({name: "login"}));
		}

	},
	mounted () {
		console.log(this.form)
	}
}
</script>


