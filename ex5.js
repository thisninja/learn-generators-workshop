var fs = require('fs');
function run(generator) {
	var it = generator(go);
	function go(err, res) {
		//if(err) it.throw('error');
		if(err) {
			it.throw(err);
		} else {
			it.next(res);
		}
	}
	go();
}
run(function* (done) {
	var dir, r;
	try {
		dir = yield fs.readdir('NoNoNoNo', done);
		file = dir[0];
	} catch (e) {
		file = null
	}
	console.log(file);
});