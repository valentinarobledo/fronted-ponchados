<template>
	<div class="page-login">		
		<div class="form">
			<div class="avatar"></div>
			<form v-on:submit.prevent="login()">
				<div class="input-group">
					<input type="text" class="form-control input-form v1" placeholder="Username" v-model="form.username">
				</div>

				<div class="input-group">
					<input type="password" class="form-control input-form" placeholder="Password" v-model="form.password">
				</div>

				<button class="btn btn-game" type="submit">
					<div class="btn2" >Ingresar</div>
				</button>
			</form>
			<button class="btn btn-link" v-on:click="$refs.forgotPassword.show()">Recuperar contraseña</button>
			<button class="btn btn-link">
				<router-link class="btn btn-link" :to="{name: 'register'}">Registrar</router-link>
			</button>

		</div>


		<b-modal id="forgotPassword" ref="forgotPassword" hide-footer hide-header size="sm" centered>
			<div class="form-group">
				<label>Coloca tu correo</label>
				<input type="password" class="form-control" placeholder="Email">
			</div>

			<button class="btn btn-primary">Recuperar</button>

		</b-modal>


	</div>
</template>
<script>
import { mapGetters } from "vuex";
import {
	LOGIN
} from "@/store/actions.type";

export default {
	computed: {
		
	},
 	data: function() {
	    return {
	      	form: {}
		}
	},
	methods: {
		login () {
			console.log(this.form);
			this.$store.dispatch(LOGIN, this.form)
			.then( () => this.$router.push({name: "dashboard" }))
			.catch( error => this._handleError(error) );
		},
		_handleError (error) {
			this.form.password = "";
			this.$snotify.error(error.message);
		}
	}	,
	mounted () {
		console.log(this.form)
	}
}
</script>
