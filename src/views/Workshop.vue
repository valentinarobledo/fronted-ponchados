<template>
	<div class="workshop-page">
		<div class="form">
			
			<div class="text">
			<p>
				
					Qué es Epistemología:

					La epistemología es una rama de la filosofía que se ocupa de estudiar la naturaleza, el origen y la validez del conocimiento.

					La palabra epistemología está compuesta por las palabras griegas ἐπιστήμη (epistéme), que significa ‘conocimiento’, y λόγος (lógos), que traduce ‘estudio’ o ‘ciencia’.

					En este sentido, la epistemología estudia los fundamentos y métodos del conocimiento científico. Para ello, toma en cuenta factores de tipo histórico, social y psicológico con el objeto de determinar el proceso de construcción del conocimiento, su justificación y veracidad.

					De allí que la epistemología procura dar respuestas a preguntas como: ¿qué es el conocimiento?, ¿deriva de la razón o de la experiencia?, ¿cómo determinamos que aquello que hemos entendido es, en efecto, verdad?, ¿qué logramos con esta verdad?

					Por esta razón la epistemología es una disciplina que se acostumbra a aplicar en las ciencias a fin de establecer el grado de certeza del conocimiento científico en sus diferentes áreas. De esta manera, la epistemología también se puede considerar parte de la filosofía de la ciencia.


			</p>	
			</div>
			<button v-b-modal.addQuestion class="btn btn-add" >Crear pregunta</button>
			<div class="download">
				<i class="material-icons">
					arrow_downward
				</i>
				Descarga aquí</div>
		</div>

		<b-modal id="addQuestion" ref="addQuestion" hide-footer hide-header size="logramos" centered>
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
	 	</b-modal>		
	</div>


</template>

<script>
export default {

 	data: function() {
	    return {
    	form: {},
    	options: [],
			options:[],
			question: '',
			answer: ''		
		}
	},
	methods: {
		mostrar () {
			console.log(this.form.question, this.form.checked, this.form.ans);
			this.$refs.addQuestion.hide();
		},
		add: function(){
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
		}
		
		}	
}
</script>

<style lang="scss">

.workshop-page{

	background: #DDDD;
	min-height: 100vh;

	
	.text
	{	
		font-size: 14px;
		max-width: 1000px;
		margin: 0 auto;
		border-radius: 10px;
		padding: 40px;
		box-shadow: 0 0 10px rgba(0,0,0,0.3);
		padding: 70px 0;
	}

	.btn-add{

		margin-top: 20px;
		margin-left: 120px;
		border-radius: 5px;
		background: #8549BA;
		font-family: sans-serif;
		color:white;
		font-weight: 900;
		border-bottom: 5px solid #1d0531;
		&:hover{
			border-bottom: 0px;
			background:#A560EB;
		}
	}


	.title{
		margin-top: 20px;
		font-size: 20px;
		font-family: sans-serif;
		margin-bottom: 20px;

	}
	.form-control{
		margin-bottom: 10px;
	}
	
	.download{
		font-weight: bold;
		font-size: 14px;
		color:#1CB0F6;
		cursor: pointer;
		float: right;
		margin-bottom: 20px;
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
