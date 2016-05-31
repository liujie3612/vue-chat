var ref = new Wilddog("https://vuechat-demo.wilddogio.com");
var serveData = function (cb) {
	ref.on('value', function (snapshot) {
		data = {
			user: snapshot.val().user,
			userlist: snapshot.val().sessionList,
			sessionlist: snapshot.val().userList,
			search: '',
			sessionIndex: 0
		};
		cb(data)
	})
}
