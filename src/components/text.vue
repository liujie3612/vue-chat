<template>
	<div class="m-text">
		<textarea placeholder="按Ctrl + Enter 发送" required v-model="text" @keyup="inputing"></textarea>
	</div>
</template>


<script>
	export default {
		props: ['session'],
		data() {
			return {
				text: ''
			};
		},
		methods: {
			inputing() {
				var event = window.event || arguments[0];
				if (event.keyCode === 13 && this.text.length > 1) {
					this.session.messages.push({
						text: this.text,
						date: date.now,
						self: true,
					});
					this.text = '';
				}
			}
		}
	}
</script>

<style scoped>
	.m-text {
		height: 160px;
		border-top: solid 1px #ddd;
	}
	
	textarea {
		padding: 10px;
		height: 100%;
		width: 100%;
		border: none;
		outline: none;
		font-family: "Micrsofot Yahei";
		resize: none;
	}
</style>