setInterval(function() {
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	try {
		var lastSeen = document.getElementsByClassName("_315-i")[0].innerText;
		console.log(time + ' ' + lastSeen);
	}
	catch(err) {
		
	}
}, 1000);
