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
import Card from './components/Card';
import List from './components/List';
import Message from './components/Message';
import Text from './components/Text';
	
export default {
	data() {
		return {		
			user: {},
            userList: [],
            sessionList: [],
            search: '',
            sessionIndex: 0
		}		
	},
	ready:function() {
        let ref = new Wilddog("https://vuechat-demo.wilddogio.com");
       	var serveData = function(cb) {
           ref.on('value', function(snapshot) {
               let data = {
                   user: snapshot.val().user,
                   userlist: snapshot.val().userList,
                   sessionlist: snapshot.val().sessionList,
                };
                cb(data)
            })
        }		
        serveData(function(data) {
            this.$set('user',data.user);
			this.$set('userList',data.userlist);
			this.$set('sessionList',data.sessionlist);
        }.bind(this))
	},	
	computed: {
       session () {
           return this.sessionList[this.sessionIndex];
       }
    },
	watch: {
		'sessionList' : {
			handler:
				function() {
					let ref = new Wilddog("https://vuechat-demo.wilddogio.com");
					ref.update({
						user:this.user,
                		userList: this.userList,
                		sessionList: this.sessionList
					})
				},		
				deep:true	
		}	
	},
	components: {
       Card,List,Message,Text
    }
}	
</script>

<style scoped>
	#app {
		margin: 150px auto;
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