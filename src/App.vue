<template>
	<div id="app">
		<div class="sidebar">
			<Card :user="user" :search="search"></Card>
			<List :user-list="userList" :session="session" :session-index.sync="sessionIndex"></List>
			 <!--			user-list必须要用 "-" 的形式-->
		</div>

		<div class="main">
			<Message :user="user" :user-list="userList" :session="session" ></Message>
			<Text :session="session"></Text>
		</div>
	</div>
</template>

<script>
import Card from './components/Card';
import List from './components/List';
import Message from './components/Message';
import Text from './components/Text';
	
export default {
	data() {
		let now = new Date();	
		return {
			//返回用户的信息
			user: {
				id: 0,
				name: 'Liujie',
				img: '/static/images/admin.jpg'
			},
			
			// 用户列表
        	userList: [{
                	id: 1,
                	name: '用户1',
                	img: '/static/images/1.jpg'
            	},
            	{
                	id: 2,
                	name: '用户2',
                	img: '/static/images/2.png'
				}],
			sessionList: [
				{
                	userId: 1,
                	messages: [
                    	{
							text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge。',
                        	date: now,
                    	}, 
                    	{
                        	text: '项目地址: https://github.com/coffcer/vue-chat',
                        	date: now,
						}
                	]
            	},
            	{
                	userId: 2,
                	messages: []
            	}
        	],
			search: '',			
            sessionIndex: 0		
		}
	},
	computed:{
		session () {
			return this.sessionList[this.sessionIndex]
		},
	},
	components: {
		Card,List,Message,Text
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