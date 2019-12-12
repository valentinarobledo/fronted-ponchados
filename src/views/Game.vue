<template>
	<div class="game-page">

		<div class="container">
			

			<div class="game-pad">

				<div class="progress-bar">
					<div class="progress" :style="'width: ' + time*100/maxTime + '%'">
						<div class="time"> {{maxTime - time}} segundos</div>
					</div>
				</div>

				
				<div class="ask">
					<h2>{{ask}}</h2>
				</div>


				<ul class="answers">
					<li v-for="(item, index) in options"
					v-on:click="chooseAnswer(item)"
					:class="drawCorrect ? (item.correct ? 'valid' : 'invalid') : ''"
					>
						{{item.text}}
					</li>
				</ul>
			</div>

		</div>

	</div>
</template>


<script>

export default {
	data: function() {
		return {
			options: [],
			ask: "Que es la programación?",
			drawCorrect: false,
			time: 1,
			maxTime: 30
		};
	},
	mounted() {
		this.fetchAnswers();
		this.initCron();
	},
	methods: {
		fetchAnswers() {
			this.options = [
				{ text: "Es una forma de cocinar", correct: false },
				{ text: "xyasd", correct: false },
				{ text: "asd", correct: true },
				{ text: "Esdfsdf", correct: false }
			]
		},
		chooseAnswer(item) {
			this.drawCorrect = true;
		},
		initCron() {
			setInterval(() => {
				if (this.time == this.maxTime) {
					this.time = 0;
					this.chooseAnswer(null);
				}

				this.time++;
			}, 1000);
		}
	}
};
</script>

<style lang="scss">
.game-page {
	background: #eee;
	padding: 30px;
	min-height: 100vh;

	.ask {
		padding: 20px;
		box-shadow: 0 0 20px rgba(0,0,0, 0.4);
		background: #fff;
		border-radius: 10px;
		margin-bottom: 30px;
	}

	.answers {
		padding: 0px;
		li {
			list-style: none;
			padding: 20px;
			box-shadow: 0 0 20px rgba(0,0,0, 0.4);
			background: #fff;
			border-radius: 10px;
			margin-bottom: 30px;
			cursor: pointer;
			transition: .3s;
			&:hover {
				background: #eee;
			}

			&.valid {
				background: #a6e03d;
				color: white;
			}
			&.invalid {
				color: white;
				background: #e24236ed;
			}
		}
	}

	.progress-bar {
		margin-bottom: 20px;
		background: #eee;
		border-radius: 10px;
		.progress {
			text-align: center;
			background: blue;
			color: white;
		}
	}
}
</style>