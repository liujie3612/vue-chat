<template>
	<div class="m-message">
		<ul>
			<li v-for="item in session.messages">
				<p class="time"><span>{{item.date | time}}</span></p>
				<div class="main" :class="{self : item.self}">
					<img class="avatar" width="30" height="30" :src="item | avatar" />
					<div class="text">{{item.text}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['user', 'userList', 'session'],
	computed: {
		sessionUser() {
			return this.userList[this.session.userId - 1]
		}
	},
	filters: {
		avatar(item) {
			var user = item.self ? this.user : this.sessionUser
			return user && user.img
		},
		time(date) {
			if (typeof date === 'string') {
				date = new Date(date);
			}
			var dateMinutes = date.getMinutes() < 10 ? '0' : '' + date.getMinutes()
			return date.getHours() + ':' + dateMinutes;
		}
	}
};
</script>

<style scope>
	#app .m-message {
		height: calc(100% - 160px);
	}
	
	.m-message {
		padding: 10px 15px;
		overflow-y: scroll;
	}
	
	.m-message li {
		margin-bottom: 15px;
	}
	
	.m-message .time {
		margin: 7px 0;
		text-align: center;
	}
	
	.m-message .time > span {
		display: inline-block;
		padding: 0 18px;
		font-size: 12px;
		color: #fff;
		border-radius: 2px;
		background-color: #dcdcdc;
	}
	
	#app .main {
		position: relative;
		overflow: hidden;
		background-color: #eee;
	}
	
	.m-message .avatar {
		float: left;
		margin: 0 10px 0 0;
		border-radius: 3px;
	}
	
	.m-message .text {
		display: inline-block;
		position: relative;
		padding: 0 10px;
		max-width: calc(100% - 40px);
		min-height: 30px;
		line-height: 2.5;
		font-size: 12px;
		text-align: left;
		word-break: break-all;
		background-color: #fafafa;
		border-radius: 4px;
	}
	
	.m-message .text:before {
		content: " ";
		position: absolute;
		top: 9px;
		right: 100%;
		border: 6px solid transparent;
		border-right-color: #fafafa;
	}
	
	.m-message .self {
		text-align: right;
	}
	
	.m-message .self .avatar {
		float: right;
		margin: 0 0 0 10px;
	}
</style>