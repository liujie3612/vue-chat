<template>
	<div id="app">
		<div class="sidebar">
			<Card :user="user" :search.sync="search"></Card>
			<List :user-list="userList" :session="session" :search="search" :session-index.sync="sessionIndex"></List>
			<!--			user-list必须要用 "-" 的形式-->
		</div>

		<div class="main">
			<Message :user="user" :user-list="userList" :session="session"></Message>
			<Text :session="session"></Text>
		</div>
	</div>
</template>

<script>
import store from './store';
import Card from './components/Card';
import List from './components/List';
import Message from './components/Message';
import Text from './components/Text';

export default {
	data() {
		let serverData = store.fetch();
		return {
			user: serverData.user,
			userList: serverData.userList,
			sessionList: serverData.sessionList,
			search: '',
			sessionIndex: 0
		};
	},
	computed: {
		session() {
			return this.sessionList[this.sessionIndex]
		}
	},
	watch: {
		// 每当sessionList改变时，保存到localStorage中
		sessionList: {
			deep: true,
			handler() {
				store.save({
					user: this.user,
					userList: this.userList,
					sessionList: this.sessionList
				});
			}
		}
	},
	components: {
		Card, List, Message, Text
	}
}
</script>


<style scoped>
	#app {
		margin: 20px auto;
		width: 800px;
		height: 600px;
	}
	
	#app .sidebar {
		float: left;
		width: 200px;
		color: #f4f4f4;
		background-color: #2e3238;
		height: 100%;
	}
	
	#app .main {
		position: relative;
		overflow: hidden;
		background-color: #eee;
		height: 100%;
	}
</style>