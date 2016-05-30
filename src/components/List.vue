<template>
	<div class="m-list">
		<ul>
			<li v-for="item in userList |filterBy search" :class="{active:session.userId === item.id}" @click="select(item)">
				<img class="avatar" width="30" height="30" :alt="item.name" :src="item.img">
				<p class="name">{{item.name}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['session', 'userList', 'sessionIndex', 'search'],
		/*驼峰表示*/
		methods: {
			select(item) {
				this.sessionIndex = this.userList.indexOf(item);
			}
		},
		filters: {
			search(list) {
				return list.filter(item => item.name.indexOf(this.search) > -1);
			}
		}
	};
</script>


<style scoped>
	.m-list li.active {
		background-color: rgba(255, 255, 255, 0.1);
	}
	
	.m-list .avatar {
		border-radius: 2px;
	}
	
	.m-list .name {
		display: inline-block;
		margin: 0 0 0 15px;
	}
	
	.m-list .avatar,
	.m-list .name {
		vertical-align: middle;
	}
	
	.m-list li {
		padding: 12px 15px;
		border-bottom: 1px solid #292C33;
		cursor: pointer;
		-webkit-transition: background-color 0.1s;
		transition: background-color 0.1s;
	}
	
	.m-list li:hover {
		background-color: rgba(255, 255, 255, 0.03);
	}
	
	.m-list li:active {
		background-color: rgba(255, 255, 255, 0.1);
	}
</style>