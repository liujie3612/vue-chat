const key = 'VUE-CHAT';
// 虚拟数据
if (localStorage.getItem(key) == null) {
	let now = new Date();
	let data = {
		user: {
			id: 0,
			name: 'Liujie',
			img: '/static/images/admin.png'
		},
		userList: [
			{
				id: 1,
				name: '用户1',
				img: '/static/images/1.jpg'
            },
			{
				id: 2,
				name: '用户2',
				img: '/static/images/2.png'
			},
			{
				id: 3,
				name: '用户3',
				img: '/static/images/3.jpg'
			}
		],
		sessionList: [
			{
				userId: 1,
				messages: [
					{
						text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge中。',
						date: now
                    },
					{
						text: '下面要集成wd',
						date: now
					}
                ]
            },
			{
				userId: 2,
				messages: [
					{
						text: "text2",
						date: now
					},
					{
						text: "text2",
						date: now
					}
				]
            },
			{
				userId: 3,
				messages: []
            }

        ]
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