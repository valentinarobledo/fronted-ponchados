<template>
	<div class="dashboard-page">

		<div class="dashboard">
			<button class="btn btn-dashboard">
				<router-link class="btn2" :to="{name: 'game'}">¡Jugar!</router-link>
			</button></br>

			<button class="btn btn-group">
				<router-link class="btn1" :to="{name: 'groups'}">Ver grupos</router-link>
			</button></br>
			<button class="btn-group">
				<router-link class="btn1" :to="{name: 'workshop'}">Leer texto</router-link>
			</button></br>
			<button class="btn-group">
				<router-link class="btn1" :to="{name: 'upload'}">Subir archivos</router-link>
			</button></br>
			<button class="btn btn-group">
				<router-link class="btn1" :to="{name: 'ask'}">Cuestionarios</router-link>
			</button></br>
		</div>
	</div>
</template>

<style lang="scss">
.dashboard-page {
	background: #4199E3;
	min-height: 100vh;

	.dashboard {
		max-width: 500px;
		min-height: 500px;
		margin: 0 auto;
		border-radius: 10px;
		box-shadow: 0 0 5px rgba(0,0,0,0.2);
		padding: 70px 0;
	}

	.btn-dashboard{
	margin-top: 30px;
	border-bottom: 10px solid #3c7103;
	background:#7AC70C;
	color: white;
	font-size: 70px;
	font-weight: bolder;
	border-radius: 30px;
	&:hover{
		background:#BFF199;
	
	}

	}

	.btn2{
		text-decoration:none;
		color:white;

	}

	.btn-group {
	margin-top: 30px;
	border-bottom: 5px solid #4039393d;
	border-radius: 10px;
	background:#CFCFCF;
	color: black;
	width: 50%;
	float:center;
	font-size: 20px;
	text-align: center;
	font-weight:bolder;
	&:hover{
		background:white;
	}


		}

	.btn1{
		text-decoration:none;
		color:black;
		margin-left: 55px;
	}
}
	
</style>
