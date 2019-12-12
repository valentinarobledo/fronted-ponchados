<template>
	<div class="podium-page">
		<div class="form">
			<div class="podium">
				<div class="icon"></div>
				<div class="username">{{username1}}</div>
				<div class="points">{{points1}}</div>		
				
			</div>
			
			<div class="podium">
				<div class="icon"></div>
				<div class="username">{{username2}}</div>
				<div class="points">{{points2}}</div>		
				
			</div>

			<div class="podium">
				<div class="icon"></div>
				<div class="username">{{username3}}</div>
				<div class="points">{{points3}}</div>		
				
			</div>

			<button class="btn btn-link">Detalles</button>
			
			

		</div>
		
	</div>
</template>

<script>
	export default {

 	data: function() {
	    return {
	      	username1: "team_1",
	      	username2: "team_2",
	      	username3: "team_3",
	      	points1: 100,
	      	points2: 80,
	      	points3: 75
		}
	}
}
	
</script>

<style lang="scss">
.podium-page{
	min-height: 100vh;
	background: dodgerblue;

	.form {
		max-width: 700px;
		margin:0 auto;
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 0 5px rgba(0,0,0,0.2);
		padding: 70px 0;
		background: #eee;
	}

	.podium{
		max-width:100%;
		min-height: 200px;
		margin: 0 20px 20px 20px;
		box-shadow: 0 0 5px rgba(0,0,0,0.2);
		border-radius: 30px;
		padding: 20px;



	}

	.icon{
		background-image:url("/icon.png");
		background-position: center;
		height: 75px;
		width: 75px;
		border-radius: 100px;
		margin: 10px auto;
		border: 2px solid #14D4F4;
		margin-bottom: 10px;
		margin-top: 10px;
	}

	.username, .points{
		max-width: 80%;
		max-height: 70px;
		margin-top: 20px;
		margin-left: 75px;
		background: #14D4F4;
		border-radius: 10px;
		font-size: 20px;
		color: white;
		font-weight: bold;

	}

	.btn-link{
		text-decoration: none;
	}

}

</style>