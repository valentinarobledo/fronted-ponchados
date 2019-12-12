<template>
	<div class="question-page">
		<div class="button">
			<button class="btn btn-start">
				<router-link class="btn2" :to="{name: 'game'}">Empezar</router-link>
			</button></br>
			<button class="btn btn-add" v-b-modal.addQuestion>
				Agregar pregunta
			</button>
		</div>
			<div class="container">
				
				<div class="table">
					<table>
						<thead>
							<tr>
								<th></th>
								<th>Preguntas</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody >
							<tr v-for="(item, index) in questions" :key="index">
								<tb>{{index + 1}}</tb>
								<td>
									<div>{{item.question}}</div>
									<div class="row">
										<div class="col-md-6" v-for="(answer, index) in item.Answers" :key="index">
											{{answer.answer}}
											la suya
										</div>
									</div>
								</td>
								<td>
									<button v-b-modal.editQuestions class="btn btn-editQuestions" v-click="save(item)">Editar pregunta
									</button>	
									
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<b-modal id="editQuestions" ref="editQuestions" hide-footer hide-header size="lg" centered>
				<form v-on:submit.prevent="edit()">
					<input type="text" class="form-control" v-model="form.question" placeholder="Agregue la pregunta">
					<input type="text" class="form-control" v-model="answer" placeholder="Agregue las respuestas">
					<button class="btn btn-game" v-on:click="add">Agregar</button>
					<div class=" mt-3" v-for = "(item, index) of options" :key="index">
						 	<div role = "alert" :class = "['alert', item.estado ? 'alert-success' : 'alert-primary']">
						 		<div class="d-flex justify-content-between">
						 		<div> {{item.name}} </div>
									<div>
						 				<button class="btn btn-check" v-on:click="change(index)">
						 					<i class="material-icons">check</i>
											</button>
										<button class="btn btn-del" v-on:click="del(index)">
											<i class="material-icons">delete</i>
									</button>
						 			</div>
						 		</div>
						 	</div>
					</div>
					<button class="btn btn-game">Enviar</button>
				</form>
		 	</b-modal>

		 	<b-modal id="addQuestion" ref="addQuestion" hide-footer hide-header size="lg" centered>
					<input type="text" class="form-control" v-model="form.question" placeholder="Agregue la pregunta">
					<input type="text" class="form-control" v-model="answer" placeholder="Agregue las respuestas">
					<button class="btn btn-game" v-on:click="add">Agregar</button>
					<div class=" mt-3" v-for = "(item, index) of options" :key="index">
						 	<div role = "alert" :class = "['alert', item.estado ? 'alert-success' : 'alert-primary']">
						 		<div class="d-flex justify-content-between">
						 		<div> {{item.name}} </div>
									<div>
						 				<button class="btn btn-check" v-on:click="change(index)">
						 					<i class="material-icons">check</i>
											</button>
										<button class="btn btn-del" v-on:click="del(index)">
											<i class="material-icons">delete</i>
									</button>
						 			</div>
						 		</div>
						 	</div>
					</div>
					<button class="btn btn-game" v-on:click="addQuestion()">Enviar</button>
		 	</b-modal>
		</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import {
	QUESTIONS_INDEX,
	QUESTIONS_ADD
} from "@/store/actions.type";

export default {
	computed: {
		...mapGetters(["questions"])
	},
 	data: function() {
	  return {
	      	
    	filters: {},
    	form: {},
    	questions: [],
    	options: [],
			question: '',
			answer: ''	
		}
	},
	methods: {
		add: function(){
				name: this.question
			this.options.push({
				name: this.answer,
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
		},
		save(item){

		},
		index () {
			this.$store.dispatch(QUESTIONS_INDEX, this.filters)
			.then( questions => {
				this.questions = questions;
			});
		},
		addQuestion(){
			this.$store.dispatch(QUESTIONS_ADD, this.options)

		}
	}	,
	mounted () {
		this.index();
	}
}
</script>

<style lang="scss">

.question-page{
	background:#D6DBDF;
	min-height:100vh;
	padding: 30px;


	.button{
		float: right;
		margin-right: 50px;
	}

	.form{
		padding: 20px;
		box-shadow: 0 0 20px rgba(0,0,0, 0.4);
		background: #fff;
		border-radius: 10px;
		margin-bottom: 20px;
		margin-left: 10px;
		max-width: 70%;
	}

	.questions{
		font-size: 20px;
		font-family: sans-serif;
	}
	.btn-editQuestions{
		margin-top: 15px;
		background: #1CB0F6;
		box-shadow: 2px 2px #05587f;
		border-radius: 5px;
		color: white;
		font-weight: bold;
		&:hover{
			background: #85C1E9;
		}
	}

	.btn-acept{
		margin-top: 15px;
		background: #1CB0F6;
		box-shadow: 2px 2px #05587f;
		border-radius: 5px;
		margin-left: 15px;
		&:hover{
			background: #85C1E9;

		}

	}

	.btn-start{
	
		background:#E53B3B;
		border-radius: 10px;
		margin-right: 50px;
		margin-bottom: 20px;
		border-bottom:5px solid #ad1717;
		color:white;
		font-weight: bold;
		font-size: 20px;
		&:hover{
			background:#FF9797;
			margin-top: 5px;
			border-bottom: 0px;
		}
	}
	.btn2{
		text-decoration: none;
		color:white;
		font-weight: bold;
	}
	.btn-add{
		margin-right:50px;
		background: #b0eb00;
		border-radius: 10px;
		border-bottom: 5px solid #7ba207;
		color: white;
		font-weight: bold;
		&:hover{
			background:#8EE000;
			border-bottom:0px;
			margin-top: 5px;
		}
	}
	.form-control{
		margin-bottom: 10px;
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