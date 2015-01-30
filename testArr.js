
var ar =['ccc','bbb','sss'];
for(i in ar){
	// console.log(ar[i]);
	bb(ar[i], function(){
		console.log('=== finish ===');		
	});
}


function bb (data, cb) {
	setTimeout(function(){
		console.log('bbb, ',data);
		cb();
	}, 2000)
};