<template>
	<div class="m-text">
		<textarea placeholder="按Enter 发送" v-model="text" @keyup="inputing"></textarea>
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
			inputing(event) {
				event = event || window.event;
				if (event.ctrlKey && event.keyCode === 13 && this.text.length) {
					this.session.messages.push({
						text: this.text,
						date: new Date(),
						self: true
					});
					this.text = '';
				} else {
					return false
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