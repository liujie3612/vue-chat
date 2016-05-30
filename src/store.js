const key = 'VUE-CHAT';
// 虚拟数据
console.log(localStorage.getItem(key))

if (!localStorage.getItem(key)) {
	let now = new Date();
	let data = {
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
						text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge中。',
						date: now,
                    	},
					{
						text: '下面要集成wd',
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

	};

	localStorage.setItem(key, JSON.stringify(data));
}

export default {
	fetch() {
		return JSON.parse(localStorage.getItem(key));
	},
	save(store) {
		localStorage.setItem(key, JSON.stringify(store));
	}
};