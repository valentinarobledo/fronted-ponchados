<template>
	<div class="groups-page">
		<div class="container">
			<button v-b-modal.createGroup class="btn btn-create">Crear Grupo</button>
	
			<div class="table">
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Nombre</th>
							<th>Estudiantes</th>
							<th>Puntos</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in groups" :key="index">
							<td>{{index + 1}}</td>
							<td>{{item.name}}</td>
							<td>{{item.students}}</td>
							<td>{{item.points}}</td>
							<td>
								<button class="btn btn-group btn-sm" v-on:click="view(item)" v-b-modal.viewModal>Ver detalles</button>
								<button class="btn btn-group btn-sm" v-on:click="saveGroupToEdit(item)" v-b-modal.editModal>Editar estudiantes</button>
								<button class="btn btn-del btn-sm" v-on:click="saveGroup(item)" v-b-modal.delModal>Eliminar</button>
							</td>
							
						</tr>
					</tbody>
				</table>
			</div>	
		</div>
		<b-modal id="createGroup" ref="createGroup" hide-footer hide-header size="md" centered>
	 		<div>
	 			<input type="text" class="form-control" placeholder="Nombre del grupo" v-model="form.name">
	 			<div>
	 			<img src="/qr.png" class="code-qr" v-model="form.group">
	 		</div>
	 		<button class="btn btn-game" v-on:click="create()" >Aceptar</button>
	 	</div>
	 	</b-modal>
		<b-modal id="viewModal" ref="viewModal" hide-footer title="Estudiantes">
				<div class="table">
					<table>
							<thead>
								<tr>
										<th></th>
										<th>Nombres</th>
										<th>Telófono</th>
										<th>Email</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in students" :key="index">
									<td>{{index + 1}}</td>
									<td>{{ item.name }}</td>
									<td>{{ item.number }}</td>
									<td>{{ item.email }}</td>								
								</tr>
							</tbody>
					</table>
				</div>
		</b-modal>
		<b-modal id="editModal" ref="editModal" hide-footer size="lg" title="Editar - Agregar estudiantes">
			<form >
				<div class="row">
					<div class="col-md-6">
						<div class="table">
							<table>
								<thead>
									<tr>
									<th>Agregar estudiante</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<input type="text" class="form-control" placeholder="Agregar Estudiantes" v-model="form.add">
										</td>
									</tr>
									<tr>
										<td>
											<!-- <img  class = "code-qr" src="/qr.png"> -->
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="col-md-6">
						<h3>Estudiantes en el grupo</h3>
						<div class="table">
							<table>
								<thead>
									<tr>
										<th>Nombre</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(item, index) in students" :key="index">
										<td>{{index + 1}}</td>
										<td>{{item.name}}</td>
										<td>
											<button class="btn btn-del btn-sm" v-on:click="outGroup(item)">Eliminar</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<button class="btn btn-group" type="submit" v-on:click="save()">Agregar</button>
				<button class="btn btn-group" v-on:click="closeModal()">Cancelar</button>
			</form>
		</b-modal>
		<b-modal id="delModal" ref="delModal" hide-footer>
				<b-alert show variant="warning">Esta acción es irreversible. ¿Desea borrar grupo?</b-alert>
				<button class="btn btn-del" v-on:click="del()">Borrar</button>
		</b-modal>
</div>
</template>

<script>

import { mapGetters } from "vuex";
import {
	GROUPS_INDEX,
	GROUP_VIEW,
	GROUP_EDIT,
	GROUP_DELETE,
	ALL_STUDENTS,
	GROUP_DELETESTUDENT,
	GROUP_ADDSTUDENT,
	GROUP_CREATE
} 
from "@/store/actions.type";

export default {
 	data: function() {
	    return {
	      	form: {},
	      	curGroup: {},
	      	curStudent: {},
	      	groups: [],
	      	students: [],
	      	filters: {}
		}
	},
	methods: {
		closeModal() {
			this.$refs.editModal.hide();
		},
		saveGroup(item) {
			this.curGroup = item;
		},
		saveGroupToEdit(item) {
			this.view(item);
			this.$store.dispatch(ALL_STUDENTS).then( result => {
				this.allStudents = result;
			})
			.catch(err => {
				this.$snotify.error(err.message);
			})
		},
		clean() {
			console.log('entro a borrar')

			this.curGroup = {};
		},
		list(){
			console.log('entro a listar')
			this.$store.dispatch(GROUPS_INDEX, this.filters)
			.then( groups => {
				this.groups = groups;
			})
			.catch( err => {
				this.$snotify.error(err.message);
			});
		},
		view(item){
			this.$store.dispatch(GROUP_VIEW, item)
			.then( result => {
				this.students = result;
			})
			.catch( err => {
				this.$snotify.error(err.message);
			});
		},
		edit(){
			this.$refs.editModal.hide();
			this.$store.dispatch(GROUP_EDIT, this.curGroup)
			.then( result => {
				this.clean();
				this.list();
				this.$snotify.success(result.message);
			})
			.catch( err => {
				this.$snotify.error(err.message);
			});
		},
		del(){
			this.$refs.delModal.hide();
			this.$store.dispatch(GROUP_DELETE, this.curGroup)
			.then( result => {
						
				this.clean();				
				this.list();
				this.$snotify.success(result.message);
			})
			.catch( err => {
				this.$snotify.error(err.message);
			});
		},

		outGroup(item){
			this.$refs.editModal.hide();
			this.$store.dispatch(GROUP_DELETESTUDENT, item)
			.then( result => {
				console.log("saco al estudiante")
				this.clean();
				this.list();
				this.$snotify.success(result.message);

			})
		},

		save(){
			this.$refs.editModal.hide();
			console.log(this.form);
			this.$store.dispatch( GROUP_ADDSTUDENT, this.form)
			.then( result => {
				this.clean();
				this.list();
				this.$notify.success(result.message);
			})
		},
		create(){
			this.$refs.createGroup.hide();
			this.$store.dispatch(GROUP_CREATE, this.form)
			.then( result => {
				this.list();
				this.$notify.success(result.message);
			})
		}
	},
	mounted () {
		this.list();
	}
}
</script>


<style lang="scss">
.groups-page{
	background:#F0F0F0;
	padding: 30px;
	min-height: 100vh;

	
	.btn-create{
		float: right;
		border-radius: 5px;
		background: #8549BA;
		font-family: sans-serif;
		color:white;
		font-weight: 900;
		border-bottom: 3px solid #500d69;

		&:hover{
			margin-top: 3px;
			border-bottom:  0px;
			background: #A560EB;
		}

	}

	.code-qr{
		margin-top: 20px auto;
		min-height: 300px;
		max-width: 300px;
	}

	.btn-group{
		margin-top: 15px;
		background: #1CB0F6;
		box-shadow: 2px 2px #0875a9;
		border-radius: 5px;
		color: white;
		font-weight: bold;
		margin-left: 5px;
		&:hover{
			background:#14D4F4;
		}

	}

	.btn-del{
		margin-top: 15px;
		background: #D33131;
		box-shadow: 2px 2px #800612;
		border-radius: 5px;
		color: white;
		font-weight: bold;
		margin-left: 5px;
		&:hover{
			background:#FF9797;
		}

	}
}

</style>