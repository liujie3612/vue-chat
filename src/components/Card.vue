<template>
	<div class="m-card">
		<header>
			<img class="avatar" width="40" height="40" :alt="user.name" :src="user.img">
			<p class="name">{{user.name}}</p>
		</header>
		<footer>
			<input type="text" class="search" placeholder="search user..." v-model="search">
		</footer>
		
	</div>
</template>


<script>
	export default {
		props: ['user','search']
	};
</script>

<style scoped>
	.m-card {
		padding: 12px;
		border-bottom: solid 1px #24272C;
	}
	
	.m-card .avatar {
		border-radius: 2px;
	}
	
	.m-card .avatar,
	.m-card .name {
		vertical-align: middle;
	}
	
	.m-card .name {
		display: inline-block;
		margin: 0 0 0 15px;
		font-size: 16px;
	}
	
	.m-card .avatar,
	.m-card .name {
		vertical-align: middle;
	}
	
	.m-card footer {
		margin-top: 10px;
	}
	
	.m-card .search {
		padding: 0 10px;
		width: 100%;
		font-size: 12px;
		color: #fff;
		height: 30px;
		line-height: 30px;
		border: solid 1px #3a3a3a;
		border-radius: 4px;
		outline: none;
		background-color: #26292E;
	}
	
	.m-card .search:focus {
		border-color: #66afe9;
		outline: 0;
		-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
	}
	
</style>