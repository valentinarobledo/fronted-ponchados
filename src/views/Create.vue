<template>
	<div class="create-page">
		<div class="form">
			<input type="text" class="form-control" v-model="question" placeholder="Agregue la pregunta">
			<input type="text" class="form-control" v-model="answer" placeholder="Agregue las respuestas">
			<button class="btn btn-game" @click="add">Agregar</button>
			<div class=" mt-3" v-for = "(item, index) of options">
				 	<div role = "alert" :class = "['alert', item.estado ? 'alert-success' : 'alert-primary']">
				 		<div class="d-flex justify-content-between">
				 		<div> {{item.name}} </div>
							<div>
				 				<button class="btn btn-check" @click="change(index)">
				 					<i class="material-icons">check</i>
									</button>
								<button class="btn btn-del" @click="del(index)">
									<i class="material-icons">delete</i>
							</button>
				 			</div>
				 		</div>
				 	</div>
			</div>
			<button class="btn btn-game">Enviar</button>
		</div>
	</div>
</template>

<script>
	
export default {
	data: function() {groups
		return {
			options: [],
			options:[],
			question: '',
			answer: ''				
		};
	},

	methods: {
		add: function(){
			this.options.push({
				name: this.answer,
				name: this.question,
				status: false
			});

			console.log(this.options);
			this.answer = '';
		},

		change: function(index){
			console.log('change ', index);
			this.options[index].status = true;
		},

		del: function(index){
			console.log(index);
			this.options.splice(index, 1);
		}
	}

		}
</script>

<style lang="scss">
		.create-page{
			min-height: 100vh;
			background: #AFAFAF;

			.form{
				max-width: 500px;
				margin: 0 auto;
				border-radius: 10px;
				padding: 20px;
				box-shadow: 0 0 5px rgba(0,0,0,0.2);
				padding: 70px 0;

		}

		.form-control{

			margin-top:20px;
			border-radius: 10px 10px 10px 10px;
			border: none;
			}

			.btn-check{
				font-size: 10px;
				background: #7AC70C;
				border-radius: 10px;
				color: white;
				padding: 5px;
				&:hover{
					background: #BFF199;
				}
			}

			.btn-del{
				font-size: 10px;
				background: #E53B3B;
				border-radius: 10px;
				color: white;
				padding: 5px;
				margin-left: 10px;
				&:hover{
					background: #FF9797;
				}
			}
}

</style>